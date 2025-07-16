/*
  공용 캘린더 컴포넌트를 구성하기 위해 핵심 아이디어는 "선택 로직을 캘린더 내부에서 고정하지 말고, 외부로 위임"하는 것이다.
  즉, "어떻게 선택되었는가?"를 캘린더가 판단하는 것이 아니라, "언제, 어떤 날짜가 선택되었는지"를 외부에 알려주는 구조로 만들자.
*/

'use client';

import React, { useMemo, useState } from 'react';
import { addMonths, format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay, addDays } from 'date-fns';
import Image from 'next/image';

// 선택 타입 정의
export type CalendarMode = 'single' | 'range';

export type CalendarProps = {
  mode: CalendarMode;
  selectedDate?: Date;
  selectedRange?: { start: Date | null; end: Date | null };
  onSelectDate: (date: Date) => void;
  currentMonth?: Date; // 초기 월 (optional)
};

export default function Calendar({
  mode,
  selectedDate,
  selectedRange,
  onSelectDate,
  currentMonth: initialMonth,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(startOfMonth(initialMonth || selectedDate || new Date()));

  const generateDates = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const startDay = getDay(start);

    const prevMonthEnd = endOfMonth(addMonths(start, -1));
    const prevDates =
      startDay === 0
        ? []
        : eachDayOfInterval({
            start: addDays(prevMonthEnd, -startDay + 1),
            end: prevMonthEnd,
          });

    const currentDates = eachDayOfInterval({ start, end });

    const totalCells = prevDates.length + currentDates.length;
    const nextDatesCount = (7 - (totalCells % 7)) % 7;

    const nextMonthStart = startOfMonth(addMonths(start, 1));
    const nextDates = Array.from({ length: nextDatesCount }, (_, i) => addDays(nextMonthStart, i));

    return [...prevDates, ...currentDates, ...nextDates];
  };

  const dates = useMemo(() => generateDates(), [currentMonth]);

  const handlePrevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <div className="flex flex-col items-center w-full px-1.5 py-4 gap-2">
      <div className="flex items-center justify-between w-70">
        <h2 className="text-label-1">{format(currentMonth, 'yyyy년 M월')}</h2>
        <div className="flex items-center gap-3">
          <button onClick={handlePrevMonth}>
            <Image alt="arrow" src="/svg/arrow-left-grey-850.svg" width={24} height={24} />
          </button>
          <button onClick={handleNextMonth}>
            <Image alt="arrow" src="/svg/arrow-right-black.svg" width={24} height={24} />
          </button>
        </div>
      </div>

      <div className="w-full grid place-items-center grid-cols-7 gap-y-[10px]">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div
            key={day}
            className={`flex w-11 h-11 items-center justify-center text-body-3 ${
              day === '일' ? 'text-[#FD7564]' : 'text-grey-550'
            }`}
          >
            {day}
          </div>
        ))}
        {mode === 'single'
          ? dates.map((date, index) => {
              // single mode
              const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
              const isSelected = selectedDate && isSameDay(date, selectedDate);

              return (
                <button
                  key={`${date.toISOString()}-${index}`}
                  onClick={() => onSelectDate(date)}
                  className="relative flex w-11 h-11 p-1 rounded-full items-center justify-center"
                >
                  <span
                    className={`relative z-10 text-body-3 ${
                      !isCurrentMonth ? 'text-grey-550' : isSelected ? 'text-white' : 'text-black'
                    }`}
                  >
                    {format(date, 'd')}
                  </span>
                  {isSelected ? <span className="absolute inset-0 rounded-full bg-primary z-0" /> : null}
                </button>
              );
            })
          : dates.map((date, index) => {
              // range mode
              const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
              const isSelectedStart = selectedRange?.start && isSameDay(date, selectedRange.start);
              const isSelectedEnd = selectedRange?.end && isSameDay(date, selectedRange.end);
              const isInRange =
                selectedRange?.start && selectedRange?.end && date > selectedRange.start && date < selectedRange.end;

              return (
                <button
                  key={`${date.toISOString()}-${index}`}
                  onClick={() => onSelectDate(date)}
                  className="relative flex w-11 h-11 items-center justify-center"
                >
                  <div className={`flex w-10 h-10 items-center justify-center ${
                    isInRange ? 'bg-pale_green w-11' : 'bg-transparent w-10 rounded-full'
                  }`}>
                    <span
                      className={`relative z-10 text-body-3 ${
                        !isCurrentMonth
                          ? 'text-grey-550'
                          : isSelectedStart || isSelectedEnd
                            ? 'text-white'
                            : isInRange
                              ? 'text-primary'
                              : 'text-black'
                      }`}
                    >
                      {format(date, 'd')}
                    </span>
                    {/* 오른쪽 반 (예: startDate용) */}
                    {isSelectedStart && (
                      <span className="absolute right-0 h-10 w-1/2 bg-green-100 z-0" />
                    )}
                    {/* 왼쪽 반 (예: endDate용) */}
                    {isSelectedEnd && (
                      <span className="absolute left-0 h-10 w-1/2 bg-green-100 z-0" />
                    )}
                    {isSelectedStart || isSelectedEnd ? (
                      <span className="absolute w-10 h-10 rounded-full bg-primary z-1" />
                    ) : null}
                  </div>
                </button>
              );
            })}
      </div>
    </div>
  );
}
