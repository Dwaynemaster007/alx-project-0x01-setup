import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/posts">Posts</a></li>
          <li><a href="/users">Users</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
