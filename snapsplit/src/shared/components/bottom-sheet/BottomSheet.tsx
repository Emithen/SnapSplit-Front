import OverlayModal from '../modal/OverlayModal';
import Image from 'next/image';
import grabber from '@public/svg/grabber.svg';

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose} position="bottom">
      <div className="flex flex-col items-center w-full pt-3 px-5 pb-8 gap-3 bg-white rounded-t-xl">
        <Image alt="grabber" src={grabber} width={grabber.width} height={grabber.height} />
        {children}
      </div>
    </OverlayModal>
  );
};

export default BottomSheet;
