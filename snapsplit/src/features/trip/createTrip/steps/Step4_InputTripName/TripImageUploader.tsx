import plus from '@public/svg/plus.svg';
import Image from 'next/image';

const TripImageUploader = () => {
  return (
    <div className="pb-6 flex flex-col justify-center items-center">
      <div className="w-28 h-28 rounded-[20px] outline-1 outline-offset-[-1px] outline-neutral-200 inline-flex justify-center items-center">
        <div className="w-6 h-6 relative">
          <Image src={plus} alt="plus" />
        </div>
      </div>
      <button className="pt-2 text-body-2 text-grey-450 ml-3">사진 변경</button>
    </div>
  );
};

export default TripImageUploader;
