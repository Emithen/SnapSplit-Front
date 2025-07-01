
import Image from 'next/image';

function SnapFolderHeader() {
  return (
    <div className="flex justify-between items-center w-full h-12 px-5 py-3">
      <Image 
        src="/svg/leftArrow.svg"
        alt="폴더 썸네일"
        width={24}
        height={24}
      />
      <div className="text-body-2">
        사진 선택
      </div>
    </div>
  );
}

export default SnapFolderHeader;