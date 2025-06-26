'use client';

import Modal from './Modal'; // 너가 만든 기본 모달
import { usePreventScroll } from '@/shared/components/modal/usePreventScroll';
import { ReactNode, useRef } from 'react';

type OverlayModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function OverlayModal({ isOpen, onClose, children }: OverlayModalProps) {
  usePreventScroll(isOpen);

  const modalBackground = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <Modal layer="overlay">
      <div
        className="w-full h-full bg-black/40 flex justify-center"
        ref={modalBackground}
        onClick={(e) => {
          if (e.target === modalBackground.current) {
            onClose();
          }
        }}
      >
        {children}
      </div>
    </Modal>
  );
}
