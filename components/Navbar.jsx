import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import images from '../public/assets';

function Navbar() {
  return (
    <nav className="flexBetween fixed w-full bg-[#FFFFFF] z-10 p-4 sm:p-2 flex-row ">
      <div>
        <Image src={images.logomenu} width={96} height={18} />
      </div>
      <div className="flex space-x-5">
        <div>
          <Image src={images.search} />
        </div>
        <div>
          <Image src={images.menu} width={28} height={15} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
