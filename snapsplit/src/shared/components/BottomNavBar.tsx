'use client';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BottomNavBar() {
  const pathname = usePathname();
  const router = useRouter();

  // 임시 test tripId
  const tripId = 1;

  const tabs = [
    { label: 'BUDGET', iconPath: '/svg/budget.svg', path: `/trip/${tripId}` },
    { label: 'SNAP', iconPath: '/svg/snap.svg', path: `/trip/${tripId}/snap` },
    { label: 'SPLIT', iconPath: '/svg/split.svg', path: `/trip/${tripId}/split` },
  ];

  return (
    <nav className="fixed bottom-0 w-full h-20 border-t-[1px] border-gray-200 bg-white z-50 flex">
      <div className="flex justify-around w-full items-center py-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <button
              key={tab.label}
              onClick={() => router.push(tab.path)}
              className="flex flex-col items-center text-xs"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Image
                  src={tab.iconPath}
                  alt={`${tab.label} icon`}
                  width={24}
                  height={24}
                  unoptimized
                  className={isActive ? 'opacity-100' : 'opacity-40'}
                />
              </div>
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
