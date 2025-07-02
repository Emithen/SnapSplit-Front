'use client';

import { useState } from 'react';
import SearchBar from '@/shared/components/SearchBar';
import BottomCTAButton from '@/shared/components/BottomCTAButton';
import UserList from './UserList';
import { AddMemberSectionProps, UserItemProps } from './type';

const mockUsers: UserItemProps[] = [
  { userId: '39E24', name: '김지구', avatarUrl: 'https://placehold.co/44x44' },
  { userId: '48D12', name: '박지수', avatarUrl: 'https://placehold.co/44x44' },
  { userId: '59F91', name: '윤재', avatarUrl: 'https://placehold.co/44x44' },
  { userId: '23A77', name: '민지', avatarUrl: 'https://placehold.co/44x44' },
  { userId: '85B62', name: '성민', avatarUrl: 'https://placehold.co/44x44' },
];

const AddMemberSection = ({ onClick: handleNextStep }: AddMemberSectionProps) => {
  const [searchId, setSearchId] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<UserItemProps[]>([]);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!searchId.trim()) {
      setError('검색어를 입력해주세요.');
      setFilteredUsers([]); // 검색 결과 비우기
      return;
    }

    setError(''); // 기존 에러 초기화
    const found = mockUsers.filter((user) => user.userId.toLowerCase().includes(searchId.trim().toLowerCase()));
    setFilteredUsers(found);
  };

  return (
    <div className="flex flex-col justify-between px-5" style={{ height: 'calc(100vh - 95px - 16px)' }}>
      <div className="flex flex-col">
        <div className="pb-6">
          <p className="text-head-1">
            함께 여행하는
            <br />
            동행이 있다면 추가해주세요
          </p>
          <p className="text-body-2 text-grey-850">동행은 나중에 다시 추가할 수 있어요</p>
        </div>
        <div className="flex gap-2">
          <SearchBar
            placeholder="사용자코드를 입력해주세요"
            value={searchId}
            onChange={(e) => {
              setSearchId(e.target.value);
              setError(''); // 입력 중 에러 제거
            }}
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 rounded-xl bg-primary text-white text-body-2 font-medium whitespace-nowrap cursor-pointer"
          >
            확인
          </button>
        </div>
        {error && <p className="text-caption-1 text-red-500 pt-2">{error}</p>}
        <UserList users={filteredUsers} />
      </div>
      <BottomCTAButton label="다음으로" onClick={handleNextStep} />
    </div>
  );
};

export default AddMemberSection;
