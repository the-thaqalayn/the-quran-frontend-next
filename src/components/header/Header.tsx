"use client";

import React from "react";

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
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { ThemeSwitcher } from "../common/ThemeSwitcher";
import { useTheme } from "next-themes";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGear, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme } = useTheme();

  const menuItems = [
    { title: "Home", href: "#" },
    { title: "Sponsor", href: "#" },
    { title: "Feedback", href: "#" },
    { title: "Developers (GitHub)", href: "#" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-blue-700 dark:bg-cyan-800"
      position="sticky"
    >
      <NavbarContent className="" justify="start">
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
          <Dropdown placement="bottom-end">
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
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`xs-${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default Header;
