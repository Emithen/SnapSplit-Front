import Image from 'next/image';

type SelectModeActionBarProps = {
  selectedCount: number;
};

const SelectModeActionBar = ({ selectedCount }: SelectModeActionBarProps) => {
  return (
    <div className="flex-shrink-0 flex items-center justify-between h-14 px-5 py-4 bg-grey-850">
      <Image src="/svg/upload.svg" alt="upload" width={24} height={24} />
      <span className="text-label-2 text-white">{selectedCount}장의 사진이 선택됨</span>
      <button><Image src="/svg/trash.svg" alt="trash" width={24} height={24} /></button>
    </div>
  );
};

export default SelectModeActionBar;