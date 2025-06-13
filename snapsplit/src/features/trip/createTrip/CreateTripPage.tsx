import StepProgressBar from '@trip/createTrip/_components/StepProgressBar';
import CreateTripHeader from '@trip/createTrip/_components/CreateTripHeader';
import CountrySearchSection from '@trip/createTrip/steps/Step1_CountrySearch';

// steps로 단계별 컴포넌트를 랜더링해주는 Multi Step Form 페이지
export default function CreateTripPage() {
  return (
    <div>
      <CreateTripHeader />
      <StepProgressBar step={1} />
      <CountrySearchSection /> {/* 단계별 페이지 */}
    </div>
  );
}
