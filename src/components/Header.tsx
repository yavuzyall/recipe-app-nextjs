import Image from "next/image";
import React from "react";
import styles from "@/styles/components/Header.module.scss";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className={styles.headerBox}>
        <div className={styles.logoWrapper}>
          <Image
            src="/recipe-logo.webp"
            alt="logo"
            width={75}
            height={75}
          ></Image>
          <h1 className={styles.logoText}>Gourmet Guide</h1>
        </div>
        <div className={styles.menuWrapper}>
          <div className={styles.menuElements}>
            <ul>
              <li>
                <Link href={"/"}>Homepage</Link>
              </li>
              <li>
                <Link href={"/orderPage"}>Place Order</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div className={styles.profileWrapper}>
            <div className={styles.iconWrapper}>
              <LuShoppingCart />
            </div>
            <div className={styles.profileBox}>
              <Image
                src={"/mock_profile.webp"}
                alt="profile_photo"
                width={50}
                height={50}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
