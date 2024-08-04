import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className='logo'>
        <img src='/images/logos/nirvik_logo_hd.png' className='h-20 w-30' />
      </div>
      <div className='profile'>{/* Add your profile component here */}</div>
    </header>
  );
};

export default Header;
