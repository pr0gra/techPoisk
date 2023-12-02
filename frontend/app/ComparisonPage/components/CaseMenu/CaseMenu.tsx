"use client";
import React from "react";
import styles from "../style.module.css";
import arrowDown from "../../../../assets/icons/arrow-down.svg";
import cx from "classnames";
import { useState } from "react";
import Image from "next/image";

export default function CaseMenu() {
  const [isHide, setIsHide] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.hideButton} onClick={() => setIsHide(!isHide)}>
        <h3 className={styles.title}>Корпус</h3>
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
        <p className={styles.descriptionStyle}>Cougar Duoface RGB</p>
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
          <p className={styles.shopStyle}>Форм-фактор</p>
          <p className={styles.descriptionStyle}>Mid-Tower</p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Форм-фактор мат. платы</p>
          <p className={styles.descriptionStyle}>
            E-ATX, Micro-ATX, Mini-ITX, SSI-CEB, Standard-ATX
          </p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <p className={styles.shopStyle}>Материал окна</p>
          <p className={styles.descriptionStyle}>Закаленное стекло</p>
        </div>
        <div className={styles.hzline} />
      </div>
    </div>
  );
}
