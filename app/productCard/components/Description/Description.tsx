"use client";
import React from "react";
import styles from "./style.module.css";
import { DescriptionContainer } from "./DescriptionContainer";
export const Description = () => {
  return (
    <div>
      <p className={styles.blockTitle}>Характеристики</p>
      <div className={styles.horizontalLine} />
      <DescriptionContainer title="Основные" />
    </div>
  );
};
