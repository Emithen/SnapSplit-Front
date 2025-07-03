import BottomSheet from "@/shared/components/bottom-sheet/BottomSheet";
import Calendar from "@/shared/components/Calendar";

const CalendarSheet = ({
  isOpen,
  onClose,
  selectedDate,
  setSelectedDate,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}) => {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </BottomSheet>
  );
};

export default CalendarSheet;
