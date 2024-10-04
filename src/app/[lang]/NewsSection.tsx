import { PT_Serif } from 'next/font/google';
import parse from 'html-react-parser';
import Image from 'next/image';
import sectionBgWhite from '../images/blog-background-bila.png';
import { readingTime } from 'reading-time-estimator';
import { FiClock as ClockIcon } from 'react-icons/fi';
import { LiaArrowRightSolid as ArrowIcon } from 'react-icons/lia';
import PrvaAgencijaContactSection from './PrvaAgencijaContact';

interface NewsSectionInterface {
  pageContent: any;
  lang: any;
}

const PT = PT_Serif({ subsets: ['latin'], weight: ['400'], style: ['italic'] });

const NewsSection = ({ pageContent, lang }: NewsSectionInterface) => {
  // console.log('PAGI CONT NEWS', pageContent);
  return (
    <section className='w-full min-h-screen relative'>
      <Image
        src={sectionBgWhite}
        alt='page-background image'
        fill
        className='-z-[1] block object-cover object-center pointer-events-none select-none'
      />
      <h2 className={`${PT.className} text-5xl mx-auto text-center pt-20 pb-9 `}>Izdvojeni projekti</h2>

      <div className='w-full max-w-screen-2xl mx-auto flex items-start justify-center gap-6 '>
        {pageContent.map((cont: any) => {
          const baseShorthand = cont.node;
          const categoryShorthand = baseShorthand.introNews?.kategorija?.edges[0].node.name || 'No category';
          const titleShorthand = baseShorthand?.sadrzajHrFields?.naslovSadrzajHr || 'No title';
          const introTextShorthand = baseShorthand?.sadrzajHrFields?.kratkiUvodniTekstSadrzajHr || 'No intro';
          const thumbnailImageShorthand = baseShorthand?.introNews?.thumbnail?.node?.sourceUrl;
          const readTime = readingTime(introTextShorthand);
          // console.log('R TIME', readTime);
          return (
            <article key={baseShorthand.id} className='md:max-w-[336px]'>
              <Image
                src={thumbnailImageShorthand}
                alt='News card thumbnail'
                width={336}
                height={302}
                className='object-cover object-center block'
                loading='lazy'
              />
              <span className='mt-8 block text-xl text-prva-tamnija-boja font-light'>{categoryShorthand}</span>
              <h3 className={`${PT.className} text-4xl text-prva-tamna-boja`}>{titleShorthand}</h3>
              <div className='mt-5 prose prose-p:text-lg prose-p:leading-7'>{parse(introTextShorthand)}</div>
              <div className='w-full text-xs flex items-center justify-end gap-1 mt-5'>
                <ClockIcon />
                <span>{readTime.text}</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className='max-w-screen-2xl w-full mx-auto flex items-center justify-end px-14 mt-5'>
        <div className='flex items-center gap-3 text-prva-tamnozelena-boja text-lg'>
          <p className={`${PT.className}`}>Pogledaj sve projekte</p>
          <ArrowIcon />
        </div>
      </div>

      <PrvaAgencijaContactSection />
    </section>
  );
};

export default NewsSection;
