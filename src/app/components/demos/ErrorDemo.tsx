import { useState } from 'react';
import { AlertTriangle, Bug, XCircle } from 'lucide-react';

export function ErrorDemo() {
  const [errorLogs, setErrorLogs] = useState<Array<{ type: string; message: string }>>([]);

  const addError = (type: string, message: string) => {
    setErrorLogs(prev => [...prev, { type, message }]);
  };

  const triggerReferenceError = () => {
    try {
      // @ts-ignore - Intentional error for demo
      console.log(nonExistentVariable);
    } catch (error: any) {
      addError('ReferenceError', error.message);
      console.error('ReferenceError:', error);
    }
  };

  const triggerTypeError = () => {
    try {
      const obj = null;
      // @ts-ignore - Intentional error for demo
      obj.property;
    } catch (error: any) {
      addError('TypeError', error.message);
      console.error('TypeError:', error);
    }
  };

  const triggerSyntaxErrorDemo = () => {
    // 문법 오류는 실행 전에 발생하므로 시뮬레이션
    addError('SyntaxError (예시)', 'Unexpected token }');
    console.error('SyntaxError 예시: 잘못된 문법으로 인한 오류');
  };

  const clearErrors = () => {
    setErrorLogs([]);
    console.clear();
  };

  return (
    <div className="space-y-6">
      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-red-800 flex items-center gap-2">
          <Bug className="w-5 h-5" />
          에러 발생 체험하기
        </h3>
        
        <p className="text-sm text-red-700 mb-4">
          💡 <strong>중요:</strong> F12를 눌러 개발자 도구 콘솔을 열어보세요! 
          실제 에러 메시지와 스택 트레이스를 확인할 수 있습니다.
        </p>

        <div className="space-y-2">
          <button
            onClick={triggerReferenceError}
            className="w-full px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
          >
            <XCircle className="w-4 h-4" />
            ReferenceError 발생시키기
          </button>
          
          <button
            onClick={triggerTypeError}
            className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
          >
            <XCircle className="w-4 h-4" />
            TypeError 발생시키기
          </button>
          
          <button
            onClick={triggerSyntaxErrorDemo}
            className="w-full px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
          >
            <AlertTriangle className="w-4 h-4" />
            SyntaxError 예시 보기
          </button>

          <button
            onClick={clearErrors}
            className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors text-sm"
          >
            에러 로그 지우기
          </button>
        </div>
      </div>

      {/* Error Log Display */}
      <div className="bg-gray-900 rounded-xl p-4 min-h-[200px]">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-mono text-sm">Console Output:</h4>
          <span className="text-gray-500 text-xs">F12로 실제 콘솔도 확인하세요</span>
        </div>
        
        {errorLogs.length === 0 ? (
          <div className="text-gray-500 text-center py-8 font-mono text-sm">
            위 버튼을 클릭하여 에러를 발생시켜보세요
          </div>
        ) : (
          <div className="space-y-2">
            {errorLogs.map((error, index) => (
              <div
                key={index}
                className="bg-red-900/30 border border-red-700 rounded p-3 font-mono text-sm"
              >
                <div className="text-red-400 font-semibold flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  {error.type}
                </div>
                <div className="text-red-300 mt-1 ml-6">{error.message}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Common Errors Reference */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
        <h4 className="font-semibold text-blue-900 mb-3">자주 발생하는 에러들:</h4>
        <div className="space-y-2 text-sm">
          <div>
            <strong className="text-blue-800">ReferenceError:</strong>
            <span className="text-gray-700"> 존재하지 않는 변수를 참조할 때</span>
          </div>
          <div>
            <strong className="text-blue-800">TypeError:</strong>
            <span className="text-gray-700"> 잘못된 타입의 값을 사용할 때</span>
          </div>
          <div>
            <strong className="text-blue-800">SyntaxError:</strong>
            <span className="text-gray-700"> 문법이 잘못되었을 때</span>
          </div>
          <div>
            <strong className="text-blue-800">RangeError:</strong>
            <span className="text-gray-700"> 값이 유효한 범위를 벗어날 때</span>
          </div>
        </div>
      </div>

      {/* Error Code Examples */}
      <div className="bg-gray-800 rounded-xl p-6">
        <h4 className="text-white font-semibold mb-3">에러를 유발하는 코드 예시:</h4>
        
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="text-red-400 text-xs mb-2">❌ ReferenceError</div>
            <pre className="text-gray-300 text-sm font-mono">
{`console.log(myVariable);
// myVariable is not defined`}
            </pre>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <div className="text-red-400 text-xs mb-2">❌ TypeError</div>
            <pre className="text-gray-300 text-sm font-mono">
{`const obj = null;
obj.property;
// Cannot read property of null`}
            </pre>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <div className="text-red-400 text-xs mb-2">❌ SyntaxError</div>
            <pre className="text-gray-300 text-sm font-mono">
{`if (true) {
  console.log("Hello"
}
// Missing closing parenthesis`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
