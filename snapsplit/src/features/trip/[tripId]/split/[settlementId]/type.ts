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
}
export interface SettlementFlowCardProps {
    label?: string;
    className?: string;
}

export interface settlementDetails {
    settlementDTO: settlement[];
}

export interface settlement {
    sender: Member;
    receiver: Member;
    amount: number;
}