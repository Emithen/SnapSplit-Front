'use client';

import React, { useState } from 'react';
import { addMonths, format, startOfMonth, endOfMonth, eachDayOfInterval, isBefore, getDay } from 'date-fns';

interface CalendarProps {
  onStartDateChange: (date: string | null) => void;
  onEndDateChange: (date: string | null) => void;
  setRentDuration: (rentDuration: number) => void;
}

export default function Calendar({
  onStartDateChange,
  onEndDateChange,
  setRentDuration,
}: CalendarProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState<Date>(startOfMonth(today));

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handlePrevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateClick = (selectedDate: Date) => {
    if (!startDate && !endDate) {
      setStartDate(selectedDate);
      setRentDuration(0);
    } else if (startDate && !endDate && selectedDate > startDate) {
      const duration = Math.ceil((selectedDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000) + 1);
      if (duration < 3) {
        resetSelection();
      } else {
        if (startDate) onStartDateChange(format(startDate, 'yyyy-MM-dd'));
        setEndDate(selectedDate);
        onEndDateChange(format(selectedDate, 'yyyy-MM-dd'));
        setRentDuration(duration);
      }
    } else {
      if (startDate) onStartDateChange(format(startDate, 'yyyy-MM-dd'));
      setStartDate(selectedDate);
      setEndDate(null);
      setRentDuration(0);
    }
  };

  const resetSelection = () => {
    setStartDate(null);
    setEndDate(null);
    setRentDuration(0);
    onStartDateChange(null);
  };

  const generateDates = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const dates = eachDayOfInterval({ start, end });

    const firstDayOfWeek = getDay(start);
    return Array(firstDayOfWeek).fill(null).concat(dates);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-white p-4 rounded-2xl w-full">
      <div className="flex items-center justify-between gap-3">
        <button onClick={handlePrevMonth} className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h2 className="text-base font-semibold">{format(currentMonth, 'yyyy년 M월')}</h2>
        <button onClick={handleNextMonth} className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="w-full grid place-items-center grid-cols-7 gap-y-[10px]">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <span key={day} className="text-center text-sm text-grey450">
            {day}
          </span>
        ))}
        {generateDates().map((date, index) => {
          if (date === null) {
            return <div key={`empty-${index}`} className="w-[34px] h-[34px]" />;
          }

          const formattedDate = format(date, 'yyyy-MM-dd');
          const isStart = startDate && formattedDate === format(startDate, 'yyyy-MM-dd');
          const isEnd = endDate && formattedDate === format(endDate, 'yyyy-MM-dd');
          const isInRange = startDate && endDate && date > startDate && date < endDate;
          const isBeforeToday = isBefore(date, today);

          return (
            <button
              key={formattedDate}
              onClick={() => handleDateClick(date)}
              className={`w-[34px] h-[34px] rounded-full text-sm relative flex items-center justify-center
                ${isBeforeToday ? 'text-grey750' : 'text-grey250'}
                ${isInRange || isStart || isEnd ? 'bg-red bg-opacity-10 rounded-none w-full' : 'hover:bg-grey900'}
                ${isStart ? 'rounded-l-full' : ''}
                ${isEnd ? 'rounded-r-full' : ''}`}
              disabled={isBeforeToday}>
              {isStart || isEnd ? (
                <span className="absolute inset-0 rounded-full w-[34px] border-1.5 border-red bg-darkRed z-0 ml-[5px]"></span>
              ) : null}
              <span className="relative z-10">{format(date, 'd')}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
