interface SortBottomSheetProps {
    selectedSort: string;
    onSelect: (opt: string) => void;
  }
  
  export default function SortBottomSheet({ selectedSort, onSelect }: SortBottomSheetProps) {
    const options = ['최신순', '이름순', '좋아요순'];
    return (
      <div className="fixed bottom-0 w-full bg-white border-t rounded-t-xl p-4 shadow-xl">
        <p className="font-semibold mb-2">정렬</p>
        {options.map(opt => (
          <div key={opt} className="flex items-center py-1">
            <input
              type="radio"
              id={opt}
              name="sort"
              checked={selectedSort === opt}
              onChange={() => onSelect(opt)}
            />
            <label htmlFor={opt} className="ml-2">{opt}</label>
          </div>
        ))}
      </div>
    );
  }