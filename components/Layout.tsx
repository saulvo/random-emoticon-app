import React from 'react';
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col max-w-lg min-h-screen m-auto px-4 py-2 bg-white lg:rounded'>
      <h1 className='text-center m-4 text-xl font-bold text-red-600 uppercase'>Random Emoticon</h1>
      <main className='flex-1'>{children}</main>
      <p className='p-2 text-center text-sm text-gray-800 font-medium'>
        -- Created by&nbsp;
        <a
          className='text-blue-600 hover:underline'
          href='https://github.com/sonvt-fe'
          target='_blank'
          rel='noreferrer'>
          Saul Vo
        </a>
        &nbsp;--
      </p>
    </div>
  );
};

export default Layout;
