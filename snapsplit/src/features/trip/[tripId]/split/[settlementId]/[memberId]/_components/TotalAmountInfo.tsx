import { TotalAmountInfoProps } from '../type';

export default function TotalAmountInfo({ name, totalAmount }: TotalAmountInfoProps) {
  if (name === '공동경비') {
    return (
      <div className="px-5 py-3 text-head-1 pb-5">
        이번 여행에서 공동경비로
        <br />
        <span className="text-primary">{totalAmount}원</span>을 썼어요!
      </div>
    );
  }

  return (
    <div className="px-5 py-3 text-head-1 pb-5">
      {name}님은 이번 여행에서
      <br />
      <span className="text-primary">{totalAmount}원</span>을 썼어요!
    </div>
  );
}
