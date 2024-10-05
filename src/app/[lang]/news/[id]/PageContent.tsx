'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
import { PT_Serif } from 'next/font/google';
import { TracingBeam } from '@/app/aceternityComponents/TracingBeam';

const PT = PT_Serif({ subsets: ['latin'], weight: ['400'], style: ['italic'] });

interface BlogPageContent {
  content: any;
  global: any;
  gallery: any;
  files: any;
  tags: any;
}
const PageContent = ({ content, global, gallery, files, tags }: BlogPageContent) => {
  const prepareContent: any[] = Object.values(content);
  const prepareGallery = Object.values(gallery);

  const prepareTags =
    tags &&
    tags.split(', ').map((singleTag: string) => {
      return `#${singleTag.trim()}`;
    });

  const downloadFile = (url: string, fileName: string) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error('Error while downloading file:', error));
  };

  return (
    <article className='w-full z-10 relative pt-32'>
      <div className='max-w-screen-2xl mx-auto flex items-center justify-start  lg:w-1/2 w-full'>
        <h4 className='text-primary-dark uppercase text-lg'>Novosti</h4>
      </div>

      <div className='max-w-screen-2xl mx-auto flex items-center justify-center lg:w-1/2 w-full'>
        <h2 className={`${PT.className} text-h1 leading-[120%]`}>{prepareContent[1]}</h2>
      </div>

      <div className='max-w-screen-2xl mx-auto flex items-center justify-start lg:w-1/2 w-full'>
        <h4 className='text-base text-primary-dark'>{dayjs(global.datum).format('DD.MM.YYYY')}</h4>
      </div>
      <div className='w-full h-[650px] relative'>
        <Image
          src={global.naslovnaSlika.node.sourceUrl}
          alt='blog banner image'
          className='block object-cover object-center aspect-video'
          fill
          quality={100}
          priority
        />
      </div>
      <div className='max-w-screen-2xl mx-auto mt-16'>
        <div className='grid grid-cols-1 justify-center place-items-start lg:w-2/4 w-full mx-auto'>
          <TracingBeam>
            <div className='mt-4 prose mx-auto'>{prepareContent[2] && parse(prepareContent[2])}</div>
          </TracingBeam>

          <div className='flex flex-wrap w-full gap-2'>
            {prepareGallery &&
              prepareGallery.map((galImage: any) => {
                return (
                  galImage && (
                    <div key={galImage.node.sourceUrl} className='h-[250px] w-[350px] relative'>
                      <Image
                        src={galImage.node.sourceUrl}
                        alt='gallery image'
                        fill
                        className='object-cover object-center aspect-auto block'
                      />
                    </div>
                  )
                );
              })}
          </div>

          <div className=''>
            <h4>Dokumenti</h4>
            <button onClick={() => downloadFile(files.file.node.mediaItemUrl, files.fileName)}>
              Preuzmi {files.fileName}
            </button>
          </div>

          <div className='flex gap-1'>
            {tags &&
              prepareTags.map((singTag: string) => {
                return <span key={singTag}>{singTag}</span>;
              })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PageContent;
