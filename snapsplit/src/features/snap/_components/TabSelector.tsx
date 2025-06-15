'use client';

import { useState } from 'react';

const tabs = ['전체', '폴더별'];

export default function TabSelector() {
  const [activeTab, setActiveTab] = useState('전체');

  return (
    <div className="flex justify-around mt-4 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 transition-colors duration-200 w-full ${
            activeTab === tab
              ? 'font-semibold text-black border-b-2 border-black'
              : 'text-gray-400'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
