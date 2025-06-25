'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface FullModalProps {
  children: ReactNode;
}

export default function FullModal({ children }: FullModalProps) {
  return createPortal(
    <div className="fixed inset-0 z-fullscreen flex items-center justify-center">{children}</div>,
    document.getElementById('modal-root')!
  );
}
