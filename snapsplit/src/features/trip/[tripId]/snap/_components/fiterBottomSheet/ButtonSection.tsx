function ButtonSection({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex gap-3">
      <button className="w-22 h-13 rounded-lg bg-grey-450 text-label-1 text-white" onClick={onClose}>초기화</button>
      <button
        className="w-55 h-13 rounded-lg bg-grey-750 text-white"
        onClick={onClose}
      >
        확인
      </button>
    </div>
  );
}

export default ButtonSection;
