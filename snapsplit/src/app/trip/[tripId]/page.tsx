import TripPage from '@/features/trip/[tripId]/TripPage';

export default function Trip({ params }: { params: { tripId: string } }) {
  const tripId = params.tripId;
  return <TripPage tripId={tripId} />;
}
