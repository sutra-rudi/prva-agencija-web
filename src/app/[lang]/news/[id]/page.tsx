import { getSingleNewsQuery } from '@/app/queries/getSingleNewsQuery';
import { blogLanguageFields } from '@/app/pathsUtils/blogLanguageFields';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const LazyContent = dynamic(() => import('./PageContent'));
export default async function SingleNewsPage({ params: { lang, id } }: { params: { lang: string; id: string } }) {
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  const slugId = getIdFromSlug(id);

  const getSingleNews = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getSingleNewsQuery(slugId, lang),
    }),
    cache: 'no-cache',
  });

  const parseData = await getSingleNews.json();
  const l = `${lang[0].toUpperCase() + lang.slice(1).toLowerCase()}`;
  const prepareDataForClient = parseData.data.novosti;

  const languageField = blogLanguageFields[lang];

  const documentsField = {
    file: prepareDataForClient[`docsUpload${l}`]?.[lang],
    fileName: prepareDataForClient[`docsUpload${l}`]?.[`nazivDokumenta${l}`],
  };

  const constructField = `tags` + l;

  const tagsField = prepareDataForClient[constructField].tagText;

  return (
    <main className='w-full relative animate-easeFadeBasic'>
      <Suspense>
        <LazyContent
          content={prepareDataForClient[languageField]}
          global={prepareDataForClient.introNews}
          gallery={prepareDataForClient.photoGallery.fotogalerija}
          files={documentsField}
          tags={tagsField}
        />
      </Suspense>
    </main>
  );
}
