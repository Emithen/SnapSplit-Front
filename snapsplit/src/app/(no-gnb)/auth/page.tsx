'use client';

export interface AuthProps {
  name: string;
}

export default function Auth({}: AuthProps) {
  const REST_API_KEY = '5099e273f6583110b2cd3053783eddb4';
  const REDIRECT_URI = 'http://localhost:3000/api/auth/callback/kakao';

  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  }
  return <button onClick={kakaoLogin} className="bg-amber-300 w-full py-5 px-4 cursor-pointer">로그인 버튼</button>;
}
