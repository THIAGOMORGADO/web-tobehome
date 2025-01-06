"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Hotel Paraíso</div>
          <div className="hidden md:flex items-center justify-between flex-grow ml-6">
            <div className="flex items-center justify-center">
              <Link
                href="#"
                className="text-primary-foreground hover:text-white mx-4"
              >
                Início
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-white mx-4"
              >
                Catálogos
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-white mx-4"
              >
                Serviços
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-white mx-4"
              >
                Contato
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Login
              </Button>
              <Button variant="secondary">Reservar Agora</Button>
            </div>
          </div>
          <button
            className="md:hidden text-primary-foreground"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-primary-foreground hover:text-white py-2"
              >
                Início
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-white py-2"
              >
                Catálogos
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-white py-2"
              >
                Serviços
              </Link>
              <Link
                href="#"
                className="text-primary-foreground hover:text-white py-2"
              >
                Contato
              </Link>
              <Button
                variant="outline"
                className="mt-2 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Login
              </Button>
              <Button variant="secondary" className="mt-2">
                Reservar Agora
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
