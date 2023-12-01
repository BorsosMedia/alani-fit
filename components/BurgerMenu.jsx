"use client";

import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NextUIProvider,
} from "@nextui-org/react";
import Image from "next/image";

import logo from "../public/assets/logo.png";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUIProvider>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="navbar"
        maxWidth="full"
      >
        <NavbarContent
          className="hidden w-full justify-evenly gap-4 sm:flex"
          justify="evenly"
        >
          <NavbarItem>
            <NavbarBrand>
              <Image src={logo} alt="logo" className="logo" />
            </NavbarBrand>
          </NavbarItem>
          <NavbarItem>
            <Link href="#coaching" className="nav-item">
              Coaching Plans
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#one-time" className="nav-item">
              One Time Plans
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#contest-prep" className="nav-item">
              Contest Prep Plans
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#about" className="nav-item">
              About Me
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent>
          <NavbarBrand>
            <Image src={logo} alt="logo" className="logo" />
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
        <NavbarMenu className="bg-black/60">
          <NavbarMenuItem>
            <Link href="#coaching" className="nav-item" size="lg">
              Coaching Plans
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#one-time" className="nav-item" size="lg">
              One Time Plans
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#contest-prep" className="nav-item" size="lg">
              Contest Prep Plans
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#about" className="nav-item" size="lg">
              About Me
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </NextUIProvider>
  );
};

export default BurgerMenu;
