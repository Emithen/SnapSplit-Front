// 타입 1 => 검색 아이콘
// 타입 2 => 검색 아이콘 제외

const SearchBar = ({ placeholder, value, onChange }: SearchBarProps) => {
  return (
    <input
      className="flex w-full p-4 text-body-2 rounded-xl border-[1px] border-grey-150"
      placeholder={placeholder}
      value={value ?? ''}
      onChange={onChange}
    />
  );
};

export default SearchBar;
