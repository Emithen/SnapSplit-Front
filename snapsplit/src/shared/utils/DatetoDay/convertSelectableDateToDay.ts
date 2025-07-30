import { differenceInCalendarDays, parseISO } from 'date-fns';

export function convertSelectableDateToDay(
  tripStartDate: string,
  selectableDates: { date: string; selectable: boolean }[]
): { day: number; selectable: boolean }[] {
  const tripStart = parseISO(tripStartDate);

  return selectableDates.map(({ date, selectable }) => {
    const diff = differenceInCalendarDays(parseISO(date), tripStart);
    const dayNumber = diff < 0 ? 0 : diff + 1;

    return {
      day: dayNumber,
      selectable,
    };
  });
}
