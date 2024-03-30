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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { title: "Home", href: "#" },
    { title: "Feedback", href: "#" },
    { title: "Developers", href: "#" },
    { title: "Donate", href: "#" },
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
          {menuItems.map((item, index) => (
            <NavbarItem
              className="hidden sm:flex"
              key={`sm-${item}-${index}`}
              isActive={index === 0}
            >
              <Link color="foreground" href={item.href}>
                {item.title}
              </Link>
            </NavbarItem>
          ))}

          <NavbarItem>|</NavbarItem>
          <NavbarItem>Github</NavbarItem>
          <NavbarItem>Settings</NavbarItem>
          <NavbarItem>Theme</NavbarItem>
        </NavbarContent>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="github" className="flex sm:hidden">
              Github
            </DropdownItem>
            <DropdownItem key="settings" className="flex sm:hidden">
              Settings
            </DropdownItem>
            <DropdownItem key="theme" className="flex sm:hidden">
              Theme
            </DropdownItem>
            <DropdownItem key="bookmarks">My Bookmarks</DropdownItem>
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
