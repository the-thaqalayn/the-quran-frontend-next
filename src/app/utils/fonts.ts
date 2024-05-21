import localFont from "next/font/local";

export const Amiri_Init = localFont({
  src: "./fonts/Amiri/Amiri-Regular.ttf",
  display: "swap",
  variable: "--font-arabic",
});
export const Katibeh_Init = localFont({
  src: "./fonts/Katibeh/Katibeh-Regular.ttf",
  display: "swap",
  variable: "--font-translation",
});
// export enum ArabicTextFont {
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
// }
