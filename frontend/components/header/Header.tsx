"use client";

import styles from "./Header.module.css";
import { useState, useCallback } from "react";

import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/icons/tech-poisk-logo-main.svg";
import setting from "../../assets/icons/setting.svg";
import comparison from "../../assets/icons/comparison.svg";
import favorites from "../../assets/icons/favorites.svg";
import catalog from "../../assets/icons/catalog.svg";
import search from "../../assets/icons/search.svg";
import { CatalogPopUp } from "../catalogPopUp/CatalogPopUp";

export function Header() {
  const [isCatalogPopUpActive, setIsCatalogPopUpActive] = useState(false);
  const [mouseOnCatalog, setMouseOnCatalog] = useState(false);

  return (
    <header className={styles["header"]}>
      <div className={styles["nav-part"]}>
        <div className={styles["logo-container"]}>
          <Image className={styles["img"]} src={logo} alt="" />
        </div>
        <div className={styles["navigation"]}>
          <div className={styles["links"]}>
            <Link className={styles["link"]} href="/">
              Гид по сборке
            </Link>
            <Link className={styles["link"]} href="/">
              Сборки пользователей
            </Link>
          </div>
          <Link href={'/'} className={styles["configurator-button"]}>
            <Image src={setting} alt="" />
            Конфигуратор
          </Link>
        </div>
      </div>
      <div className={styles["search-part"]}>
        <div className={styles["search-container"]}>
          <div
            className={styles["catalog-button-container"]}
            onClick={() => setIsCatalogPopUpActive((prev) => !prev)}
          >
            <button
              className={styles["catalog-button"]}
            >
              Каталог
            </button>
          </div>
          <form className={styles["form"]}>
            <input
              className={styles["search-input"]}
              placeholder="Поиск по сайту"
              type="text"
            />
            <button className={styles["search-button"]}>
              <Image src={search} alt="" />
            </button>
          </form>
        </div>
        <div className={styles["links-container"]}>
          <Link className={styles["search-part-link"]} href="/">
            <Image src={comparison} alt="" />
            Сравнение
          </Link>
          <Link className={styles["search-part-link"]} href="/">
            <Image src={favorites} alt="" />
            Избранное
          </Link>
        </div>
        {isCatalogPopUpActive && <CatalogPopUp /> } 
      </div>

    </header>
  );
}
