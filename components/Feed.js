import React from 'react';
import Image from 'next/image';
import { BsImage } from 'react-icons/bs';
import { AiOutlineGif } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';
import { MdOutlineScheduleSend } from 'react-icons/md';
function Feed() {
  return (
    <div className='flex flex-1 items-start h-40 w-full border-b border-gray-600 pl-2'>
      <div className='grid grid-rows-2 grid-flow-col gap-4 justify-center '>
        <div className='row-span-2 pt-4'>
          <Image src='/favicon.ico' height={40} width={40} />
        </div>
        <div className='col-span-2 row-span-1 pt-6'>
          <input
            onInput={() => {
              document.getElementById('tweetHr').style.display = 'block';
            }}
            className='bg-transparent outline-none'
            placeholder='What is happening?'
            type='text'
          />
          <hr id='tweetHr' className='hidden mt-8 ' />
        </div>
        <div className='row-span-1 col-span-2 '>
          <div className='flex justify-between space-x-8 items-center'>
            <div className='flex space-x-4 text-white'>
              <BsImage className='w-6 h-6 hover:text-yellow-200' />
              <AiOutlineGif className='w-6 h-6 hover:text-yellow-200' />
              <BsEmojiSmile className='w-6 h-6 hover:text-yellow-200' />
              <MdOutlineScheduleSend className='w-6 h-6 hover:text-yellow-200' />
              <AiOutlineGif className='w-6 h-6 hover:text-yellow-200' />
            </div>
            <div>
              <button
                className='rounded-full bg-blue-500 px-4 py-2 hover:bg-blue-400 active:scale-95 transition '
                title='Tweet'
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
