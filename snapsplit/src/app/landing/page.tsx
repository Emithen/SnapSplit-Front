import LandingHeader from '@/features/landing/_components/LandingHeader';
import CreateTrip from '@/features/landing/_components/CreateTrip';
import UpcomingTrip from '@/features/landing/_components/UpcomingTrip';

const LandingPage = () => {
  return (
    <main>
      <LandingHeader />
      <CreateTrip />
      <UpcomingTrip />
    </main>
  );
};

export default LandingPage;
