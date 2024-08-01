'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../MenuItem';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex flex-row justify-between w-full h-24 bg-cyan-950">
      <button
        className="lg:hidden text-white p-2 absolute top-4 right-4 z-50"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
      </button>

      <div className="hidden lg:flex flex-col items-center lg:flex-row gap-16 justify-center flex-grow m-10">
        <MenuItem href="#" title="Home" />
        <MenuItem href="#" title="Quem somos" />
        <MenuItem href="#" title="Especialidades" />
        <MenuItem href="#" title="Contato" />
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-cyan-950 lg:hidden z-40"
          onClick={toggleMenu}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <MenuItem href="#" title="Home" />
            <MenuItem href="#" title="Quem somos" />
            <MenuItem href="#" title="Especialidades" />
            <MenuItem href="#" title="Contato" />
          </div>
        </div>
      )}

      <button className="flex items-center bg-customGold py-4 px-6 gap-3 h-auto">
        <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8 text-white" />
        <p className="hidden lg:flex text-white text-center text-lg font-bold uppercase">
          Fale conosco
        </p>
      </button>
    </header>
  );
}
