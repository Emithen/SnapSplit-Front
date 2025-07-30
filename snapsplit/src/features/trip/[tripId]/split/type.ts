export interface SplitPageProps {
    tripId: string;
}

export interface SplitDatePickSectionProps {
  selectableDates: { date: string; selectable: boolean }[];
  tripStartDate: string;
}