"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import setting from "../../../../assets/icons/setting.svg";
import heart from "../../../../assets/icons/heart.svg";
import testImage from "../../../../assets/images/testImage.png";
export default function FavoriteAssemblingComponent() {
  return (
    <div className={styles["container"]}>
      <div className={styles["second-container"]}>
        <input type="checkbox" name="assembling" />
        <Image src={testImage} width={117} height={117} alt={"picture"} />

        <div className={styles["description-container"]}>
          <div className={styles["description"]}>
            <h2>ASUS ROG STRIX GeForce GTX 1060 Advanced</h2>
            <p>
              PCI-E 3.0, 6 ГБ GDDR5, 192 бит, 1518 МГц - 1759 МГц, HDMI (2 шт),
              DisplayPort (2 шт), DVI-D
            </p>
          </div>

          <p className={styles["price"]}>7449 ₽ - 13000 ₽</p>
        </div>
      </div>
      <div className={styles["buttons-container"]}>
        <button>Цены</button>
        <button>
          <Image src={setting} width={35} height={35} alt={"settings"} />
        </button>
        <button>
          <svg
            width="35"
            height="35"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.25 14.9584C5.91848 14.9584 5.60054 15.0897 5.36612 15.3235C5.1317 15.5573 5 15.8744 5 16.205V26.1773C5 26.5079 5.1317 26.8249 5.36612 27.0587C5.60054 27.2925 5.91848 27.4238 6.25 27.4238C6.58152 27.4238 6.89946 27.2925 7.13388 27.0587C7.3683 26.8249 7.5 26.5079 7.5 26.1773V16.205C7.5 15.8744 7.3683 15.5573 7.13388 15.3235C6.89946 15.0897 6.58152 14.9584 6.25 14.9584ZM12.5 2.49304C12.1685 2.49304 11.8505 2.62437 11.6161 2.85814C11.3817 3.09192 11.25 3.40898 11.25 3.73958V26.1773C11.25 26.5079 11.3817 26.8249 11.6161 27.0587C11.8505 27.2925 12.1685 27.4238 12.5 27.4238C12.8315 27.4238 13.1495 27.2925 13.3839 27.0587C13.6183 26.8249 13.75 26.5079 13.75 26.1773V3.73958C13.75 3.40898 13.6183 3.09192 13.3839 2.85814C13.1495 2.62437 12.8315 2.49304 12.5 2.49304ZM25 19.9446C24.6685 19.9446 24.3505 20.0759 24.1161 20.3097C23.8817 20.5434 23.75 20.8605 23.75 21.1911V26.1773C23.75 26.5079 23.8817 26.8249 24.1161 27.0587C24.3505 27.2925 24.6685 27.4238 25 27.4238C25.3315 27.4238 25.6495 27.2925 25.8839 27.0587C26.1183 26.8249 26.25 26.5079 26.25 26.1773V21.1911C26.25 20.8605 26.1183 20.5434 25.8839 20.3097C25.6495 20.0759 25.3315 19.9446 25 19.9446ZM18.75 9.97227C18.4185 9.97227 18.1005 10.1036 17.8661 10.3374C17.6317 10.5711 17.5 10.8882 17.5 11.2188V26.1773C17.5 26.5079 17.6317 26.8249 17.8661 27.0587C18.1005 27.2925 18.4185 27.4238 18.75 27.4238C19.0815 27.4238 19.3995 27.2925 19.6339 27.0587C19.8683 26.8249 20 26.5079 20 26.1773V11.2188C20 10.8882 19.8683 10.5711 19.6339 10.3374C19.3995 10.1036 19.0815 9.97227 18.75 9.97227Z"
              fill="white"
            />
          </svg>
        </button>
        <button className={styles["heart-button"]}>
          <Image src={heart} width={35} height={35} alt={"settings"} />
        </button>
      </div>
    </div>
  );
}