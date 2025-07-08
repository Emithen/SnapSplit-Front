import FloatingModal from "@/shared/components/modal/FloatingModal";

// TODO: api 데이터로 변경
type BudgetOverviewProps = {
    currency: string;
    amount: number;
}

const mockdata: BudgetOverviewProps[] = [
    {
        currency: '달러',
        amount: 1000
    },
    {
        currency: '엔',
        amount: 2000
    },
]

const BudgetOverview = () => {
    return (
        <FloatingModal>
            <div className="flex flex-col items-center w-full px-5 py-4.5 mt-auto bg-grey-850">
                {mockdata.map((item, index) => (
                    <div className="flex items-center justify-between w-full py-1" key={index}>
                        <div className="text-body-1 text-grey-450">{item.currency}</div>
                        <div className="text-label-1 text-white">{item.amount}</div>
                    </div>
                ))}
            </div>
        </FloatingModal>
    )
}

export default BudgetOverview