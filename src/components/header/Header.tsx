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
  Button,
  Image,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEllipsisVertical,
  faGear,
  faHeart,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  const menuItems = [
    { title: "Home", href: "#", ShowMainMenu: true },
    { title: "Sponsor", href: "#", ShowMainMenu: false },
    { title: "Feedback", href: "#", ShowMainMenu: true },
    { title: "Developers", href: "#", ShowMainMenu: false },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-blue-700"
      position="sticky"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          className="text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="/assets/images/quran-logo-w.png"
            alt="The Quran Logo"
            className="dark:invert min-w-20"
            width={100}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarContent className="hidden sm:flex gap-4 mr-4 " justify="end">
          {menuItems.map((item, index) => {
            if (item.ShowMainMenu)
              return (
                <NavbarItem
                  className="hidden sm:flex"
                  key={`sm-${item}-${index}`}
                  isActive={index === 0}
                >
                  <Link color="foreground" href={item.href}>
                    {item.title}
                  </Link>
                </NavbarItem>
              );
          })}

          <NavbarItem>
            <Button
              startContent={
                <FontAwesomeIcon
                  icon={faHeart}
                  size="xl"
                  style={{ color: "#f61313" }}
                />
              }
            >
              Sponsor
            </Button>{" "}
          </NavbarItem>
          <NavbarItem>|</NavbarItem>
          <NavbarItem>
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </NavbarItem>
          <NavbarItem>
            <FontAwesomeIcon icon={faGear} size="lg" />
          </NavbarItem>
          <NavbarItem>
            <FontAwesomeIcon icon={faMoon} size="lg" />
            {/* <FontAwesomeIcon icon={faSun} size="lg" /> */}
          </NavbarItem>
        </NavbarContent>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <div>
              <Avatar
                isBordered
                as="button"
                className="transition-transform hidden sm:flex"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                size="lg"
                className="flex sm:hidden"
              />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            {/* <DropdownItem key="github" className="flex sm:hidden">
              Github
            </DropdownItem> */}

            <DropdownItem key="theme" className="flex sm:hidden">
              Theme Dark
            </DropdownItem>
            <DropdownItem key="bookmarks">My Bookmarks</DropdownItem>
            <DropdownItem key="settings" className="flex sm:hidden">
              My Settings
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`xs-${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default Header;
