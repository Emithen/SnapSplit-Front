import Image from 'next/image';
import unchecked from '@public/svg/check_grey.svg';
import checked from '@public/svg/check-green.svg';

export interface MemberItemProps {
  name: string;
  isSelected?: boolean;
}

const MemberItem = ({ name, isSelected }: MemberItemProps) => {
  return (
    <div className="py-4 flex gap-1 justify-start cursor-pointer items-center">
      <Image src={isSelected ? checked : unchecked} alt="check Icon" />
      <label className={`text-body-1 cursor-pointer ${isSelected ? 'text-primary' : ''}`}>{name}</label>
    </div>
  );
};

export default function MemberPickBottomSheet({ label, ssName }: MemberPickBottomSheetProps) {
  return (
    <div className="flex flex-col w-full">
      <MemberItem name={'윤유빈'} isSelected={true} />
      <MemberItem name={'권은정'} isSelected={false} />
    </div>
  );
}
