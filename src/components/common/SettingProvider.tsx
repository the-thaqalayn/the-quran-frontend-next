"use client";
import { ArabicTextFont, getArabicTextFont } from "@/app/utils/arabicFonts";
import {
  TranslationTextFont,
  getTranslationTextFont,
} from "@/app/utils/translationFonts";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface SettingProviderProps {
  children: React.ReactNode;
}

interface SettingContextProps {
  arabicFont: string;
  setArabicFont: Dispatch<SetStateAction<string>>;
  translationFont: string;
  setTranslationFont: Dispatch<SetStateAction<string>>;
}
export const SettingContext = createContext<SettingContextProps>({
  arabicFont: "",
  setArabicFont: () => {},
  translationFont: "",
  setTranslationFont: () => {},
});

const SettingProvider = ({ children }: SettingProviderProps) => {
  const [arabicFont, setArabicFont] = useState(
    getArabicTextFont(ArabicTextFont.Amiri)
  );
  const [translationFont, setTranslationFont] = useState(
    getTranslationTextFont(TranslationTextFont.Katibeh)
  );

  return (
    <SettingContext.Provider
      value={{ arabicFont, setArabicFont, translationFont, setTranslationFont }}
    >
      <body className={"bg-gray-50 dark:bg-gray-700" + ` ${arabicFont}`}>
        {children}
      </body>
    </SettingContext.Provider>
  );
};
export default SettingProvider;
