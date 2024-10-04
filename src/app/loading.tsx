'use client';

import { CirclesWithBar } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='w-full h-screen bg-almost-white dark:bg-almost-black'>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <CirclesWithBar
          width='100'
          color='#8B9554'
          outerCircleColor='#8B9554'
          innerCircleColor='#8B9554'
          barColor='#8B9554'
          ariaLabel='circles-with-bar-loading'
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loading;
