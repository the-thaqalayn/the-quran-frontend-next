import { useEffect, useState } from "react";
import {
  getFontFaceNameForPage,
  getFontFaceSource,
  loadFontFace,
} from "@/app/utils/fontFaceHelper";

export const useFont = (pageNumber: number, isV2: boolean = false) => {
  const [page] = useState(pageNumber);
  useEffect(() => {
    loadFontFace(page, isV2);
  }, [page]);
};
