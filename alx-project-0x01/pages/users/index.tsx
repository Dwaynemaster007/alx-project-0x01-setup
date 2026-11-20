import UserCard from '../../components/common/UserCard';
import UserModal from '../../components/common/UserModal';
import { UserProps } from '../../interfaces';
import { useState } from 'react';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState<UserProps[]>(users);

  const handleAddUser = (newUser: UserProps) => {
    const nextId = Math.max(0, ...allUsers.map((u) => u.id)) + 1;
    setAllUsers([{ ...newUser, id: nextId }, ...allUsers]);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">User Content</h1>
        <button onClick={() => setModalOpen(true)}
          className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
      </div>
      {allUsers.length === 0 && <p className="mt-6 text-gray-600">No users to show right now. Please try again later.</p>}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allUsers.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  let users: UserProps[] = [];
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) users = await response.json();
  } catch (error) {
    console.error('Could not fetch users:', error);
  }

  return { props: { users }, revalidate: 3600 };
}

export default Users;
