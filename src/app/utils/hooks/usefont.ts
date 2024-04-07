import { useEffect, useState } from "react";
import { getFontFace, loadFontFace } from "../fontFaceHelper";

export const useFont = (pageNumber: number, isV2: boolean = false) => {
  const [fontFace] = useState(getFontFace(pageNumber, isV2));
  useEffect(() => {
    loadFontFace(fontFace);
  }, [fontFace]);
};
