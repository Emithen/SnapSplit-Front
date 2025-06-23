import { RefObject } from 'react';
import Image from 'next/image';

interface UploadButtonProps {
  inputRef: RefObject<HTMLInputElement | null>;
}

export default function UploadButton({ inputRef }: UploadButtonProps) {
    return (
      <div className="fixed bottom-18 right-4">
        <button
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-0.5 bg-grey-650 text-white px-4 py-3 rounded-full shadow-md"
        >
          <Image src="/svg/plus-2.svg" alt="plus" width={24} height={24} />
          <div className="text-body-2">사진 업로드</div>
        </button>
      </div>
    );
  }