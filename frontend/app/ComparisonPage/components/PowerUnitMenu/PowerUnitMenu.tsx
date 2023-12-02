"use client";
import React from "react";
import styles from "../style.module.css";
import arrowDown from "../../../../assets/icons/arrow-down.svg";
import cx from "classnames";
import { useState } from "react";
import Image from "next/image";

export default function PowerUnitMenu() {
  const [isHide, setIsHide] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.hideButton} onClick={() => setIsHide(!isHide)}>
        <h3 className={styles.title}>Блок питания</h3>
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
        <p className={styles.descriptionStyle}>750W Be Quiet System Power 10</p>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Магазин</p>
          <p className={styles.descriptionStyle}>Онлайн.Трейд</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Цена</p>
          <p className={styles.descriptionStyle}>7898 руб </p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Сертификат</p>
          <p className={styles.descriptionStyle}>80+ Bronze</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Мощность</p>
          <p className={styles.descriptionStyle}>750 Вт</p>
        </div>
      </div>
    </div>
  );
}
