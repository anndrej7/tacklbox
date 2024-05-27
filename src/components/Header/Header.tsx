"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState("login");

  const openModal = (e: any) => {
    setShowModal(e.target.innerText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getLinkClass = (path: string) => {
    return pathname === path ? "text-red hover:text-white" : "hover:text-red";
  };

  return (
    <div className="text-white container flex flex-col">
      <div>
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-white text-[32px] font-bold">
              TACKL<span className="text-red">BOX</span>
            </Link>
          </div>
          <nav className="space-x-4 text-lg">
            <Link href="/home" className={getLinkClass("/home/")}>
              Home
            </Link>
            <Link href="/about" className={getLinkClass("/about/")}>
              About
            </Link>
            <Link href="/services" className={getLinkClass("/services/")}>
              Services
            </Link>
            <Link href="/contact" className={getLinkClass("/contact/")}>
              Contact
            </Link>
            <Link href="/login" className={getLinkClass("/login/")}>
              Login
            </Link>
            <Link href="/register" className={getLinkClass("/register/")}>
              Register
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
