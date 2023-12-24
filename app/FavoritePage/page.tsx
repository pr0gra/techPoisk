import React from "react";

import FavoriteAssemblingComponent from "./components/FavoriteAssemblingComponent/FavoriteAssemblingComponent";
import styles from "./styles.module.css";
import FavoriteFilterComponent from "./components/FavoriteFilterComponent/FavoriteFilterComponent";
export default function page() {
  return (
    <div
      style={{
        maxWidth: "90rem",
        margin: "0 auto",
        padding: "24px 150px 22px",
      }}
    >
      <div className={styles["hz-line"]} />
      <FavoriteFilterComponent />
      <div className={styles["hz-line"]} />
      <FavoriteAssemblingComponent />
      <FavoriteAssemblingComponent />
    </div>
  );
}
