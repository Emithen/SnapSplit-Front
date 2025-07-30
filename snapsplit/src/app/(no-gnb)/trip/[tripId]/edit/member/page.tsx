import EditmemberPage from '@/features/trip/[tripId]/edit/member/page';

export default async function Editmember({ params }: { params: Promise<{ tripId: string }> }) {
  const { tripId } = await params;

  return <EditmemberPage tripId={tripId} />;
}
