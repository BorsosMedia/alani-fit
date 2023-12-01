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
      <Navbar onMenuOpenChange={setIsMenuOpen} className="navbar">
        <NavbarContent
          className="hidden w-full justify-between gap-4 sm:flex"
          justify="between"
        >
          <NavbarItem>
            <NavbarBrand>
              <Image src={logo} alt="logo" className="h-auto w-24" />
            </NavbarBrand>
          </NavbarItem>
          <NavbarItem>
            <Link href="#coaching" className="text-white">
              Coaching Plans
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#one-time" className="text-white">
              One Time Plans
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#contest-prep" className="text-white">
              Contest Prep Plans
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#about" className="text-white">
              About Me
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent>
          <NavbarBrand>
            <Image src={logo} alt="logo" className="h-auto w-24" />
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
        <NavbarMenu className="bg-black/60">
          <NavbarMenuItem>
            <Link href="#coaching" className="w-full text-white" size="lg">
              Coaching Plans
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#one-time" className="w-full text-white" size="lg">
              One Time Plans
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#contest-prep" className="w-full text-white" size="lg">
              Contest Prep Plans
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#about" className="w-full text-white" size="lg">
              About Me
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </NextUIProvider>
  );
};

export default BurgerMenu;
