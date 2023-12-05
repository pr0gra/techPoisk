"use client";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import setting from "../../../../../assets/icons/setting-2.svg";
export const Sellers = () => {
  return (
    <div className={styles.sellersContainer}>
      <p className={styles.sellersShop}>DNS</p>
      <p className={styles.sellersPrice}>10 000 ₽ </p>
      <button className={styles.sellersConfiguratorButton}>
        <Image src={setting} alt="button configurator" />
      </button>
      <button className={styles.sellersBuyButton}>
        <p>Купить</p>
      </button>
    </div>
  );
};
