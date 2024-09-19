import { getAllMapsQuery } from '@/app/queries/getAllMapsQuery';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const LazyContent = dynamic(() => import('./PageContent'));
export default async function Maps() {
  const getAllMaps = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllMapsQuery(),
    }),
  });

  const parseMapsData = await getAllMaps.json();

  const prepareDataMaps = parseMapsData.data.bazaMapsKarte.edges;

  return (
    <main>
      <Suspense>{parseMapsData.data && <LazyContent pageContent={prepareDataMaps} />}</Suspense>
    </main>
  );
}
