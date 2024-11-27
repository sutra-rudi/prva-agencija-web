export const getAllUslugeQuery = () => {
  return `query NewQuery {
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
}`;
};
