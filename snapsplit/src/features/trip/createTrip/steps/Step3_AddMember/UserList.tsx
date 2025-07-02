import { UserItemProps } from './type';

const mockUsers: UserItemProps[] = [
  { userId: '39E24', name: '김지구', avatarUrl: 'https://placehold.co/44x44' },
  { userId: '48D12', name: '박지수', avatarUrl: 'https://placehold.co/44x44' },
  { userId: '59F91', name: '윤재', avatarUrl: 'https://placehold.co/44x44' },
  { userId: '23A77', name: '민지', avatarUrl: 'https://placehold.co/44x44' },
  { userId: '85B62', name: '성민', avatarUrl: 'https://placehold.co/44x44' },
];

const UserItem = ({ userId, name }: UserItemProps) => {
  return (
    <div key={userId} className="w-full px-5 flex items-center gap-3 bg-white rounded-xl">
      <div className="w-11 h-11 rounded-[30px] bg-grey-250"></div> {/* 사용자 이미지 */}
      <div className="flex-1 text-body-1 text-black">{name}</div>
      <div className="px-3 py-1 rounded-full border border-grey-250 flex justify-center items-center">
        <button className="text-grey-450 text-body-2 font-medium cursor-pointer">추가</button>
      </div>
    </div>
  );
};

const UserList = () => {
  return (
    <div className="flex flex-col gap-6 pt-6">
      {mockUsers.map((user) => (
        <UserItem key={user.userId} userId={user.userId} name={user.name} avatarUrl={user.avatarUrl} />
      ))}
    </div>
  );
};

export default UserList;
