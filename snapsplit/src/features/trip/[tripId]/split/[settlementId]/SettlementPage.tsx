import Button from '@/shared/components/Button';
import SettlementFlowCard from './_components/SettlementFlowCard';
import SettlementHeader from './_components/SettlementHeader';
import SettlementInfoSection from './_components/SettlementInfoSection';
import { SettlementPageProps } from './type';
import Devider from '@/shared/components/Devider';
import arrow from '@public/svg/arrow-right-grey-550.svg';
import Image from 'next/image';
import mock from '@public/mocks/split-settlement-mock.json';

// GNB 사이즈 재조정 이후, margin 조정 필요

const SettlementPage = ({ tripId, settlementId }: SettlementPageProps) => {
  console.log('- tripId: ' + tripId);
  console.log('- settlementId: ' + settlementId);

  return (
    <div className="h-screen w-full flex flex-col bg-light_grey overflow-y-auto scrollbar-hide">
      <section className="flex flex-col pt-2 pb-6 px-5">
        <SettlementHeader tripId={tripId} />
        <SettlementInfoSection
          members={mock.data.members}
          endDate={mock.data.endDate}
          startDate={mock.data.startDate}
        />
        <SettlementFlowCard label="보낼 돈" className="mb-3" />
        <SettlementFlowCard label="받을 돈" className="mb-4" />
        <Button label="카카오톡으로 공유하기" />
      </section>
      <Devider />
      <section className="flex flex-col px-5 pt-6 pb-8 gap-3 w-full text-body-1 mb-[60px]">
        <h2 className="text-label-1">개별 지출 금액</h2>
        <div className="flex flex-col gap-3 w-full bg-white p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <label>공동경비</label>
            <div className="flex items-center">
              <p>971,500원</p>
              <Image src={arrow} alt="arrow" />
            </div>
          </div>
          <Devider p="py-[0.5px]" className="my-1" />
          <div className="flex justify-between items-center">
            <label>총 지출 합계</label>
            <div className="flex items-center">
              <p>2,971,500원</p>
              <Image src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-5 py-4 bg-grey-850 rounded-xl text-white">
          <label>남은 공동 경비</label>
          <p className="flex items-center">52,050원</p>
        </div>
      </section>
    </div>
  );
};

export default SettlementPage;
