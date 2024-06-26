import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>
        履歴書
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt='menu-button'
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
          <li>
            <a href='#about'>資格</a>
          </li>
          <li>
            <a href='#experience'>自己PR</a>
          </li>
          <li>
            <a href='#projects'>プロジェクト</a>
          </li>
          <li>
            <a href='#about'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
