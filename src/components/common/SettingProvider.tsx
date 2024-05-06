"use client";
import { ArabicTextFont, getArabicTextFont } from "@/app/utils/fonts";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface SettingProviderProps {
  children: React.ReactNode;
}

interface SettingContextProps {
  arabicFont: string;
  setArabicFont: Dispatch<SetStateAction<string>>;
}
export const SettingContext = createContext<SettingContextProps>({
  arabicFont: "",
  setArabicFont: () => {},
});

const SettingProvider = ({ children }: SettingProviderProps) => {
  const [arabicFont, setArabicFont] = useState(
    getArabicTextFont(ArabicTextFont.Amiri)
  );

  return (
    <SettingContext.Provider value={{ arabicFont, setArabicFont }}>
      <body className={"bg-gray-50 dark:bg-gray-700 " + `${arabicFont}`}>
        {children}
      </body>
    </SettingContext.Provider>
  );
};
export default SettingProvider;
