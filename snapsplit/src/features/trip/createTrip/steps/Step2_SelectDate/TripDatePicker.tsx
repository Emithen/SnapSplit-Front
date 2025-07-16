import Calendar from '@/shared/components/Calendar';
import { useState } from 'react';
import { format } from 'date-fns';

const TripDatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="flex flex-col items-center gap-5 ">
      {/* 떠나는 날 & 돌아오는 날 */}
      <div className="flex gap-2.5 w-full">
        <div className="flex-1 rounded-[12px] border-1 border-grey-250">
          <div className={`h-12 px-4 flex items-center text-body-2 ${startDate ? 'text-grey-1000' : 'text-grey-450'}`}>{startDate ? format(startDate, 'yyyy. M. d') : '떠나는 날'}</div>
        </div>
        <div className="flex-1 rounded-[12px] border-1 border-grey-250">
          <div className={`h-12 px-4 flex items-center text-body-2 ${endDate ? 'text-grey-1000' : 'text-grey-450'}`}>{endDate ? format(endDate, 'yyyy. M. d') : '돌아오는 날'}</div>
        </div>
      </div>

      {/* 날짜 선택 */}
      <div className="w-full border-1 border-grey-250 rounded-[12px]">
        <Calendar
          mode="range"
          selectedRange={{ start: startDate, end: endDate }}
          onSelectDate={(date) => {
            if (!startDate || (startDate && endDate)) {
              setStartDate(date);
              setEndDate(null);
            } else if (startDate && !endDate) {
                if (date < startDate) {
                    setEndDate(startDate);
                    setStartDate(date);
                } else {
                    setEndDate(date);
                }
            }
          }}
        />
      </div>
    </div>
  );
};

export default TripDatePicker;
