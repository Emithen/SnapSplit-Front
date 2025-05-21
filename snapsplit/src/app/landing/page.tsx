import LandingHeader from '@/features/landing/_components/LandingHeader';
import CreateTrip from '@/features/landing/_components/CreateTrip';
import UpcomingTripList from '@/features/landing/_components/UpcomingTripList';
import PastTripSection from '@/features/landing/_components/PastTripSection';

const LandingPage = () => {
  return (
    <main>
      <LandingHeader />
      <CreateTrip />
      <UpcomingTripList />
      <PastTripSection />
    </main>
  );
};

export default LandingPage;
