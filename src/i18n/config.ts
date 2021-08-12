
import Hebrew from './language/he.json'
import English from './language/en.json';

enum languageOption {
  he = "he",
  en = "en"
}

const languageMessages = {
  he: Hebrew,
  en: English

}


enum LangDirection {
  LTR = "ltr",
  RTL = "rtl"
}

const langs = [
  {
    langCode: "en",
    displayName: "English",
    direction: LangDirection.LTR
  },
  {
    langCode: "he",
    displayName: "עברית",
    direction: LangDirection.RTL
  }
]


const localeLanguage = navigator.language;
let language: {};

switch (localeLanguage) {
  case languageOption.en:
    language = English;
    break;
  case languageOption.he:
    language = Hebrew;
    break;

  default:
    console.log(`${localeLanguage} not defined in languageOptions`);
    break;
}


export {
  language,
  localeLanguage,
  languageOption,
  languageMessages
}