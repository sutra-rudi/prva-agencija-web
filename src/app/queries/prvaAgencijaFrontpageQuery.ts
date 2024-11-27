export default function prvaAgencijaHomepageQ() {
  return `query GetPrvaAgencijaFrontpage {
  allUsluge {
    edges {
      node {
        id
        uslugeIntro {
          istakniUsluguFavorite
          radniBrojUsluge
          status
        }
        uslugeSadrzajHr {
          sadrzajGrupeUsluga {
            kratakOpis
            nazivusluge
            podnasloviliuvodnik
            sadrzajusluge {
              sadrzajPasusa
            }
          }
        }
      }
    }
  }
  
  karuselNaslovnica {
    edges {
      node {
        id
        photoGallery30pcs {
          galSlika01 {
            node {
              id
              sourceUrl
            }
          }
          galSlika02 {
            node {
              id
              sourceUrl
            }
          }
          galSlika03 {
            node {
              id
              sourceUrl
            }
          }
          galSlika04 {
            node {
              id
              sourceUrl
            }
          }
          galSlika05 {
            node {
              id
              sourceUrl
            }
          }
          galSlika06 {
            node {
              id
              sourceUrl
            }
          }
          galSlika07 {
            node {
              id
              sourceUrl
            }
          }
          galSlika08 {
            node {
              id
              sourceUrl
            }
          }
          galSlika09 {
            node {
              id
              sourceUrl
            }
          }
          galSlika10 {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
  
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
}
