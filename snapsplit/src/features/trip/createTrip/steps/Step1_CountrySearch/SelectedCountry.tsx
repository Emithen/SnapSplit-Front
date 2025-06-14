import Image from 'next/image';
import x_03 from '@public/svg/x_03.svg';

type Props = {
  selected: string[];
  onRemove: (countryName: string) => void;
};

const SelectedCountry = ({ selected, onRemove }: Props) => {
  if (selected.length === 0) return <div className="pb-5"></div>;
  // 선택된 나라가 없을 경우 빈 공간을 유지하기 위해 패딩을 적용합니다.

  return (
    <div className="flex gap-2 flex-wrap py-5">
      {selected.map((name) => (
        <div
          key={name}
          className="flex text-body-2 rounded-[20px] border border-grey-750 px-3 pr-1 py-1 gap-1 items-center"
        >
          <p>{name}</p>
          <button
            className="cursor-pointer rounded-[30px] outline-1 outline-offset-[-1px] outline-stone-300"
            onClick={() => onRemove(name)}
          >
            <Image src={x_03} alt="x"></Image>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedCountry;
