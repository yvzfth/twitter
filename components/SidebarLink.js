import React from 'react';
import Image from 'next/image';
function SidebarLink({ text, Icon, logo, active, profilePic }) {
  return (
    <div title={text}>
      {logo ? (
        <div className='flex items-center hoverAnimation w-fit'>
          <Icon />
        </div>
      ) : active ? (
        <div
          className='text-blue-500
           flex items-center space-x-2  pl-0  hoverAnimation active:text-white w-fit'
        >
          <Icon className='ml-0' />
          <h3 className='hidden lg:inline-flex text-2xl pr-4'>{text}</h3>
        </div>
      ) : profilePic ? (
        <div className='flex items-center space-x-2 hoverAnimation p-2 w-fit'>
          <Image src='/favicon.ico' height={28} width={28} />
          <h3 className='hidden lg:inline-flex text-2xl pr-4'>{text}</h3>
        </div>
      ) : (
        <div className='flex items-center space-x-2 hoverAnimation w-fit'>
          <Icon />
          <h3 className='hidden lg:inline-flex text-2xl pr-4'>{text}</h3>
        </div>
      )}
    </div>
  );
}

export default SidebarLink;
