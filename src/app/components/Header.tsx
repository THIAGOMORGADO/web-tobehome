"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-primary text-white shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-center items-center">
        <div className="flex justify-between items-center w-full max-w-6xl">
          <div className="text-2xl font-bold">To Be Home</div>
          <div className="hidden md:flex items-center justify-between flex-grow ml-6">
            <div className="flex items-center justify-center">
              <Link href="#" className="text-white hover:text-gray-300 mx-4">
                Início
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 mx-4">
                Catálogos
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 mx-4">
                Serviços
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 mx-4">
                Contato
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="text-black border-black hover:bg-black hover:text-white"
              >
                Login
              </Button>
              <Button variant="secondary" className="text-black">
                Reservar Agora
              </Button>
            </div>
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2 px-5">
            <Link href="#" className="text-white hover:text-gray-300 py-2">
              Início
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 py-2">
              Catálogos
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 py-2">
              Serviços
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 py-2">
              Contato
            </Link>
            <Button
              variant="outline"
              className="mt-2 text-black border-black hover:bg-black hover:text-white"
            >
              Login
            </Button>
            <Button variant="secondary" className="mt-2 text-black">
              Reservar Agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
