// 최초 랜딩 페이지

import LandingHeader from '@/features/landing/components/LandingHeader';
import CreateTrip from '@/features/landing/components/CreateTrip';

const LandingPage = () => {
  return (
    <div>
      <LandingHeader />
      <CreateTrip />
    </div>
  );
};

export default LandingPage;
