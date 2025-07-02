import OverlayModal from "@/shared/components/modal/OverlayModal";
import Image from "next/image";
import check from "@public/svg/check_grey.svg";

type CurrencyListProps = {
    onClose: () => void;
    setCurrency: (currency: string) => void;
}

// TODO: 테스트 데이터
const currencyList = ['한국 - KRW', '미국 - USD', '유럽 - EUR', '일본 - JPY'];

const CurrencyList = ({ onClose, setCurrency }: CurrencyListProps) => {
    return (
        <OverlayModal isOpen={true} onClose={onClose} layer="toast">
            <div className="mt-auto w-full flex flex-col items-center bg-white pt-3 px-5 pb-8 gap-3 rounded-t-xl">
                {/* TODO: bottomsheet handle 컴포넌트 추가 */}
                <div className="bg-grey-350 rounded-xl w-11 h-1" />
                <div className="flex flex-col w-full">
                    {currencyList.map((currency) => (
                        <button
                            key={currency}
                            onClick={() => setCurrency(currency)}
                            className="flex items-center py-3"
                        >
                            <Image alt="check" src={check} width={24} height={24} />
                            <div className="pl-1 text-body-1">{currency}</div>
                        </button>
                    ))}
                </div>
            </div>
        </OverlayModal>
    )
}

export default CurrencyList