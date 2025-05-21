import LandingHeader from '@/features/home/_components/HomeHeader';
import CreateTrip from '@home/_components/CreateTrip';
import UpcomingTripList from '@home/_components/UpcomingTripList';
import PastTripSection from '@home/_components/PastTripSection';

const Home = () => {
  return (
    <main>
      <LandingHeader />
      <CreateTrip />
      <UpcomingTripList />
      <PastTripSection />
    </main>
  );
};

export default Home;
