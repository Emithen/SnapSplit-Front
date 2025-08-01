'use client';

import { useEffect } from 'react';
import publicInstance from '@/api/instance/publicInstance';

export default function KaKaoRedirect() {
  useEffect(() => {
    let didRun = false;
    const code = new URLSearchParams(window.location.search).get('code');
    console.log(code);

    const kakaoLogin = async () => {
      const res = await publicInstance.post(`/auth/kakao/login?code=${code}`);
      console.log(res);
    };
    if (!didRun) {
      kakaoLogin();
      didRun = true;
    }
  }, []);
  return <div>Redirecting...</div>;
}
