import { UserItemProps } from './type';
import SelectButton from '@/shared/components/SelectButton';

type UserListProps = {
  users: UserItemProps[];
  selectedUserIds: string[];
  onToggle: (userId: string) => void;
};

const UserList = ({ users, selectedUserIds, onToggle }: UserListProps) => {
  const UserItem = ({ userId, name }: UserItemProps) => {
    const isSelected = selectedUserIds.includes(userId);

    return (
      <div className="w-full flex items-center gap-3 bg-white rounded-xl">
        <div className="w-[11px] h-[11px] bg-grey-250 rounded-full"></div>
        {/* <img src={avatarUrl} alt={name} className="w-11 h-11 rounded-full object-cover" /> */}
        <div className="flex-1 text-body-1 text-black">{name}</div>
        <SelectButton isSelected={isSelected} onClick={() => onToggle(userId)} label="추가" />
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
