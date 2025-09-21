import React from 'react';
// Make sure the path is correct and the file exists
import Header from '../../components/layout/Header';

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <h1 className="text-3xl font-bold">Users</h1>
        {/* Users will be displayed here */}
      </main>
    </div>
  );
};

export default UsersPage;
