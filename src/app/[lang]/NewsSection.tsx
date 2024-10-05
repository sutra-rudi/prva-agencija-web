'use client';

import { PT_Serif } from 'next/font/google';
import parse from 'html-react-parser';
import Image from 'next/image';
import sectionBgWhite from '../images/blog-background-bila.png';
import { readingTime } from 'reading-time-estimator';
import { FiClock as ClockIcon } from 'react-icons/fi';
import { LiaArrowRightSolid as ArrowIcon } from 'react-icons/lia';
import PrvaAgencijaContactSection from './PrvaAgencijaContact';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface NewsSectionInterface {
  pageContent: any;
  lang: any;
}

const PT = PT_Serif({ subsets: ['latin'], weight: ['400'], style: ['italic'] });

const NewsSection = ({ pageContent, lang }: NewsSectionInterface) => {
  // console.log('PAGI CONT NEWS', pageContent);
  return (
    <section className='w-full min-h-screen relative px-4'>
      <Image
        src={sectionBgWhite}
        alt='page-background image'
        fill
        className='-z-[1] block object-cover object-center pointer-events-none select-none'
      />
      <h2 className={`${PT.className} xl:text-5xl lg:text-4xl text-3xl mx-auto text-center pt-20 pb-9 `}>
        Izdvojeni projekti
      </h2>

      <div className='w-full max-w-screen-2xl mx-auto  lg:items-start items-center justify-center  gap-6 2xl:flex-nowrap flex-wrap prva-custom-news-break:flex hidden'>
        {pageContent.map((cont: any) => {
          const baseShorthand = cont.node;
          const categoryShorthand = baseShorthand.introNews?.kategorija?.edges[0].node.name || 'No category';
          const titleShorthand = baseShorthand?.sadrzajHrFields?.naslovSadrzajHr || 'No title';
          const introTextShorthand = baseShorthand?.sadrzajHrFields?.kratkiUvodniTekstSadrzajHr || 'No intro';
          const thumbnailImageShorthand = baseShorthand?.introNews?.thumbnail?.node?.sourceUrl;
          const readTime = readingTime(introTextShorthand);

          return (
            <article
              key={baseShorthand.id}
              className='2xl:max-w-[336px] lg:max-w-[256px] w-full md:block flex shrink-0 gap-5'
            >
              <Image
                src={thumbnailImageShorthand}
                alt='News card thumbnail'
                width={336}
                height={302}
                className='object-cover object-center block md:w-auto md:h-auto w-1/2 h-1/2'
                loading='lazy'
              />
              <div className=''>
                <span className='lg:mt-8 mt-6 block lg:text-xl md:text-lg text-base text-prva-tamnija-boja font-light'>
                  {categoryShorthand}
                </span>
                <h3 className={`${PT.className} lg:text-3xl md:text-2xl text-lg text-prva-tamna-boja`}>
                  {titleShorthand}
                </h3>
                <div className='lg:mt-5 mt-3 prose lg:prose-p:text-base prose-p:text-sm lg:prose-p:leading-5 prose-p:leading-3 md:block hidden'>
                  {parse(introTextShorthand)}
                </div>
                <div className='w-full text-xs  items-center justify-end gap-1 mt-5 md:flex hidden'>
                  <ClockIcon />
                  <span>{readTime.text}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className='w-full max-w-screen-2xl mx-auto prva-custom-news-break:hidden block'>
        <Slider infinite slidesToShow={1} speed={250} slidesToScroll={1} arrows={false} dots draggable>
          {pageContent.map((cont: any) => {
            const baseShorthand = cont.node;
            const categoryShorthand = baseShorthand.introNews?.kategorija?.edges[0].node.name || 'No category';
            const titleShorthand = baseShorthand?.sadrzajHrFields?.naslovSadrzajHr || 'No title';
            const introTextShorthand = baseShorthand?.sadrzajHrFields?.kratkiUvodniTekstSadrzajHr || 'No intro';
            const thumbnailImageShorthand = baseShorthand?.introNews?.thumbnail?.node?.sourceUrl;
            const readTime = readingTime(introTextShorthand);

            return (
              <article key={baseShorthand.id} className='w-full h-full !flex !gap-5'>
                <Image
                  src={thumbnailImageShorthand}
                  alt='News card thumbnail'
                  width={336}
                  height={302}
                  className='object-cover object-center max-w-[60%]'
                  loading='lazy'
                />
                <div className='w-full'>
                  <span className='lg:mt-8 mt-6 block lg:text-xl md:text-lg text-base text-prva-tamnija-boja font-light'>
                    {categoryShorthand}
                  </span>
                  <h3 className={`${PT.className} lg:text-3xl md:text-2xl text-lg text-prva-tamna-boja`}>
                    {titleShorthand}
                  </h3>
                  <div className='lg:mt-5 mt-3 prose lg:prose-p:text-base prose-p:text-sm lg:prose-p:leading-5 prose-p:leading-3 md:block hidden'>
                    {parse(introTextShorthand)}
                  </div>
                  <div className='w-full text-xs  items-center justify-end gap-1 mt-5 md:flex hidden'>
                    <ClockIcon />
                    <span>{readTime.text}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </Slider>
      </div>

      <div className='max-w-screen-2xl w-full mx-auto flex items-center justify-end lg:px-14 mt-16'>
        <div className='flex items-center gap-3 text-prva-tamnozelena-boja lg:text-lg md:text-base text-small'>
          <p className={`${PT.className}`}>Pogledaj sve projekte</p>
          <ArrowIcon />
        </div>
      </div>

      <PrvaAgencijaContactSection />
    </section>
  );
};

export default NewsSection;
