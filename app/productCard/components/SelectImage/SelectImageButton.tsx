"use client";
import cx from "classnames";
import styles from "./style.module.css";
import { ReactNode } from "react";
interface Button {
  imageIndex: number;
  setImageIndex(index: number): void;
  idElement: number;
  children: ReactNode;
}
export const SelectImageButton = ({
  imageIndex,
  setImageIndex,
  idElement,
  children,
}: Button) => {
  return (
    <li
      className={cx(
        styles.buttonContainer,
        imageIndex !== idElement && styles.marginLeft
      )}
    >
      {imageIndex === idElement && <div className={styles.activeElement} />}
      <button
        className={styles.imageButton}
        onClick={() => setImageIndex(idElement)}
      >
        {children}
      </button>
    </li>
  );
};
