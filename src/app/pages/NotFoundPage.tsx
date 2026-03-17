import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="text-8xl font-bold text-purple-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">페이지를 찾을 수 없습니다</h1>
        <p className="text-gray-600 mb-8">요청하신 슬라이드가 존재하지 않습니다.</p>
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          <Home className="w-5 h-5" />
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
