"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

type Props = {};
interface NavItem {
  title: string;
  path: string;
}
const navitems: NavItem[] = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Pricing", path: "/pricing" },
];

const Navbar = (props: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  console.log("state", isSidebarOpen);

  return (
    <main>
      <nav className="flex justify-around items-center px-8 py-6">
        <section className="flex items-center gap-4">
          {/* MENU */}
          <IoMdMenu
            className="text-3xl cursor-pointer md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          />
          {/* LOGO */}
          <Link href={"/"} className="text-4xl ">
            Logo
          </Link>
        </section>

        <section className="flex gap-5 ">
          {/* Navbar For Larger Displays */}
          {navitems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hidden md:block text-2xl font-bold "
            >
              {item.title}
            </Link>
          ))}
        </section>

        {/* Mobile Sidebar */}
        <div
          className={clsx(
            "fixed h-full w-screen md:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSidebarOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white h-screen w-56 absolute left-0 top-0 flex flex-col gap-8 p-10 ">
            <IoCloseSharp
              onClick={() => setIsSidebarOpen(false)}
              className="text-3xl cursor-pointer"
            />

            {navitems.map((item, index) => (
              <Link key={index} href={item.path} className="font-bold">
                {item.title}
              </Link>
            ))}
          </section>
        </div>
        <section className="flex gap-4">
          {/* CART */}
          <IoCart className="text-3xl" />
          {/* AVATAR IMAGE */}
          <Image
            src={"https://i.pravatar.cc/100?img=3"}
            width={"30"}
            height={"30"}
            alt="Avatar"
            className="rounded-full"
          />
        </section>
      </nav>
    </main>
  );
};

export default Navbar;
