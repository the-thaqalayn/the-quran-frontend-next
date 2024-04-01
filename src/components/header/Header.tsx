"use client";

import React from "react";

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

  return <div>header</div>;
};
export default Header;
