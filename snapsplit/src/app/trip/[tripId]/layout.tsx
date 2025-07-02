import BottomNavBar from '@/shared/components/BottomNavBar';

export default function TripLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="modal-root h-full" />
      {children}
      <BottomNavBar />
    </>
  );
}
