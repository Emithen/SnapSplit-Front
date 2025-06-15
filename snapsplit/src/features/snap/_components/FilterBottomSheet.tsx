interface FilterBottomSheetProps {
    onClose: () => void;
  }
  
  export default function FilterBottomSheet({ onClose }: FilterBottomSheetProps) {
    const people = ['유빈', '지수', '나형', '연수'];
    const locations = ['런던', '파리', '취리히'];
  
    return (
      <div className="fixed bottom-0 w-full bg-white border-t rounded-t-xl p-4 shadow-xl">
        <p className="font-semibold mb-2">여행 일자</p>
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <button key={i} className="border px-3 py-1 rounded-full">Day {i + 1}</button>
          ))}
        </div>
        <p className="font-semibold mt-4 mb-2">사람</p>
        <div className="flex gap-2 flex-wrap">
          {people.map(name => (
            <button key={name} className="border px-3 py-1 rounded-full">{name}</button>
          ))}
        </div>
        <p className="font-semibold mt-4 mb-2">장소</p>
        <div className="flex gap-2 flex-wrap">
          {locations.map(loc => (
            <button key={loc} className="border px-3 py-1 rounded-full">{loc}</button>
          ))}
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button className="text-gray-500">초기화</button>
          <button
            className="bg-black text-white px-4 py-1 rounded-full"
            onClick={onClose}
          >
            확인
          </button>
        </div>
      </div>
    );
  }
  