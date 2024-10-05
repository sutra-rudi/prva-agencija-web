'use client';

import { CirclesWithBar, RotatingSquare } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='w-full h-screen bg-almost-white dark:bg-almost-black'>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <RotatingSquare width='100' color='#8B9554' ariaLabel='rotating-square-loading' visible={true} />
      </div>
    </div>
  );
};

export default Loading;
