'use client';

import { useEffect, useRef } from 'react';
import publicInstance from '@/api/instance/publicInstance';
import { useRouter } from 'next/navigation';

export default function KaKaoRedirect() {
  console.log('[KakaoRedirect]: 마운트');
  const hasRequested = useRef(false);
  const router = useRouter();
  useEffect(() => {
    if (hasRequested.current) return;
    hasRequested.current = true;

    const code = new URLSearchParams(window.location.search).get('code');

    if (!code) {
      alert('인증 코드가 없습니다.');
      router.push('/');
      return;
    }

    const kakaoLogin = async () => {
      try {
        const res = await publicInstance.post(`/auth/kakao/login?code=${code}`);
        if (res.status === 200) {
          router.push('/home');
        }
      } catch (error) {
        console.error('카카오 로그인 실패 : ', error);
        router.push('/');
      }
    };
    kakaoLogin();
  }, [router]);

  return <div>Redirecting...</div>;
}
