import React from "react";
import ConnectButton from "../buttons";

const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center p-4 bg-gray-200'>
      <div className='logo'>
        <img src='/images/logos/nirvik_logo_hd.png' className='h-20 w-30' />
      </div>
      <div className='profile'>
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
