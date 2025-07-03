'use client';

import { useState } from 'react';
import Image from 'next/image';
import CurrencyList from '@/features/trip/[tripId]/budget/expense/_components/CurrencyList';
import ExpenseSection from './ExpenseSection';
import backArrow from '@public/svg/leftArrow.svg';
import arrow_bottom from '@public/svg/arrow_bottom.svg';
import { useRouter } from 'next/navigation';
import CalendarSheet from './CalendarSheet';
import { format } from 'date-fns';

type ExpenseFormProps = {
  mode: 'add' | 'remove'; // '추가하기' | '빼기'
  onSubmit: (data: FormData) => void;
};

const ExpenseForm = ({ mode, onSubmit }: ExpenseFormProps) => {
  const isAdd = mode === 'add';
  const [amount, setAmount] = useState('');
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState('KRW');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const router = useRouter();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('amount', amount.toString());
    formData.append('currency', currency);
    formData.append('date', selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '');
    onSubmit(formData);
  };

  // TODO: BottomNavBar fixed 제거 시 pb-15 제거
  return (
    <div className="w-full h-full pb-15 flex flex-col items-center bg-white">
      <div className="flex w-full h-12 items-center justify-between px-5 py-3">
        <button onClick={() => router.back()}>
          <Image alt="back" src={backArrow} />
        </button>
        <p className="text-label-1">{isAdd ? '경비 추가하기' : '경비 빼기'}</p>
        <div className="w-6 h-6" />
      </div>
      {/* main section */}
      <div className="flex flex-col w-full p-5">
        {/* expense section */}
        <ExpenseSection
          currency={currency}
          amount={amount}
          setAmount={setAmount}
          isCurrencyOpen={isCurrencyOpen}
          setIsCurrencyOpen={setIsCurrencyOpen}
        />
        {isCurrencyOpen && <CurrencyList onClose={() => setIsCurrencyOpen(false)} setCurrency={setCurrency} />}

        {/* date section */}
        <div className="flex flex-col pt-6 gap-3">
          <div className="text-label-2">날짜</div>
          <div className="flex items-center justify-between h-12 px-4 rounded-xl border border-grey-350">
            <div>{selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '날짜 선택'}</div>
            <button onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
              <Image alt="arrow" src={arrow_bottom} width={24} height={24} />
            </button>
          </div>
        </div>
        {isCalendarOpen && <CalendarSheet isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />}

        {/* category section */}
        <div className="flex flex-col pt-7 gap-3">
          <div className="text-label-2">경비 형태</div>
          <div className="flex items-center gap-3">
            <button className="border border-grey-350 rounded-xl w-full h-12 px-5 text-body-1">현금</button>
            <button className="border border-grey-350 rounded-xl w-full h-12 px-5 text-body-1">카드</button>
          </div>
        </div>
      </div>
      {/* submit button */}
      <div className="w-full mt-auto p-5">
        <button onClick={handleSubmit} className="w-full h-13 rounded-2xl bg-light_green text-label-2 text-white">
          {isAdd ? '추가하기' : '빼기'}
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
