import { parseISO, differenceInCalendarDays } from 'date-fns';

type SettlementDay = {
  id: number;
  startDate: string;
  endDate: string;
  startDay: number;
  endDay: number;
};

export function convertSettlementToDays(
  tripStartDate: string,
  completeSettlements: { id: number; startDate: string; endDate: string }[]
): SettlementDay[] {
  const tripStart = parseISO(tripStartDate);

  return completeSettlements.map((settlement) => {
    const startDiff = differenceInCalendarDays(parseISO(settlement.startDate), tripStart);
    const endDiff = differenceInCalendarDays(parseISO(settlement.endDate), tripStart);

    return {
      id: settlement.id,
      startDate: settlement.startDate,
      endDate: settlement.endDate,
      startDay: startDiff < 0 ? 0 : startDiff + 1, // 여행 준비는 Day 0
      endDay: endDiff < 0 ? 0 : endDiff + 1,
    };
  });
}

/*
[
  {
    id: 1,
    startDate: "2025-05-20",
    endDate: "2025-05-23",
    startDay: 0,
    endDay: 3
  },
  ...
]
*/