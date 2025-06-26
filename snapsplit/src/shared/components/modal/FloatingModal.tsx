'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface FloatingModalProps {
  children: ReactNode;
}

export default function FloatingModal({ children }: FloatingModalProps) {
  return createPortal(
    <div className="display-base z-float fixed inset-0 flex items-center justify-center pointer-events-none">{children}</div>,
    document.getElementById('modal-root')!
  );
}
