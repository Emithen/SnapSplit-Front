import LandingHeader from './_components/HomeHeader';
import CreateTrip from './_components/CreateTrip';
import UpcomingTripList from './_components/UpcomingTripList';
import PastTripSection from './_components/PastTripSection';

export default function HomePage() {
  return (
    <>
      <LandingHeader />
      <CreateTrip />
      <UpcomingTripList />
      <PastTripSection />
    </>
  );
}
