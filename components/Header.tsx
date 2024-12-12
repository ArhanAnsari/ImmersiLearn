// components/Header.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { signOutUser } from '@/lib/actions/user.actions';

interface HeaderProps {
  userId: string;
  accountId: string;
}

const Header: React.FC<HeaderProps> = ({ userId, accountId }) => {
  return (
    <nav className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* <h1 className="text-2xl font-bold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            ImmersiLearn
          </span>
        </h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a
              href="/"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Dashboard
            </a>
          </li>
        </ul> */}
        <div className="header-wrapper">
          <form
            action={async () => {
              'use server';
              await signOutUser();
            }}
          >
            <Button type="submit" className="sign-out-button">
              <Image
                src="/assets/icons/logout.svg"
                alt="logo"
                width={24}
                height={24}
                className="w-6"
              />
            </Button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
