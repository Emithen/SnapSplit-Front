import { RefObject } from 'react';
import Image from 'next/image';

interface UploadButtonProps {
  inputRef: RefObject<HTMLInputElement | null>;
}

export default function UploadButton({ inputRef }: UploadButtonProps) {
  return (
    <div className="flex items-center mt-auto mb-18 ml-auto mr-5 pointer-events-auto bg-primary pl-2 pr-3 h-11 rounded-full shadow-[0px_0px_2px_0px_rgba(34,34,34,0.25)]">
      <button onClick={() => inputRef.current?.click()} className="flex items-center gap-0.5">
        <Image src="/svg/plus-upload.svg" alt="plus" width={24} height={24} />
        <div className="text-body-1 text-white">사진 업로드</div>
      </button>
    </div>
  );
}
