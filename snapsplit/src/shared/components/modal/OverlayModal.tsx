'use client';

import Modal from './Modal'; // 너가 만든 기본 모달
import { usePreventScroll } from '@/shared/components/modal/usePreventScroll';
import { ReactNode, useRef } from 'react';
import { Layer } from './type';

type OverlayModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  layer: Layer;
};

export default function OverlayModal({ isOpen, onClose, children, layer }: OverlayModalProps) {
  usePreventScroll(isOpen);

  const modalBackground = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return (
    <Modal layer={layer}>
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
