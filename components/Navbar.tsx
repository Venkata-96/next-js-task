import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
