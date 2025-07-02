import LandingHeader from './_components/HomeHeader';
import CreateTripSection from './_components/CreateTripSection';
import PastTripImgCardList from './_components/PastTripImgCardList';
import AllPastTripList from './_components/AllPastTripList';
import UnsettledTripItem from './_components/UnsettledTripItem';

export default function HomePage() {
  return (
    <div className="bg-grey-50 min-h-[100dvh] pb-[117px]">
      {/* 정산되지않은내역이 있다면 pb-[117px] 없다면 pb-6*/}
      <LandingHeader />
      <CreateTripSection />
      <PastTripImgCardList />
      <AllPastTripList />
      <UnsettledTripItem dateRange="2025. 4. 7 - 2025. 4. 12" locations="런던, 파리, 취리히" title="영쿡요리여행" />
    </div>
  );
}
