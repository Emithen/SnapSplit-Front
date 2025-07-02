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
      <div className="w-full flex items-center gap-3 bg-white rounded-xl">
        <img src={avatarUrl} alt={name} className="w-11 h-11 rounded-full object-cover" />
        <div className="flex-1 text-body-1 text-black">{name}</div>
        <div
          className={`px-3 py-1 rounded-full border flex justify-center items-center cursor-pointer
          ${isSelected ? 'bg-primary border-primary' : 'border-grey-250'}`}
          onClick={() => onToggle(userId)}
        >
          <button
            className={`text-body-2 font-medium 
            ${isSelected ? 'text-white' : 'text-grey-450'}`}
          >
            추가
          </button>
        </div>
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
