export const getFontFaceNameForPage = (pageNumber: number) => {
  return `p${pageNumber}`;
};
export const getFontFaceSource = (pageNumber: number, isV2: boolean) => {
  return `url('/assets/fonts/quran/hafs/${
    isV2 ? "v2" : "v1"
  }/woff2/p${pageNumber}.woff2') format('woff2') ,url('/assets/fonts/quran/hafs/${
    isV2 ? "v2" : "v1"
  }/woff/p${pageNumber}.woff') format('woff'), url('/assets/fonts/quran/hafs/${
    isV2 ? "v2" : "v1"
  }/ttf/p${pageNumber}.ttf') format('truetype')`;
};

export const getFontFace = (pageNumber: number, isV2: boolean) => {
  return new FontFace(
    getFontFaceNameForPage(pageNumber),
    getFontFaceSource(pageNumber, isV2)
  );
};

export const loadFontFace = async (fontFace: FontFace) => {
  const loadedFont = await fontFace.load();
  document.fonts.add(loadedFont);
};
