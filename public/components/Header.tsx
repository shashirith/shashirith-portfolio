import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
      <header className='flex items-centre justify-between h-20 max-width border-b border-peach'>
      <Link href="/">
       <h5 className='text-purple text-xl font-semibold'>Shashirith</h5>
       </Link>
       <nav>
        <ul>
          <li><Link href='/about'>about</Link></li>
       </ul>
       </nav>
      </header>
  );
};

export default Header;