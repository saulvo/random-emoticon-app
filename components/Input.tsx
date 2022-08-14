import React, { useId } from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const id = useId();
  return (
    <input
      id={id}
      {...props}
      className='w-full border border-gray-400 p-2 mb-3 outline-1 outline-blue-500 rounded invalid:placeholder-shown:outline-red-600'
    />
  );
};

export default Input;
