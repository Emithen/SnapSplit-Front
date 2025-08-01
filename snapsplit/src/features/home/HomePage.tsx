import LandingHeader from './_components/HomeHeader';
import CreateTripSection from './_components/CreateTripSection';
import PastTripImgCardList from './_components/PastTripImgCardList';
import AllPastTripList from './_components/AllPastTripList';

export default function HomePage() {
  return (
    <div className="bg-grey-50 min-h-[100dvh] pb-6">
      <LandingHeader />
      <CreateTripSection />
      <PastTripImgCardList />
      <AllPastTripList />
    </div>
  );
}
