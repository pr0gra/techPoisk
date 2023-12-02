"use client";
import React from "react";
import styles from "../style.module.css";
import arrowDown from "../../../../assets/icons/arrow-down.svg";
import cx from "classnames";
import { useState } from "react";
import Image from "next/image";

export default function ProcessorsMenu() {
  const [isHide, setIsHide] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.hideButton} onClick={() => setIsHide(!isHide)}>
        <h3 className={styles.title}>Процессоры</h3>
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
        <p className={styles.descriptionStyle}>AMD Ryzen 5 3600</p>
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
          <p className={styles.shopStyle}>Количество ядер</p>
          <p className={styles.descriptionStyle}>6</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Количество потоков</p>
          <p className={styles.descriptionStyle}>12</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Базовая частота</p>
          <p className={styles.descriptionStyle}>3600 MHz</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Частота в Turbo Boost</p>
          <p className={styles.descriptionStyle}>4200 MHz</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Тип оперативной памяти</p>
          <p className={styles.descriptionStyle}>DDR4</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>TDP</p>
          <p className={styles.descriptionStyle}>65 вт</p>
        </div>
        <div className={styles.hzline} />
      </div>
    </div>
  );
}
