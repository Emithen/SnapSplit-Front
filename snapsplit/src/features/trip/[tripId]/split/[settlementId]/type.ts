import { Member } from "@/shared/types/member";

export interface SettlementPageProps{
    tripId: string;
    settlementId: string;
    startDay?: number | null;
    endDay?: number | null;
}

export interface SettlementHeaderProps {
    tripId: string;
}

export interface SettlementInfoSectionProps {
    members?: Member[];
    startDay?: number | null;
    endDay?: number | null;
    settlementDetails?: settlementDetail[];
}

export type settlementDetail = {
    sender: Member;
    receiver: Member;
    amount: number;
}

export interface SettlementFlowCardProps {
    label?: string;
    className?: string;
    settlementDetails?: settlementDetail[];
}