"use client";

import React, { use, useEffect } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { ThemeSwitcher } from "../common/ThemeSwitcher";
import { useTheme } from "next-themes";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faGear,
  faBookBookmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { title: "Surah", href: "/" },
    { title: "Revelation Order", href: "/" },
    { title: "Juz", href: "/" },
    { title: "Hizb", href: "/" },
    { title: "Rub el Hizb", href: "/" },
    { title: "Manzil", href: "/" },
    { title: "Ruku", href: "/" },
    { title: "Page", href: "/" },
    // { title: "Sponsor", href: "#" },
    // { title: "Feedback", href: "#" },
    // { title: "Developers (GitHub)", href: "#" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-blue-700 dark:bg-cyan-800"
      position="sticky"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          className="text-white dark:text-gray-200"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="/assets/images/quran-logo-w.png"
            alt="The Quran Logo"
            className="dark:invert-[.15] min-w-20"
            width={100}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ul className="flex flex-row list-none">
            <li>
              <Tooltip
                placement="bottom"
                color="foreground"
                content="My Settings"
                size="sm"
              >
                <FontAwesomeIcon
                  icon={faGear}
                  size="lg"
                  className="cursor-pointer text-white dark:text-gray-200 me-3"
                />
              </Tooltip>
            </li>
            <li>
              <Tooltip
                placement="bottom"
                color="foreground"
                content="Search"
                size="sm"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  className="cursor-pointer text-white dark:text-gray-200 me-3"
                />
              </Tooltip>
            </li>
            <li>
              <Tooltip
                placement="bottom"
                color="foreground"
                content="My Bookmarks"
                size="sm"
              >
                <FontAwesomeIcon
                  icon={faBookBookmark}
                  size="lg"
                  className="cursor-pointer text-white dark:text-gray-200 me-3"
                />
              </Tooltip>
            </li>
            <li>
              <Tooltip
                placement="bottom"
                color="foreground"
                content="Github"
                size="sm"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="xl"
                  className="cursor-pointer text-white dark:text-gray-200 me-3"
                />
              </Tooltip>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
          {/* <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                size="lg"
                className="cursor-pointer text-white dark:text-gray-200"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="theme">
                <ThemeSwitcher />
              </DropdownItem>
              <DropdownItem key="bookmarks">
                <span>
                  <FontAwesomeIcon
                    icon={faBookBookmark}
                    size="lg"
                    className="cursor-pointer text-black dark:text-gray-200 me-3"
                  />
                </span>
                My Bookmarks
              </DropdownItem>
              <DropdownItem key="settings">
                {" "}
                <span>
                  <FontAwesomeIcon
                    icon={faGear}
                    size="lg"
                    className="cursor-pointer text-black dark:text-gray-200 me-3"
                  />
                </span>
                My Settings
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="text-center text-xl font-bold pt-10">
        <h1>Table Of Contents By</h1>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`xs-${item}-${index}`}>
            <Link href={item.href} size="lg">
              <h2>{item.title}</h2>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default Header;
