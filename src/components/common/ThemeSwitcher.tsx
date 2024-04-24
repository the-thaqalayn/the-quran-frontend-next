"use client";
import { useTheme } from "next-themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/react";
import { useEffect } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <span className="ps-5">
      <Tooltip
        placement="bottom"
        color="foreground"
        content={theme === "light" ? "Dark Mode" : "Light Mode"}
        size="sm"
      >
        <button
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          <FontAwesomeIcon
            icon={theme === "light" ? faMoon : faSun}
            size="xl"
            className="cursor-pointer text-white dark:text-gray-200 me-3"
          />
        </button>
      </Tooltip>
    </span>
  );
};
