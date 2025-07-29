import { member } from "@/shared/types/member";

export interface SettlementPageProps{
    tripId: string;
    settlementId: string;
}

export interface SettlementHeaderProps {
    tripId: string;
}

export interface SettlementInfoSectionProps {
    members?: member[];
    startDate?: string;
    endDate?: string;
}
export interface SettlementFlowCardProps {
    label?: string;
    className?: string;
}

export interface settlementDetails {
    settlementDTO: settlement[];
}

export interface settlement {
    sender: member;
    receiver: member;
    amount: number;
}