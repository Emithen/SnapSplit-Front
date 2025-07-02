import { UserItemProps } from './type';

type UserListProps = {
  users: UserItemProps[];
  selectedUserIds: string[];
  onToggle: (userId: string) => void;
};

const UserList = ({ users, selectedUserIds, onToggle }: UserListProps) => {
  const UserItem = ({ userId, name, avatarUrl }: UserItemProps) => {
    const isSelected = selectedUserIds.includes(userId);

    return (
      <div className="w-full flex items-center gap-3 bg-white rounded-xl px-5">
        <img src={avatarUrl} alt={name} className="w-11 h-11 rounded-full object-cover" />
        <div className="flex-1 text-body-1 text-black">{name}</div>
        <button
          className={`px-3 py-1 rounded-full border text-body-2 font-medium cursor-pointer
          ${isSelected ? 'bg-primary border-primary text-white' : 'border-grey-250 text-grey-450'}`}
          onClick={() => onToggle(userId)}
          aria-label={`${name} ${isSelected ? '선택 취소' : '선택'}`}
        >
          추가
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 pt-6">
      {users.map((user) => (
        <UserItem key={user.userId} {...user} />
      ))}
    </div>
  );
};

export default UserList;
