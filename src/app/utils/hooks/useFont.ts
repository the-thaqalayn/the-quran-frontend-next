import { useEffect, useState } from "react";
import { prepareFontFace } from "@/app/utils/fontFaceHelper";

export const useFont = (fontName: string) => {
  const [fonts, setFonts] = useState<string[]>([]);

  useEffect(() => {
    if (!fonts.includes(fontName)) {
      setFonts((fs) => [...fs, fontName]);
      prepareFontFace(fontName);
    }
  }, [fonts, fontName]);
  return fonts;
};
