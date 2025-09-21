import React from 'react';
import Header from '../components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <h1 className="text-3xl font-bold">Posts</h1>
        {/* Posts will be displayed here */}
      </main>
    </div>
  );
};

export default PostsPage;
