// TripInfo.tsx
export type TripInfoProps = {
    tripName: string;
    countries: {
      countryId: number;
      countryName: string;
    }[];
    memberCount: number;
    startDate: string;
    endDate: string;
};
  
// SharedBudgetBar.tsx
export type SharedCurrency = {
    totalSharedCurrency: string;
    totalSharedAmount: number;
  };
  
export type SharedBudgetBarProps = {
    totalShared: SharedCurrency[];
  };

// TripDateFilterBarProps.tsx
export type TripDateFilterBarProps = {
  startDate: string;
  endDate: string;
};