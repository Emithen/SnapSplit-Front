import LandingHeader from '@/features/landing/_components/LandingHeader';
import CreateTrip from '@/features/landing/_components/CreateTrip';
import UpcomingTrip from '@/features/landing/_components/UpcomingTrip';

const LandingPage = () => {
  return (
    <div>
      <LandingHeader />
      <CreateTrip />
      <UpcomingTrip />
    </div>
  );
};

export default LandingPage;
