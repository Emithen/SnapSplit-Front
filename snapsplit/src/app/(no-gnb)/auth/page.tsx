'use client';

export default function Auth() {
  const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  }
  return <button onClick={kakaoLogin} className="bg-amber-300 w-full py-5 px-4 cursor-pointer">로그인 버튼</button>;
}
