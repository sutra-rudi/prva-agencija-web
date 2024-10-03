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
function generatePoljeAtributaFields() {
  let fields = '';
  for (let i = 1; i <= 20; i++) {
    fields += `
      poljeAtributa${String(i).padStart(2, '0')} {
        nazivAtributa
        vrijednostAtributa
      }
    `;
  }
  return fields;
}

function generatePhotoGalleryFields() {
  let fields = '';
  for (let i = 1; i <= 10; i++) {
    fields += `
      galSlika${String(i).padStart(2, '0')} {
        node {
          sourceUrl
          srcSet
        }
      }
    `;
  }
  return fields;
}
