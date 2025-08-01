'use client';

import { useEffect } from 'react';
import publicInstance from '@/api/instance/publicInstance';
import { useRouter } from 'next/navigation';

export default function KaKaoRedirect() {
  const router = useRouter();
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    console.log(code);

    const kakaoLogin = async () => {
      try {
        const res = await publicInstance.post(`/auth/kakao/login?code=${code}`);
        if (res.status === 200) {
          router.push('/home');
        }
      } catch (error) {
        console.log(error);
        alert("로그인에 실패했습니다.");
        router.push('/');
      }
    };
    kakaoLogin();
  }, []);
  return <div>Redirecting...</div>;
}
