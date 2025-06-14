import TripPage from '@/features/trip/[tripId]/TripPage';

export default function Trip({ params }: { params: { tripId: number } }) {
  return <TripPage params={params} />;
}
