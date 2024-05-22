// import {
//   Amiri,
//   IBM_Plex_Sans_Arabic,
//   Noto_Kufi_Arabic,
//   Noto_Naskh_Arabic,
//   Noto_Sans_Arabic,
//   Mada,
//   Lateef,
//   Mirza,
//   Harmattan,
//   Scheherazade_New,
//   Katibeh,
// } from "next/font/google";
import localFont from "next/font/local";
export const Amiri_Init = localFont({
  src: "./fonts/Amiri/Amiri-Regular.ttf",
  display: "swap",
  variable: "--font-text-arabic",
});
// export const IBM_Plex_Sans_Arabic_Init = IBM_Plex_Sans_Arabic({
//   weight: ["100", "200", "300", "400", "500", "600"],
//   style: ["normal"],
//   display: "swap",
//   subsets: ["arabic"],
//   variable: "--font-text-arabic",
// });
// export const Noto_Kufi_Arabic_Init = Noto_Kufi_Arabic({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   style: ["normal"],
//   display: "swap",
//   subsets: ["arabic"],
//   variable: "--font-text-arabic",
// });
// export const Noto_Naskh_Arabic_Init = Noto_Naskh_Arabic({
//   weight: ["400", "500", "600", "700"],
//   style: ["normal"],
//   display: "swap",
//   subsets: ["arabic"],
//   variable: "--font-text-arabic",
// });
// export const Noto_Sans_Arabic_Init = Noto_Sans_Arabic({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   style: ["normal"],
//   display: "swap",
//   subsets: ["arabic"],
//   variable: "--font-text-arabic",
// });
// export const Mada_Init = Mada({
//   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
//   style: ["normal"],
//   display: "swap",
//   subsets: ["arabic"],
//   variable: "--font-text-arabic",
// });
// export const Lateef_Init = Lateef({
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
//   style: ["normal"],
//   display: "swap",
//   subsets: ["arabic"],
//   variable: "--font-text-arabic",
// });
// export const Mirza_Init = Mirza({
//   weight: ["400", "500", "600", "700"],
//   style: ["normal"],
//   display: "swap",
//   subsets: ["arabic"],
//   variable: "--font-text-arabic",
// });
// export const Harmattan_Init = Harmattan({
//   weight: ["400", "500", "600", "700"],
//   style: ["normal"],
//   display: "swap",
//   subsets: ["arabic"],
//   variable: "--font-text-arabic",
// });
// export const Scheherazade_New_Init = Scheherazade_New({
//   weight: ["400", "500", "600", "700"],
//   style: ["normal"],
//   display: "swap",
//   subsets: ["arabic"],
//   variable: "--font-text-arabic",
// });
// export const Katibeh_Init = Katibeh({
//   weight: ["400"],
//   style: ["normal"],
//   display: "swap",
//   subsets: ["arabic"],
//   variable: "--font-text-arabic",
// });
// export const amiri = amiri_init.variable;
// export const reemKufi = reem_kufi_init.variable;
export enum ArabicTextFont {
  Amiri,
  // IBM_Plex_Sans_Arabic,
  // Noto_Kufi_Arabic,
  // Noto_Naskh_Arabic,
  // Noto_Sans_Arabic,
  // Mada,
  // Lateef,
  // Mirza,
  // Harmattan,
  // Scheherazade_New,
  // Katibeh,
}

export const getArabicTextFont = (name: ArabicTextFont) => {
  let fontVar;
  switch (name) {
    case ArabicTextFont.Amiri:
      fontVar = Amiri_Init.variable;
      break;
    // case ArabicTextFont.Noto_Kufi_Arabic:
    //   fontVar = Noto_Kufi_Arabic_Init.variable;
    //   break;
    // case ArabicTextFont.Noto_Naskh_Arabic:
    //   fontVar = Noto_Naskh_Arabic_Init.variable;
    //   break;
    // case ArabicTextFont.Noto_Sans_Arabic:
    //   fontVar = Noto_Sans_Arabic_Init.variable;
    //   break;
    // case ArabicTextFont.Mada:
    //   fontVar = Mada_Init.variable;
    //   break;
    // case ArabicTextFont.Lateef:
    //   fontVar = Lateef_Init.variable;
    //   break;
    // case ArabicTextFont.Mirza:
    //   fontVar = Mirza_Init.variable;
    //   break;
    // case ArabicTextFont.Harmattan:
    //   fontVar = Harmattan_Init.variable;
    //   break;
    // case ArabicTextFont.Scheherazade_New:
    //   fontVar = Scheherazade_New_Init.variable;
    //   break;
    // case ArabicTextFont.Katibeh:
    //   fontVar = Katibeh_Init.variable;
    //   break;

    default:
      fontVar = Amiri_Init.variable;
      break;
  }
  return fontVar;
};
