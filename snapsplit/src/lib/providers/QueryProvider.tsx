'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, useEffect } from 'react';

interface QueryProviderProps {
  children: React.ReactNode;
  showDevtools?: boolean;
}

export default function QueryProvider({ children, showDevtools = false }: QueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5분
            retry: 1,
          },
        },
      })
  );

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // SSR 중에는 기본 렌더링, 클라이언트에서 마운트 후 QueryProvider 적용
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {showDevtools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
