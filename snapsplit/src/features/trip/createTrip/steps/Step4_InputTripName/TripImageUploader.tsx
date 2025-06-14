import plus from '@public/svg/plus.svg';
import Image from 'next/image';
import { useRef, useState } from 'react';

const TripImageUploader = () => {
  // 업로드한 사진 미리보기용 URL 담기
  const [uploadedImage, setuploadedImage] = useState<string | null>(null);

  // 사진 업로드 input 제어용 ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 클릭 시 사진 업로드 input 열기
  const openFileInputRef = () => {
    fileInputRef.current?.click();
  };

  // 파일 업로드 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    // 브라우저가 미리보기를 위한 URL을 생성하고, 이를 프리뷰로 사용
    if (file) {
      const uploadedImageUrl = URL.createObjectURL(file);
      setuploadedImage(uploadedImageUrl);
    }
  };

  return (
    <div className="pb-6 flex flex-col justify-center items-center">
      {/* 버튼 클릭으로 호출되는 사진 업로드 input */}
      <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />

      {/* UI */}
      <div
        className="flex w-28 h-28 cursor-pointer rounded-[20px] overflow-hidden outline-1 outline-offset-[-1px] outline-neutral-200 justify-center items-center "
        onClick={openFileInputRef}
      >
        {uploadedImage ? (
          <Image src={uploadedImage} alt="preview" width={112} height={112} />
        ) : (
          <Image src={plus} alt="plus" className="w-6 h-6 relative" />
        )}
      </div>

      <button className="pt-2 text-body-2 text-grey-450 ml-3 cursor-pointer" onClick={openFileInputRef}>
        사진 변경
      </button>
    </div>
  );
};

export default TripImageUploader;
