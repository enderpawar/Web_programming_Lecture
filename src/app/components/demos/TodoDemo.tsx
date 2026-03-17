import { useState } from 'react';
import { Trash2, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function TodoDemo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">나만의 작은 ToDo 보드</h2>
        <p className="text-blue-100">할 일을 추가하고 관리해보세요</p>
        
        {totalCount > 0 && (
          <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
            <span className="text-sm">
              완료: {completedCount} / {totalCount}
            </span>
          </div>
        )}
      </div>

      <div className="bg-white rounded-b-2xl shadow-xl p-6">
        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="할 일을 입력하세요..."
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 active:scale-95"
          >
            추가
          </button>
        </form>

        {todos.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p className="text-lg mb-2">📝</p>
            <p>할 일을 추가해보세요!</p>
          </div>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <motion.li
                key={todo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                  todo.completed
                    ? 'bg-gray-50 border-gray-200'
                    : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'
                }`}
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    todo.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300 hover:border-purple-500'
                  }`}
                >
                  {todo.completed && <Check className="w-4 h-4 text-white" />}
                </button>

                <span
                  className={`flex-1 transition-all ${
                    todo.completed
                      ? 'line-through text-gray-400'
                      : 'text-gray-800 font-medium'
                  }`}
                >
                  {todo.text}
                </span>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="flex-shrink-0 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-200">
        <h3 className="font-semibold text-purple-900 mb-3">🎯 구현된 기능:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">✓</span>
            <span><strong>할 일 추가:</strong> 폼 제출 이벤트 처리</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">✓</span>
            <span><strong>완료 토글:</strong> State 업데이트로 체크박스 구현</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">✓</span>
            <span><strong>삭제 기능:</strong> 배열 필터링으로 항목 제거</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">✓</span>
            <span><strong>애니메이션:</strong> Motion 라이브러리로 부드러운 전환</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">✓</span>
            <span><strong>진행 상황:</strong> 완료된 항목 카운트 표시</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
