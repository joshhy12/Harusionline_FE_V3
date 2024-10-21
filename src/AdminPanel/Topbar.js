import React from 'react';
import { Bell, MessageSquare, Search, User } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for..."
            className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Notifications</span>
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Messages</span>
            <MessageSquare size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center text-gray-500 hover:text-gray-600 focus:outline-none">
            <span className="sr-only">Account</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
            />
            <span className="ml-2 font-medium text-sm hidden md:block">John Doe</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;