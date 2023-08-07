import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h1>현재 페이지에 대한 접근 권한이 없습니다</h1>
      <p>
        <Link href="/">홈으로 돌아가기</Link>
      </p>
    </div>
  );
};

export default NotFound;
