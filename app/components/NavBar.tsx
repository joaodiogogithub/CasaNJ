"use client";

import { useState } from "react";
import styles from "./Css/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="Logo" className={styles.logoImage} width={150} />
        </Link>

        {/* Menu Desktop */}
        <nav className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Início
          </Link>

          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Produtos
          </Link>

          <Link href="/kits" onClick={() => setMenuOpen(false)}>
            Kits
          </Link>

          <Link href="/promotions" onClick={() => setMenuOpen(false)}>  
            Promoções
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)}>
            Sobre Nós
          </Link>


        </nav>
        
        <a href="https://wa.me/+5516991282357" target="_blank" className={styles.button}>
          Contato
        </a>

        {/* Hamburger */}
        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}