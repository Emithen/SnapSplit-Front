export interface SettlementDetailPageProps {
  tripId: string;
  settlementId: string;
  name: string;
}

export interface SettlementDetailHeaderProps {
  tripId: string;
  settlementId: string;
}

export interface TotalAmountInfoProps {
  name: string;
  totalAmount: number;
}