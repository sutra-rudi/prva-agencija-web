'use client';
import dayjs from 'dayjs';
import React from 'react';
import { blogLanguageFields } from '../pathsUtils/blogLanguageFields';
import slugify from 'slugify';
import { slugifyOptions } from '../pathsUtils/slugifyOptions';
import { UserLanguage } from '../enums/LangEnum';
import ArticleCard from '../components/ArticleCard';
import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';
import { readingTime } from 'reading-time-estimator';
import { getRecords } from '../lib/airtable';
import { PT_Serif } from 'next/font/google';
import BlogBGbila from '../images/blog-background-bila.png';
import Image from 'next/image';

const PT = PT_Serif({ subsets: ['latin'], weight: ['400'], style: ['italic'] });

interface BlogSection {
  pageContent: any;
  lang: any;
  categoriesList: any[];
  tagsList: any[];
  blogCtaKey: string;
  blogTableKey: string;
}

const BlogSection = ({ pageContent, lang, categoriesList, tagsList, blogCtaKey, blogTableKey }: BlogSection) => {
  const [blogCta, setBlogCta] = React.useState<string>('');
  const [mediaPaths, setMediaPaths] = React.useState<any>(null);
  const l = getSuffixFromLang(lang);

  // const router = useRouter();

  React.useEffect(() => {
    const fetchMediaPaths = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/mediaPaths`);
        const data = await response.json();

        setMediaPaths(data);
      } catch (error) {
        console.error('Error fetching media paths:', error);
      }
    };

    fetchMediaPaths();
  }, []);

  React.useEffect(() => {
    const getRecordsDemo = async () => {
      const callApi = await getRecords(lang, blogCtaKey, blogTableKey);

      setBlogCta(callApi.parseTranslation);
    };

    getRecordsDemo();
  }, [lang, blogCtaKey, blogTableKey]);

  return (
    <section className='pt-16 pb-20 relative'>
      <Image
        src={BlogBGbila}
        fill
        alt='background of cloth'
        className='z-[-1] object-cover object-center select-none pointer-events-none'
      />
      <h2 className={`${PT.className} text-5xl w-full text-center`}>Izdvojeni projekti</h2>

      <div className='max-w-[1740px] mx-auto my-8 flex flex-wrap gap-4 items-start justify-center min-h-dvh'>
        {pageContent &&
          mediaPaths &&
          pageContent.map((blogContent: any, index: number) => {
            const contentShorthand = blogContent.node;
            const contentCardShorthand = contentShorthand.introBlog;
            const languageField = blogLanguageFields[lang];
            const introField = contentShorthand[languageField]?.[`kratkiUvodniTekstSadrzaj${l}`];

            const las = `naslovSadrzaj${lang === UserLanguage.eng ? `Sadrzaj${l}` : `${l}`}`;

            const authorField = contentShorthand.author.node;
            const tags = contentShorthand[`tags${l}`]?.[`tagText${l}`];

            const tagsField = tags ? tags.split(', ') : [];

            const contentField = contentShorthand[languageField]?.[`sadrzajSadrzaj${l}`];

            const categoryField = contentCardShorthand.kategorija.edges.map((noda: any) => {
              return {
                catName: noda.node.informacijeKategorije
                  ? noda.node.informacijeKategorije[`imeKategorije${l}`]
                  : 'No category',
                catDesc: noda.node.informacijeKategorije
                  ? noda.node.informacijeKategorije[`opisKategorije${l}`]
                  : 'No category',
                catColor: noda.node.informacijeKategorije ? noda.node.informacijeKategorije.bojaKategorije : 'No color',
              };
            });

            const imgSource = contentCardShorthand.thumbnail
              ? contentCardShorthand.thumbnail.node.sourceUrl
              : contentCardShorthand.naslovnaSlika
              ? contentCardShorthand.naslovnaSlika.node.sourceUrl
              : mediaPaths.heroImagesArchiveBlog.desktop;

            const hoverImgSource = contentCardShorthand.naslovnaSlika
              ? contentCardShorthand.naslovnaSlika.node.sourceUrl
              : contentCardShorthand.naslovnaSlika
              ? contentCardShorthand.naslovnaSlika.node.sourceUrl
              : mediaPaths.heroImagesArchiveBlog.desktop;

            const readTime = readingTime(contentField);

            return (
              contentCardShorthand.istaknutoNaNaslovnici &&
              contentCardShorthand.statusBloga && (
                <ArticleCard
                  title={contentShorthand[languageField]?.[las]}
                  url={`/${lang}/blog/${
                    slugify(`${contentShorthand[languageField]?.[las]}`, slugifyOptions) + `-${contentShorthand.id}`
                  }`}
                  date={dayjs(contentCardShorthand.datum).format('DD.MM.YYYY') ?? 'Nema datuma'}
                  cta={blogCta}
                  imgSource={imgSource}
                  introContent={introField}
                  author={authorField}
                  key={index}
                  tags={tagsField}
                  readTime={readTime}
                  categories={categoryField}
                  hoverImgSource={hoverImgSource}
                  boolSwitches={{ isWithAuthor: true, isWithTags: false, isWithTopBar: true, isWithImage: false }}
                  isHorizontal={false}
                />
              )
            );
          })}
      </div>
    </section>
  );
};

export default BlogSection;
