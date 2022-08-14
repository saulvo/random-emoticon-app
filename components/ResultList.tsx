import React, { useCallback, useRef } from 'react';

interface Props {
  data: string;
}
const ResultList: React.FC<Props> = ({ data }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const handleButtonClick = useCallback(() => {
    navigator.clipboard.writeText(data);
  }, [data]);

  return (
    <div className='flex items-start mt-6 '>
      <p ref={ref} className='flex-1 mr-4 bg-gray-100 border border-gray-200 p-2 rounded'>
        {data}
      </p>
      <button
        type='button'
        onClick={handleButtonClick}
        className='py-1 px-2 border bg-white border-green-600 text-green-600 text-sm rounded hover:bg-green-600 hover:text-white transition-all'>
        copy
      </button>
    </div>
  );
};

export default ResultList;
