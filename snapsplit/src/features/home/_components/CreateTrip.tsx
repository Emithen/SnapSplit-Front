import Link from 'next/link';

// 로그인 여부를 가져옴
// 로그인 했을 시,
// 여행 전 / 여행 중 / 여행 후에 따라 다르게 표시

const CreateTrip = () => {
  return (
    <section className="flex flex-col w-full p-4 pt-2 rounded-b-3xl gap-5 bg-white">
      <span className="text-head-1 flex-auto">
        스냅스플릿과 함께
        <br /> 재밌는 여행을 떠나볼까요?
      </span>
      <div className="flex flex-col w-full gap-4">
        <Link href="/trip/createTrip" className="flex bg-primary py-[14px] px-5 justify-center text-grey-50 rounded-xl">
          여행 등록하기
        </Link>
        <p className="flex justify-center underline text-grey-550 text-body-2 items-center cursor-pointer">
          코드로 여행 참여하기
        </p>
      </div>
    </section>
  );
};

export default CreateTrip;
