'use client';

import { ActiveTab } from '../type';

interface TabSelectorProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

const tabs = ['전체', '폴더별'];

export default function TabSelector({ activeTab, setActiveTab }: TabSelectorProps) {
  return (
    <div className="flex h-11 bg-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab as ActiveTab)}
          className={`w-full text-body-1 ${activeTab === tab ? 'border-b-2 border-primary text-primary' : 'text-grey-1000'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
