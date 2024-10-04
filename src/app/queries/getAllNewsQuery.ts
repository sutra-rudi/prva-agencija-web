export const getAllNewsQuery = (lang: string) => {
  return `query NewQuery {
  allNovosti {
    edges {
      node {
        id
        isFrontPage
        sadrzajHrFields {
          kratkiUvodniTekstSadrzajHr
          naslovSadrzajHr
          sadrzajSadrzajHr
        }
        introNews {
          naslovnaSlika {
            node {
              id
              sourceUrl
            }
          }
          thumbnail {
            node {
              id
              sourceUrl
            }
          }
          kategorija {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
}`;
};
