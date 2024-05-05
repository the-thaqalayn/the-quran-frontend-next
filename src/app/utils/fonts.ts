import { Amiri, Reem_Kufi } from "next/font/google";

export const amiri_init = Amiri({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-arabic",
});
export const reem_kufi_init = Reem_Kufi({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-text-arabic",
});

// export const amiri = amiri_init.variable;
// export const reemKufi = reem_kufi_init.variable;
export enum FontTextArabic {
  Amiri,
  Reem_Kufi,
}

export const getFontTextArabic = (name: FontTextArabic) => {
  let fontVar;
  switch (name) {
    case FontTextArabic.Amiri:
      fontVar = amiri_init.variable;
      break;
    case FontTextArabic.Reem_Kufi:
      fontVar = reem_kufi_init.variable;
      break;

    default:
      fontVar = amiri_init.variable;
      break;
  }
  return fontVar;
};
