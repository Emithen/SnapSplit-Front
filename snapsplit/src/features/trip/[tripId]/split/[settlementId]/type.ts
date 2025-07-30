import { Member } from "@/shared/types/member";

export interface SettlementPageProps{
    tripId: string;
    settlementId: string;
}

export interface SettlementHeaderProps {
    tripId: string;
}

export interface SettlementInfoSectionProps {
    members?: Member[];
    startDate?: string;
    endDate?: string;
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