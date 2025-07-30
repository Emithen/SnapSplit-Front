import SettlementPage from '@trip/[tripId]/split/[settlementId]/SettlementPage';

export default async function Settlement({
  params,
  searchParams,
}: {
  params: Promise<{ tripId: string; settlementId: string }>;
  searchParams: { startDay?: string; endDay?: string };
}) {
  const { tripId, settlementId } = await params;
  const startDay = searchParams.startDay
    ? isNaN(Number(searchParams.startDay))
      ? null
      : Number(searchParams.startDay)
    : null;
  const endDay = searchParams.endDay ? (isNaN(Number(searchParams.endDay)) ? null : Number(searchParams.endDay)) : null;

  return <SettlementPage settlementId={settlementId} tripId={tripId} startDay={startDay} endDay={endDay} />;
}
