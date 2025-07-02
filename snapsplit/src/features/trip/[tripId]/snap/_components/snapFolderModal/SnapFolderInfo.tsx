import Image from "next/image";

function SnapFolderInfo() {
  // TODO: 폴더 이름 props로 전달
  const name = "폴더 이름";
  // TODO: 사진 개수 props로 전달
  const photoCount = 48;
  // TODO: 기간 props로 전달
  const period = "2025.6.1 - 6.30";

  return (
    <div className="pt-1 px-5">
      <div className="flex items-center gap-2 text-title-2">
        <Image src="/svg/profile_folder.svg" alt="폴더 썸네일" width={24} height={24} />
        <div>{name}</div>
      </div>
      <div className="flex items-center gap-2 pt-2 text-body-2 text-grey-650">
        <div>{photoCount}장</div>
        <div className="w-[1px] h-4 bg-grey-450"></div>
        <div>{period}</div>
      </div>
    </div>
  );
}

export default SnapFolderInfo;