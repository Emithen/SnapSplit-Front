import SettlementPage from '@trip/[tripId]/split/[settlementId]/SettlementPage';

export default async function Settlement({
  params,
  searchParams,
}: {
  params: Promise<{ tripId: string; settlementId: string }>;
  searchParams: { startDay?: string; endDay?: string };
}) {
  const { tripId, settlementId } = await params;
  const startDay = searchParams.startDay ? parseInt(searchParams.startDay) : null;
  const endDay = searchParams.endDay ? parseInt(searchParams.endDay) : null;

  return <SettlementPage settlementId={settlementId} tripId={tripId} startDay={startDay} endDay={endDay} />;
}
