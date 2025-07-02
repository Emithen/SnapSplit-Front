import LandingHeader from './_components/HomeHeader';
import CreateTrip from './_components/CreateTrip';
import UpcomingTripList from './_components/UpcomingTripList';
import PastTripImgCardList from './_components/PastTripImgCardList';
import AllPastTripList from './_components/AllPastTripList';

export default function HomePage() {
  return (
    <div className="bg-grey-50 min-h-[100dvh] pb-6">
      <LandingHeader />
      <CreateTrip />
      {/* <UpcomingTripList /> */}
      <PastTripImgCardList />
      <AllPastTripList />
    </div>
  );
}
