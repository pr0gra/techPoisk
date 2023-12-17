"use client";
import styles from "./style.module.css";
import heart from "../../../../../assets/icons/heart.svg";
import graph from "../../../../../assets/icons/graph.svg";
import Image from "next/image";
import { Sellers } from "./Sellers";
interface Sellers {
  offers: [
    {
      id: number;
      name: string;
      logoUrl: string | null;
      logoWidth: number | null;
      logoHeight: number | null;
    }
  ];
}
export const PriceBlock = ({ offers }: any) => {
  console.log(offers);
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
      {offers?.map((e: any) => {
        return (
          <>
            <div>
              <Sellers price={e.price} store={e.store} />
            </div>
          </>
        );
      })}
    </div>
  );
};
