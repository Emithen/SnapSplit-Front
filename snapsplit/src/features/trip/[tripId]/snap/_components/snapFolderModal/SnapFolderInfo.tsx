import Image from "next/image";

function SnapFolderInfo() {
  // TODO: 폴더 이름 props로 전달
  const name = "이름";

  return (
    <div className="px-5 pb-5">
      <div className="flex items-center gap-2 text-label-1">
        <Image src="/svg/profile_folder.svg" alt="폴더 썸네일" width={20} height={20} />
        <div>{name}</div>
      </div>
    </div>
  );
}

export default SnapFolderInfo;