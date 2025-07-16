function ButtonSection({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex gap-3 pt-2">
      <button className="flex-1 h-13 rounded-xl bg-grey-650 text-label-1 text-white" onClick={onClose}>
        초기화
      </button>
      <button className="flex-2 h-13 rounded-xl bg-primary text-label-1 text-white" onClick={onClose}>
        확인
      </button>
    </div>
  );
}

export default ButtonSection;
