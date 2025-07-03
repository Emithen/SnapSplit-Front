import grabber from '@public/svg/grabber.svg';
import Image from 'next/image';

// 목데이터
const mock = 's4ks0d92';

const AddMemberModal = () => {
  return (
    <div className="display-w-full h-[200px] bg-white rounded-t-[20px] px-5 pt-3 pb-8 flex flex-col gap-3 items-center justify-center">
      <Image src={grabber} alt="handle modal" />
      <div className="flex flex-col gap-1 items-center justify-center">
        <label className="text-grey-550 text-body-2">초대 코드</label>
        <p className="text-title-1 py-2">{mock}</p>
      </div>
      <button className="min-w-[320px] max-w-[375px] w-full lg:max-w-[360px] mx-auto py-[14px] bg-primary rounded-xl flex justify-center items-center">
        <div className="text-white text-label-1">복사하기</div>
      </button>
    </div>
  );
};

export default AddMemberModal;
