'use client';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function GNB() {
  const pathname = usePathname();
  const router = useRouter();
  const { tripId } = useParams();

  const tabs = [
    { label: 'BUDGET', iconPath: '/svg/budget.svg', path: `/trip/${tripId}/budget` },
    { label: 'SNAP', iconPath: '/svg/snap.svg', path: `/trip/${tripId}/snap` },
    { label: 'SPLIT', iconPath: '/svg/split.svg', path: `/trip/${tripId}/split` },
  ];

  return (
    <nav className="fixed bottom-0 w-full h-15 max-w-[415px] lg:max-w-[360px] border-t border-grey-250 bg-white z-navbar">
      <div className="flex w-full items-center py-[9px]">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;
          return (
            <button
              key={tab.label}
              onClick={() => router.push(tab.path)}
              className="flex flex-col items-center w-full text-xs"
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
              <span className={isActive ? 'text-black font-semibold' : 'text-grey-450'}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
