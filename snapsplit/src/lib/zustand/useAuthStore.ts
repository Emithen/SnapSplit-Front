import { create } from 'zustand';

interface User {
  userId: number;
  userName: string;
  userEmail: string;
}

interface UserState {
  user: User | null; // 현재 로그인한 유저의 상태를 담음
  isLoggedIn: boolean; // 로그인 여부 체크 -> 미들웨어 등에 사용
  setUser: (user: User | null) => void; // 유저 상태 업데이트 함수
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,

  // 로그인 시 user와 함께 isLoggedIn 업데이트
  setUser: (user) =>
    set({
      user,
      isLoggedIn: !!user,
    }),

  // 로그아웃 시 초기화
  clearUser: () =>
    set({
      user: null,
      isLoggedIn: false,
    }),
}));