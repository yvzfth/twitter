import Image from 'next/image';
import SidebarLink from './SidebarLink';
import React, { useState, useEffect } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { RiHome7Fill } from 'react-icons/ri';
import { HiHashtag } from 'react-icons/hi';
import { AiFillBell } from 'react-icons/ai';
import { FaInbox } from 'react-icons/fa';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { FaClipboardList } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

function Sidebar() {
  const LogoIcon = () => <BsTwitter className='w-11 h-11 p-2' />;
  const HomeIcon = () => <RiHome7Fill className='w-11 h-11 p-2' />;
  const HashtagIcon = () => <HiHashtag className='w-11 h-11 p-2' />;
  const BellIcon = () => <AiFillBell className='w-11 h-11 p-2' />;
  const InboxIcon = () => <FaInbox className='w-11 h-11 p-2' />;
  const BookmarkIcon = () => <BsFillBookmarksFill className='w-11 h-11 p-2' />;
  const ClipboardListIcon = () => <FaClipboardList className='w-11 h-11 p-2' />;
  const UserIcon = () => <FaUserAlt className='w-11 h-11 p-2' />;
  const DotsCircleHorizontalIcon = () => (
    <BsThreeDots className='w-11 h-11 p-2' />
  );

  return (
    <div
      className='max-h-screen flex flex-col items-center sticky top-0 left-0
        lg:items-start xl:w-[340px] pt-2 pb-6 px-2 md:px-4 
        lg:px-8 border-r border-gray-600 justify-between'
    >
      {/* <div
        className='flex items-center justify-center 
            hoverAnimation p-0 xl:ml-24 '
      >
        <BsTwitter className='h-10 w-10 p-2' />
      </div> */}

      <div className='space-y-2.5 xl:ml-24'>
        <SidebarLink text='Logo' Icon={LogoIcon} logo />
        <SidebarLink text='Home' Icon={HomeIcon} active />
        <SidebarLink text='Explore' Icon={HashtagIcon} />
        <SidebarLink text='Notifications' Icon={BellIcon} />
        <SidebarLink text='Messages' Icon={InboxIcon} />
        <SidebarLink text='Bookmarks' Icon={BookmarkIcon} />
        <SidebarLink text='Lists' Icon={ClipboardListIcon} />
        <SidebarLink text='Profile' Icon={UserIcon} />
        <SidebarLink text='More' Icon={DotsCircleHorizontalIcon} />
      </div>
      <div className='xl:ml-24'>
        <SidebarLink text='User' profilePic />
      </div>
    </div>
  );
}

export default Sidebar;
