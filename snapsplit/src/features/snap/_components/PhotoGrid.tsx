export default function PhotoGrid() {
    return (
      <div className="grid grid-cols-3 gap-2 px-2 flex-1 overflow-y-auto">
        {Array.from({ length: 15 }).map((_, idx) => (
          <div key={idx} className="w-full aspect-square bg-gray-200 rounded-md" />
        ))}
      </div>
    );
  }