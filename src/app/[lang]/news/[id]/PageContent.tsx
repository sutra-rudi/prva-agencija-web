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
    <article className='w-full z-10 relative pt-40'>
      <div className='flex flex-col items-start justify-start max-w-screen-2xl mx-auto lg:w-2/4 md:w-11/12 w-full px-4'>
        <div className=' flex items-center justify-start w-full'>
          <h4 className='text-secondary-dark uppercase text-lg font-light'>Novosti</h4>
        </div>

        <div className=' flex items-center justify-start w-full'>
          <h2 className={`${PT.className} xl:text-h1 lg:text-h2_lg text-h3_md  leading-[120%]`}>{prepareContent[1]}</h2>
        </div>

        <div className=' flex items-center justify-start  w-full  pt-6 pb-16'>
          <h4 className='text-base text-primary-dark'>{dayjs(global.datum).format('DD.MM.YYYY')}</h4>
        </div>
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
        <div className='grid grid-cols-1 justify-start place-items-start lg:w-3/4 md:w-11/12 w-full px-4 mx-auto pb-16'>
          <TracingBeam>
            <div
              className={`${PT.className} max-w-screen-2xl mx-auto flex items-center justify-start w-full text-2xl text-secondary-dark prose`}
            >
              {parse(prepareContent[0])}
            </div>

            <div className='w-full h-px bg-gray-300 my-14'></div>

            <div className='mt-4 prose lg:prose-h1:text-h3_md prose-h1:text-h4_sm prose-headings:font-SERIF prose-headings:font-normal prose-headings:italic mx-auto w-full'>
              {prepareContent[2] && parse(prepareContent[2])}
            </div>
          </TracingBeam>

          {prepareGallery && (
            <div className='flex flex-wrap w-full gap-2'>
              {prepareGallery.map((galImage: any) => {
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
          )}

          {files.file && (
            <div className=''>
              <h4>Dokumenti</h4>
              <button onClick={() => downloadFile(files.file.node.mediaItemUrl, files.fileName)}>
                Preuzmi {files.fileName}
              </button>
            </div>
          )}

          {tags && (
            <div className='flex gap-1'>
              {prepareTags.map((singTag: string) => {
                return <span key={singTag}>{singTag}</span>;
              })}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default PageContent;
