import SettlementDetailPage from '@trip/[tripId]/split/[settlementId]/[memberId]/SettlementDetailPage';

export default async function Settlement({
  params,
  searchParams,
}: {
  params: Promise<{ tripId: string; settlementId: string }>;
  searchParams: { name?: string };
}) {
  const { tripId, settlementId } = await params;
  const name = searchParams.name ?? '';

  return <SettlementDetailPage settlementId={settlementId} tripId={tripId} name={name} />;
}
