import FloatingModal from '@/shared/components/modal/FloatingModal';
import Image from 'next/image';

const StatusMessage = ({ result }: { result: string }) => {
  return (
    <FloatingModal>
      <div className="flex flex-col items-center w-full px-5 mb-34 mt-auto">
        <div className="px-4 py-2.5 rounded-2xl bg-grey-850 text-label-2 text-white">공동 경비 잔액이 <span className="text-primary">{result}</span> 로 늘어나요.</div>
        <Image src="/svg/bubble-tail.svg" alt="bubble-tail" width={18} height={18} />
      </div>
    </FloatingModal>
  );
};

export default StatusMessage;
