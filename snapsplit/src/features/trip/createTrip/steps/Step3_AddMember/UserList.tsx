import { UserItemProps } from './type';

const UserList = ({ users }: { users: UserItemProps[] }) => {
  const UserItem = ({ userId, name, avatarUrl }: UserItemProps) => {
    return (
      <div className="w-full flex items-center gap-3 bg-white rounded-xl" key={userId}>
        <img src={avatarUrl} alt={name} className="w-11 h-11 rounded-full object-cover" width={11} height={11} />
        <div className="flex-1 text-body-1 text-black">{name}</div>
        <div className="px-3 py-1 rounded-full border border-grey-250 flex justify-center items-center">
          <button className="text-grey-450 text-body-2 font-medium cursor-pointer">추가</button>
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
