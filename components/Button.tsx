import React from 'react';

interface Props {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}
const Button: React.FC<Props> = ({ type, children }) => {
  return (
    <button type={type} className='w-full p-2 rounded bg-blue-600 text-white outline-none'>
      {children}
    </button>
  );
};

export default Button;
