'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
interface BlogPageContent {
  content: any;
  global: any;
}
const PageContent = ({ content, global }: BlogPageContent) => {
  const prepareContent: any[] = Object.values(content);

  return (
    <article className='mx-auto my-0 max-w-[1024px] py-8'>
      <div className='w-full h-[250px] relative'>
        <Image
          src={global.naslovnaSlika.node.sourceUrl}
          alt='blog banner image'
          className='block object-cover object-center aspect-video'
          fill
        />
      </div>

      <h4 className='text-4xl font-bold'>{dayjs(global.datum).format('DD.MM.YYYY')}</h4>
      <h4>Kategorija: {global.kategorija[0]}</h4>
      <h2 className='text-6xl font-bold'>{prepareContent[1]}</h2>
      <div className='mt-4 grid grid-cols-1 gap-2'>{parse(prepareContent[2])}</div>
    </article>
  );
};

export default PageContent;
