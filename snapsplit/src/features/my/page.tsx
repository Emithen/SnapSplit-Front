'use client';

import ActionBar from "@/features/my/_components/ActionBar";
import ProfileSection from "@/features/my/_components/ProfileSection";
import MenuSection from "@/features/my/_components/MenuSection";
import { useState } from "react";
import OverlayModal from "@/shared/components/modal/OverlayModal";
import MyPageModal from "@/features/my/_components/modal/MyPageModal";

export default function MyPage() {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center h-screen">
      <ActionBar />
      <ProfileSection />
      <MenuSection onClickLogOut={() => setIsLogOutModalOpen(true)} onClickWithdraw={() => setIsWithdrawModalOpen(true)} />

      <OverlayModal isOpen={isLogOutModalOpen} onClose={() => setIsLogOutModalOpen(false)} position="center">
        <MyPageModal mode="logOut" onClose={() => setIsLogOutModalOpen(false)} />
      </OverlayModal>

      <OverlayModal isOpen={isWithdrawModalOpen} onClose={() => setIsWithdrawModalOpen(false)} position="center">
        <MyPageModal mode="withdraw" onClose={() => setIsWithdrawModalOpen(false)} />
      </OverlayModal>
    </div>
  );
}
 