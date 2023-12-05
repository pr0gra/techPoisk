"use client";
import styles from "./style.module.css";
import heart from "../../../../../assets/icons/heart.svg";
import graph from "../../../../../assets/icons/graph.svg";
import Image from "next/image";
import { Sellers } from "./Sellers";
export const PriceBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.price}>
        <p>
          от <span>8000</span> до <span>8680 ₽</span>
        </p>
        <div className={styles.buttonContainer}>
          <button>
            <Image src={heart} alt="heart" />
          </button>
          <button>
            <Image src={graph} alt="graph" />
          </button>
        </div>
      </div>
      <div>
        <Sellers />
      </div>
    </div>
  );
};
