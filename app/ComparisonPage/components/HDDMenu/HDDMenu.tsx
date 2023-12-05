"use client";
import React from "react";
import styles from "../style.module.css";
import arrowDown from "../../../../assets/icons/arrow-down.svg";
import cx from "classnames";
import { useState } from "react";
import Image from "next/image";
interface props {
  countAssembly: number;
}
export default function HDDMenu({ countAssembly }: props) {
  const [isHide, setIsHide] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.hideButton} onClick={() => setIsHide(!isHide)}>
        <h3 className={styles.title}>HDD 3.5</h3>
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
        <div className={styles.rowContainer}>
          <p className={styles.descriptionStyle} style={{ flex: 1 }}>
            2Tb SATA-III Seagate Barracuda
          </p>

          <p className={styles.descriptionStyle} style={{ flex: 1 }}>
            2Tb SATA-III Seagate Barracuda
          </p>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div className={styles.rowContainer}>
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
          <div className={styles.rowContainer}>
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
          <div className={styles.rowContainer}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Объем накопителя</p>
              <p className={styles.descriptionStyle}>2 000 Гб</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Объем накопителя</p>
              <p className={styles.descriptionStyle}>2 000 Гб</p>
            </div>
          </div>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div className={styles.rowContainer}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Интерфейс</p>
              <p className={styles.descriptionStyle}>SATA-III</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Интерфейс</p>
              <p className={styles.descriptionStyle}>SATA-III</p>
            </div>
          </div>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div className={styles.rowContainer}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Скорость вращения шпинделя</p>
              <p className={styles.descriptionStyle}>7200 об/мин</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Скорость вращения шпинделя</p>
              <p className={styles.descriptionStyle}>7200 об/мин</p>
            </div>
          </div>
        </div>
        <div className={styles.hzline} />
        <div className={styles.descriptionContainer}>
          <div className={styles.rowContainer}>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Объём буферной памяти</p>
              <p className={styles.descriptionStyle}>256 Мб</p>
            </div>
            <div className={styles.descriptionSecondContainer}>
              <p className={styles.shopStyle}>Объём буферной памяти</p>
              <p className={styles.descriptionStyle}>256 Мб</p>
            </div>
          </div>
        </div>

        <div className={styles.hzline} />
      </div>
    </div>
  );
}
