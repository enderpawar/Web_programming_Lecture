import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export function IntroDemo() {
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, message]);
  };

  const handleConsoleLog = () => {
    addLog('> console.log("안녕하세요!")');
    addLog('안녕하세요!');
  };

  const handleAlert = () => {
    alert('환영합니다!');
    addLog('> alert("환영합니다!")');
    addLog('✓ Alert 창이 표시되었습니다');
  };

  const handleConfirm = () => {
    const result = confirm('계속하시겠습니까?');
    addLog('> confirm("계속하시겠습니까?")');
    addLog(`사용자 응답: ${result ? 'OK (true)' : 'Cancel (false)'}`);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  useEffect(() => {
    // F12 안내 메시지
    addLog('💡 Tip: F12를 눌러 실제 개발자 도구 콘솔도 확인해보세요!');
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
        <Terminal className="w-5 h-5 text-purple-600" />
        인터랙티브 콘솔 데모
      </h3>
      
      <div className="space-y-3 mb-4">
        <button
          onClick={handleConsoleLog}
          className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
        >
          console.log 실행
        </button>
        
        <button
          onClick={handleAlert}
          className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
        >
          alert 실행
        </button>
        
        <button
          onClick={handleConfirm}
          className="w-full px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-medium"
        >
          confirm 실행
        </button>

        <button
          onClick={clearLogs}
          className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors text-sm"
        >
          콘솔 지우기
        </button>
      </div>

      <div className="bg-gray-900 rounded-lg p-4 min-h-[200px] max-h-[300px] overflow-y-auto font-mono text-sm">
        {logs.length === 0 ? (
          <div className="text-gray-500 text-center py-8">
            버튼을 클릭해서 출력을 확인하세요
          </div>
        ) : (
          <div className="space-y-1">
            {logs.map((log, index) => (
              <div
                key={index}
                className={`${
                  log.startsWith('>')
                    ? 'text-blue-400'
                    : log.startsWith('✓')
                    ? 'text-green-400'
                    : log.startsWith('💡')
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              >
                {log}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
