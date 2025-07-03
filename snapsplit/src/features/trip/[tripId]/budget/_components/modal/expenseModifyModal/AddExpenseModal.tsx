// TODO: shared 로 refactor

import FullScreenModal from "@/shared/components/modal/FullScreenModal";
import backArrow from "@public/svg/leftArrow.svg";
import arrow_bottom from "@public/svg/arrow_bottom.svg";
import Image from "next/image";
import { useState } from "react";
import CurrencyList from "./CurrencyList";
import Calendar from "./Calendar";
import OverlayModal from "@/shared/components/modal/OverlayModal";

type AddExpenseModalProps = {
    onClose: () => void;
}

const AddExpenseModal = ({ onClose }: AddExpenseModalProps) => {
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [currency, setCurrency] = useState('KRW');
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const handleDateSelect = (date: string | null) => {
      setSelectedDate(date);
      setIsCalendarOpen(false);
    };

    return (
        <FullScreenModal>
            <div className="w-full h-full flex flex-col items-center bg-white">
                <div className="flex w-full h-12 items-center justify-between px-5 py-3">
                    <button onClick={onClose}>
                        <Image alt="back" src={backArrow} />
                    </button>
                    <p className="text-label-1">경비 추가하기</p>
                    <div className="w-6 h-6" />
                </div>
                {/* main section */}
                <div className="flex flex-col w-full p-5">
                    {/* expense section */}
                    <div className="flex flex-col px-5 py-4 gap-3 rounded-xl bg-grey-150">
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                                className="inline-flex items-center bg-white rounded-xl pl-3 pr-1"
                            >
                                <div className="text-label-2 inline-flex">{currency}</div>
                                <Image alt="arrow" src={arrow_bottom} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-1">
                            <input type="text" placeholder="금액 입력"
                                className="text-head-0" />
                            <div className="flex items-center text-body-2 text-grey-550">= 0원</div>
                        </div>
                        
                        {isCurrencyOpen && (
                            <CurrencyList onClose={() => setIsCurrencyOpen(false)} setCurrency={setCurrency} />
                        )}
                    </div>
                    {/* date section */}
                    <div className="flex flex-col pt-6 gap-3">
                        <div className="text-label-2">날짜</div>
                        <div className="flex items-center justify-between h-12 px-4 rounded-xl border border-grey-350">
                            <div>{selectedDate || '날짜 선택'}</div>
                            <button onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
                                <Image alt="arrow" src={arrow_bottom} width={24} height={24} />
                            </button>
                        </div>
                        {isCalendarOpen && (
                            <OverlayModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)}>
                                <Calendar
                                    onStartDateChange={handleDateSelect}
                                    onEndDateChange={() => {}}
                                    setRentDuration={() => {}}
                                />
                            </OverlayModal>
                        )}                       
                    </div>
                    {/* category section */}
                    <div className="flex flex-col pt-7 gap-3">
                        <div className="text-label-2">경비 형태</div>
                        <div className="flex items-center gap-3">
                            <button className="border border-grey-350 rounded-xl w-full h-12 px-5 text-body-1">현금</button>
                            <button className="border border-grey-350 rounded-xl w-full h-12 px-5 text-body-1">카드</button>
                        </div>
                    </div>
                </div>
            </div>
        </FullScreenModal>
    );
};

export default AddExpenseModal;
