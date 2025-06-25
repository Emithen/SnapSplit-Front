'use client';

import { ReactNode } from 'react';
import Modal from './Modal';

type FullScreenModalProps = {
  children: ReactNode;
};

export default function FullScreenModal({ children }: FullScreenModalProps) {
  return <Modal layer="fullscreen">{children}</Modal>;
}
