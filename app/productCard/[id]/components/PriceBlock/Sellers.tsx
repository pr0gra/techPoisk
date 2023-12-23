"use client";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import setting from "../../../../../assets/icons/setting-2.svg";
interface Settings {
  price: number;
  store: {
    id: number;
    logoHeight: null;
    logoUrl: null;
    logoWidth: null;
    name: "Пятёрочка";
  };
}
export const Sellers = ({ price = 0, store }: Settings) => {
  return (
    <div className={styles.sellersContainer}>
      <p className={styles.sellersShop}>{store.name}</p>
      <p className={styles.sellersPrice}>{price} </p>
      <div>
        <button className={styles.sellersConfiguratorButton}>
          <Image src={setting} alt="button configurator" />
        </button>
        <button className={styles.sellersBuyButton}>
          <p>Купить</p>
        </button>
      </div>
    </div>
  );
};
