import {
  Amiri,
  IBM_Plex_Sans_Arabic,
  Noto_Kufi_Arabic,
  Noto_Naskh_Arabic,
  Noto_Sans_Arabic,
  Mada,
  Lateef,
  Mirza,
  Harmattan,
  Scheherazade_New,
  Katibeh,
} from "next/font/google";

export const Amiri_Init = Amiri({
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-translation",
});
export const IBM_Plex_Sans_Arabic_Init = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-translation",
});
export const Noto_Kufi_Arabic_Init = Noto_Kufi_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-translation",
});
export const Noto_Naskh_Arabic_Init = Noto_Naskh_Arabic({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-translation",
});
export const Noto_Sans_Arabic_Init = Noto_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-translation",
});
export const Mada_Init = Mada({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-translation",
});
export const Lateef_Init = Lateef({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-translation",
});
export const Mirza_Init = Mirza({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-translation",
});
export const Harmattan_Init = Harmattan({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-translation",
});
export const Scheherazade_New_Init = Scheherazade_New({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-translation",
});
export const Katibeh_Init = Katibeh({
  weight: ["400"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-translation",
});
// export const amiri = amiri_init.variable;
// export const reemKufi = reem_kufi_init.variable;
export enum TranslationTextFont {
  Amiri,
  IBM_Plex_Sans_Arabic,
  Noto_Kufi_Arabic,
  Noto_Naskh_Arabic,
  Noto_Sans_Arabic,
  Mada,
  Lateef,
  Mirza,
  Harmattan,
  Scheherazade_New,
  Katibeh,
}

export const getTranslationTextFont = (name: TranslationTextFont) => {
  let fontVar;
  switch (name) {
    case TranslationTextFont.Amiri:
      fontVar = Amiri_Init.variable;
      break;
    case TranslationTextFont.Noto_Kufi_Arabic:
      fontVar = Noto_Kufi_Arabic_Init.variable;
      break;
    case TranslationTextFont.Noto_Naskh_Arabic:
      fontVar = Noto_Naskh_Arabic_Init.variable;
      break;
    case TranslationTextFont.Noto_Sans_Arabic:
      fontVar = Noto_Sans_Arabic_Init.variable;
      break;
    case TranslationTextFont.Mada:
      fontVar = Mada_Init.variable;
      break;
    case TranslationTextFont.Lateef:
      fontVar = Lateef_Init.variable;
      break;
    case TranslationTextFont.Mirza:
      fontVar = Mirza_Init.variable;
      break;
    case TranslationTextFont.Harmattan:
      fontVar = Harmattan_Init.variable;
      break;
    case TranslationTextFont.Scheherazade_New:
      fontVar = Scheherazade_New_Init.variable;
      break;
    case TranslationTextFont.Katibeh:
      fontVar = Katibeh_Init.variable;
      break;

    default:
      fontVar = Amiri_Init.variable;
      break;
  }
  return fontVar;
};
