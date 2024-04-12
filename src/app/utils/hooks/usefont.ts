import { useEffect, useState } from "react";
import { loadFontFace } from "@/app/utils/fontFaceHelper";

export const useFont = (page: number, isV2: boolean = false) => {
  const [fonts, setFonts] = useState<number[]>([]);

  useEffect(() => {
    if (!fonts.includes(page)) {
      setFonts((p) => [...p, page]);
      loadFontFace(page, isV2);
      console.log("fonts:", JSON.stringify(fonts));
    }
  }, [page]);
};
