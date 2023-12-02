"use client";
import React from "react";
import styles from "../style.module.css";
import arrowDown from "../../../../assets/icons/arrow-down.svg";
import cx from "classnames";
import { useState } from "react";
import Image from "next/image";

export default function RAMMenu() {
  const [isHide, setIsHide] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.hideButton} onClick={() => setIsHide(!isHide)}>
        <h3 className={styles.title}>Оперативная память</h3>
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
        <div style={{ display: "flex" }}>
          <p className={styles.descriptionStyle} style={{ flex: 1 }}>
            Netac Shadow II
          </p>
          <p className={styles.descriptionStyle} style={{ flex: 1 }}>
            Netac Shadow II
          </p>
        </div>

        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div style={{ display: "flex" }}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Магазин</p>
              <p className={styles.descriptionStyle}>Онлайн.Трейд</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Магазин</p>
              <p className={styles.descriptionStyle}>Онлайн.Трейд</p>
            </div>
          </div>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div style={{ display: "flex" }}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Цена</p>
              <p className={styles.descriptionStyle}>7898 руб.</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Цена</p>
              <p className={styles.descriptionStyle}>7898 руб.</p>
            </div>
          </div>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div style={{ display: "flex" }}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Тип памяти</p>
              <p className={styles.descriptionStyle}>DDR4</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Тип памяти</p>
              <p className={styles.descriptionStyle}>DDR4</p>
            </div>
          </div>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div style={{ display: "flex" }}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Объём комплекта</p>
              <p className={styles.descriptionStyle}>32 Гб</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Объём комплекта</p>
              <p className={styles.descriptionStyle}>32 Гб</p>
            </div>
          </div>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div style={{ display: "flex" }}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Объём одного модуля</p>
              <p className={styles.descriptionStyle}>16 Гб</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Объём одного модуля</p>
              <p className={styles.descriptionStyle}>16 Гб</p>
            </div>
          </div>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div style={{ display: "flex" }}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Количество модулей</p>
              <p className={styles.descriptionStyle}>2</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Количество модулей</p>
              <p className={styles.descriptionStyle}>2</p>
            </div>
          </div>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div style={{ display: "flex" }}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Тактовая частота</p>
              <p className={styles.descriptionStyle}>3200 MHz</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Тактовая частота</p>
              <p className={styles.descriptionStyle}>3200 MHz</p>
            </div>
          </div>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div style={{ display: "flex" }}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>CAS Latency (CL)</p>
              <p className={styles.descriptionStyle}>16</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>CAS Latency (CL)</p>
              <p className={styles.descriptionStyle}>16</p>
            </div>
          </div>
        </div>
        <div className={styles.hzline} />
      </div>
    </div>
  );
}
