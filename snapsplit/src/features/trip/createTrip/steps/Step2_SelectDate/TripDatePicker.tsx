import Calendar from '@/shared/components/Calendar';
import { format } from 'date-fns';

type TripDatePickerProps = {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
};

const TripDatePicker = ({ startDate, endDate, onStartDateChange, onEndDateChange }: TripDatePickerProps) => {

  return (
    <div className="flex flex-col items-center gap-5 ">
      {/* 떠나는 날 & 돌아오는 날 */}
      <div className="flex gap-2.5 w-full">
        <div className="flex-1 rounded-[12px] border-1 border-grey-250">
          <div className={`h-12 px-4 flex items-center text-body-3 ${startDate ? 'text-grey-1000' : 'text-grey-450'}`}>{startDate ? format(startDate, 'yyyy. M. d') : '떠나는 날'}</div>
        </div>
        <div className="flex-1 rounded-[12px] border-1 border-grey-250">
          <div className={`h-12 px-4 flex items-center text-body-3 ${endDate ? 'text-grey-1000' : 'text-grey-450'}`}>{endDate ? format(endDate, 'yyyy. M. d') : '돌아오는 날'}</div>
        </div>
      </div>

      {/* 날짜 선택 */}
      <div className="w-full border-1 border-grey-250 rounded-[12px]">
        <Calendar
          mode="range"
          selectedRange={{ start: startDate, end: endDate }}
          onSelectDate={(date) => {
            if (!startDate || (startDate && endDate)) {
              onStartDateChange(date);
              onEndDateChange(null);
            } else if (startDate && !endDate) {
                if (date < startDate) {
                    onEndDateChange(startDate);
                    onStartDateChange(date);
                } else if (date === startDate) {
                    onStartDateChange(null);
                    onEndDateChange(null);
                } else {
                    onEndDateChange(date);
                }
            }
          }}
        />
      </div>
    </div>
  );
};

export default TripDatePicker;
