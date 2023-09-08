import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en-US.json";
import pt from "./pt-BR.json";
import es from "./es-ES.json";

function setupI18N() {
  i18next
    .use(initReactI18next)
    .init({
      lng: "en-US",
      resources: {
        "en-US": { translation: en },
        "pt-BR": { translation: pt },
        "es-ES": { translation: es }
      }
    });
  
  return i18next;
}

export default setupI18N;