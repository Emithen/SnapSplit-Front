import Image from 'next/image';
import x_03 from '@public/svg/x_03.svg';
import { SelectedCountryListProps, SelectedCountryProps } from './type';

const SelectedCountry = ({ country, onRemove }: SelectedCountryProps) => {
  return (
    <div className="flex min-w-fit items-center gap-1 text-body-2 rounded-[20px] border border-grey-750 px-3 py-1">
      <p>{country.countryName}</p>
      <button
        onClick={() => onRemove(country)}
        className="cursor-pointer rounded-full outline-1 outline-offset-[-1px] outline-stone-300"
        aria-label={`나라 선택 취소`}
      >
        <Image src={x_03} alt={`x`} />
      </button>
    </div>
  );
};

const SelectedCountryList = ({ selected, onRemove }: SelectedCountryListProps) => {
  if (selected.length === 0) return <div className="pb-5"></div>;
  // 선택된 나라가 없을 경우 빈 공간을 유지하기 위해 패딩을 적용합니다.

  return (
    <div className="py-5 overflow-x-auto">
      <div className="flex gap-2 whitespace-nowrap">
        {selected.map((country) => (
          <SelectedCountry key={country.countryId} country={country} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default SelectedCountryList;
