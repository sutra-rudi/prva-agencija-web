type FetchDataResponse = any;

export async function fetchMediaPaths(): Promise<FetchDataResponse | { error: boolean }> {
  try {
    const response = await fetch(`${process.env.BASE_APP_URL}/api/mediaPaths`, { cache: 'force-cache' });

    if (!response.ok) {
      throw new Error('Neuspješno dohvaćanje putanja medija');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Greška prilikom dohvaćanja medija:', error);
    return {
      error: true,
    };
  }
}
