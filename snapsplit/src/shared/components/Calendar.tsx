'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { addMonths, format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay } from 'date-fns';
import rightArrow from '@public/svg/rightArrow.svg';
import leftArrow from '@public/svg/leftArrow.svg';
import Image from 'next/image';

type CalendarProps = {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
};

export default function Calendar({ selectedDate, setSelectedDate }: CalendarProps) {
  const today = useMemo(() => new Date(), []);
  const [currentMonth, setCurrentMonth] = useState<Date>(startOfMonth(today));

  const handlePrevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const generateDates = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const dates = eachDayOfInterval({ start, end });

    const firstDayOfWeek = getDay(start);
    return Array(firstDayOfWeek).fill(null).concat(dates);
  };

  useEffect(() => {
    if (!selectedDate) {
      setSelectedDate(today);
    }
  }, [selectedDate, setSelectedDate, today]);

  return (
    <div className="flex flex-col items-center justify-center gap-2 py-4 bg-white rounded-2xl w-full">
      <div className="flex items-center justify-between w-70">
        <h2 className="text-label-1">{format(currentMonth, 'yyyy년 M월')}</h2>
        <div className="flex items-center gap-3">
          <button onClick={handlePrevMonth}>
            <Image alt="arrow" src={leftArrow} width={24} height={24} />
          </button>
          <button onClick={handleNextMonth}>
            <Image alt="arrow" src={rightArrow} width={24} height={24} />
          </button>
        </div>
      </div>

      <div className="w-full grid place-items-center grid-cols-7 gap-y-[10px]">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day} className="flex w-11 h-11 items-center justify-center text-body-1 text-grey-550">
            {day}
          </div>
        ))}
        {generateDates().map((date, index) => {
          if (date === null) {
            return <div key={`empty-${index}`} className="w-11 h-11" />;
          }

          const isSelected = selectedDate && isSameDay(date, selectedDate);

          // TODO: position 정리 (z-index, relative, absolute)
          return (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`relative flex w-11 h-11 p-1 rounded-full text-body-1 items-center justify-center`}
            >
              <span className={`relative z-1 ${isSelected ? 'text-white' : 'text-black'}`}>{format(date, 'd')}</span>
              {isSelected ? <span className="absolute inset-0 rounded-full bg-primary"></span> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
