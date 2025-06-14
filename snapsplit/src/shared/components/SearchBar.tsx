import search from '@public/svg/search.svg';
import Image from 'next/image';
import { SearchBarProps, SearchBarType } from '@/shared/types/ui';

const SearchBar = ({ placeholder, value, onChange, type = SearchBarType.WithIcon }: SearchBarProps) => {
  return (
    <div className="flex w-full rounded-xl border-[1px] border-grey-150 items-center justify-center pr-4">
      <input
        className="flex w-full p-4 text-body-2 outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === SearchBarType.WithIcon && <Image alt="search" src={search} />}
    </div>
  );
};

export default SearchBar;
