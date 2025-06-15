interface SortFilterBarProps {
  selectedSort: string;
  onSortOpen: () => void;
  onFilterOpen: () => void;
}

export default function SortFilterBar({ selectedSort, onSortOpen, onFilterOpen }: SortFilterBarProps) {
  return (
    <div className="flex justify-between items-center p-4 text-sm">
      <button onClick={onSortOpen}>{selectedSort} ▾</button>
      <button onClick={onFilterOpen}>정렬 ▾</button>
    </div>
  );
}