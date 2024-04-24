// export const getFontFaceVNameForPage = (pageNumber: number) => {
//   return `p${pageNumber}`;
// };
export const getSourceFontFaceV = (name: string, suffixName: string) => {
  return `url('/assets/fonts/quran/hafs/${suffixName}/woff2/${name}.woff2') format('woff2') ,url('/assets/fonts/quran/hafs/${suffixName}/woff/${name}.woff') format('woff'), url('/assets/fonts/quran/hafs/${suffixName}/ttf/${name}.ttf') format('truetype')`;
};

// export const getFontFace = (pageNumber: number, isV2: boolean) => {
//   return new FontFace(
//     getFontFaceVNameForPage(pageNumber),
//     getFontFaceVSource(pageNumber, isV2)
//   );
// };

export const prepareFontFace = async (fontName: string) => {
  let splitedFontNames = fontName.split("-");
  let prefixName = splitedFontNames[0];
  let suffixName = splitedFontNames.length > 1 ? splitedFontNames[1] : "";

  let name: string, source: string;
  switch (suffixName) {
    case "v1":
    case "v2":
      name = `p${prefixName}`;
      source = getSourceFontFaceV(name, suffixName);
      break;

    default:
      name = source = "";
      break;
  }

  await loadFontFace(name, source);
};

export const loadFontFace = async (name: string, source: string) => {
  if (name === "") return;

  console.log(name, source);
  const fontFace = new FontFace(name, source);
  const loadedFont = await fontFace.load();
  document.fonts.add(loadedFont);
};
