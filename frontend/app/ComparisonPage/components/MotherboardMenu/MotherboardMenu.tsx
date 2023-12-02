"use client";
import React from "react";
import styles from "../style.module.css";
import arrowDown from "../../../../assets/icons/arrow-down.svg";
import cx from "classnames";
import { useState } from "react";
import Image from "next/image";

export default function MotherboardMenu() {
  const [isHide, setIsHide] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.hideButton} onClick={() => setIsHide(!isHide)}>
        <h3 className={styles.title}>Материнская плата</h3>
        <Image
          src={arrowDown}
          alt={"arrow-down"}
          className={cx(isHide ? styles.rotateImg : styles.rotate180Img)}
        />
      </button>
      <div
        className={cx(
          styles.descriptionContainer,
          !isHide ? styles.open : styles.close
        )}
      >
        <p className={styles.descriptionStyle}>Gigabyte B550 GAMING X V2</p>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Магазин</p>
          <p className={styles.descriptionStyle}>Онлайн.Трейд</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Цена</p>
          <p className={styles.descriptionStyle}>7898 руб.</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Socket</p>
          <p className={styles.descriptionStyle}>AM4</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Чип сет</p>
          <p className={styles.descriptionStyle}>AMD B550</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Форм-фактор</p>
          <p className={styles.descriptionStyle}>ATX</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Тип памяти</p>
          <p className={styles.descriptionStyle}>DDR4</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Кол-во слотов памяти</p>
          <p className={styles.descriptionStyle}>4</p>
        </div>
        <div className={styles.hzline} />
      </div>
    </div>
  );
}
