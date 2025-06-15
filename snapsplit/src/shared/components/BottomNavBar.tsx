'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function BottomNavBar() {
  const pathname = usePathname();
  const router = useRouter();

  // 임시 test tripId
  const tripId = 1;

  const tabs = [
    { label: 'BUDGET', icon: '💰', path: `/trip/${tripId}` },
    { label: 'SNAP', icon: '📷', path: `/trip/${tripId}/snap` },
    { label: 'SPLIT', icon: '🔀', path: `/trip/${tripId}/split` },
  ];

  return (
    <nav className="fixed bottom-0 w-full border-t bg-white z-50">
      <div className="flex justify-around py-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <button
              key={tab.label}
              onClick={() => router.push(tab.path)}
              className="flex flex-col items-center text-xs"
            >
              <span className={isActive ? 'text-black text-xl' : 'text-gray-400 text-xl'}>
                {tab.icon}
              </span>
              <span className={isActive ? 'text-black font-semibold' : 'text-gray-400'}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
