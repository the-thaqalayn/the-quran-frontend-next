"use client";
import { useTheme } from "next-themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <span>
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          size="lg"
          className="cursor-pointer text-black dark:text-gray-200 me-3"
        />
      </span>
      <button
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};
