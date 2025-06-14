'use client';
import { useState } from 'react';

export default function SnapPage() {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('최신순');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top bar */}
      <div className="p-4 border-b">
        <h1 className="text-xl font-semibold">유luv여행</h1>
        <div className="mt-2 flex gap-2 text-sm text-gray-500">
          <span className="border px-2 py-1 rounded-full">런던</span>
          <span className="border px-2 py-1 rounded-full">파리</span>
          <span className="border px-2 py-1 rounded-full">취리히</span>
        </div>
        <p className="mt-1 text-sm text-gray-400">4명 · 2025.4.7 - 4.12</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-around mt-4">
        <button className="font-semibold border-b-2 border-black pb-2">전체</button>
        <button className="text-gray-400">폴더별</button>
      </div>

      {/* 정렬 & 필터 버튼 */}
      <div className="flex justify-between items-center p-4 text-sm">
        <button onClick={() => setSortOpen(true)}>{selectedSort} ▾</button>
        <button onClick={() => setFilterOpen(true)}>정렬 ▾</button>
      </div>

      {/* 이미지 그리드 */}
      <div className="grid grid-cols-3 gap-2 px-2 flex-1 overflow-y-auto">
        {Array.from({ length: 15 }).map((_, idx) => (
          <div key={idx} className="w-full aspect-square bg-gray-200 rounded-md" />
        ))}
      </div>

      {/* 업로드 버튼 */}
      <div className="fixed bottom-24 right-4">
        <button className="bg-black text-white px-4 py-2 rounded-full shadow-md">
          + 사진 업로드
        </button>
      </div>

      {/* 바텀시트들 (정렬/필터) */}
      {sortOpen && (
        <div className="fixed bottom-0 w-full bg-white border-t rounded-t-xl p-4 shadow-xl">
          <p className="font-semibold mb-2">정렬</p>
          {['최신순', '이름순', '좋아요순'].map(opt => (
            <div key={opt} className="flex items-center py-1">
              <input
                type="radio"
                id={opt}
                name="sort"
                checked={selectedSort === opt}
                onChange={() => {
                  setSelectedSort(opt);
                  setSortOpen(false);
                }}
              />
              <label htmlFor={opt} className="ml-2">{opt}</label>
            </div>
          ))}
        </div>
      )}

      {filterOpen && (
        <div className="fixed bottom-0 w-full bg-white border-t rounded-t-xl p-4 shadow-xl">
          <p className="font-semibold mb-2">여행 일자</p>
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <button key={i} className="border px-3 py-1 rounded-full">Day {i + 1}</button>
            ))}
          </div>
          <p className="font-semibold mt-4 mb-2">사람</p>
          <div className="flex gap-2 flex-wrap">
            {['유빈', '지수', '나형', '연수'].map(name => (
              <button key={name} className="border px-3 py-1 rounded-full">{name}</button>
            ))}
          </div>
          <p className="font-semibold mt-4 mb-2">장소</p>
          <div className="flex gap-2 flex-wrap">
            {['런던', '파리', '취리히'].map(loc => (
              <button key={loc} className="border px-3 py-1 rounded-full">{loc}</button>
            ))}
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button className="text-gray-500">초기화</button>
            <button className="bg-black text-white px-4 py-1 rounded-full" onClick={() => setFilterOpen(false)}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
}
