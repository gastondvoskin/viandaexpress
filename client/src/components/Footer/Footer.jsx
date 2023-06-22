import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>
        © 2023{" "}
        <Link to="/">
          <a className={styles.underline}>frozen meals™</a>
        </Link>
        . All Rights Reserved.
      </span>
      <ul className={styles.links}>
        <li>
          <Link to="/">
            <a className={styles.footerLink}>About</a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a className={styles.footerLink}>Contact</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
