import LandingHeader from '@home/_components/LandingHeader';
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
