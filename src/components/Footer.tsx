import React from "react";
import styles from "@/styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>© {new Date().getFullYear()} Gourmet Guide</p>
      </div>
    </footer>
  );
};

export default Footer;
