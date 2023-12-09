import React from "react";
import AssemblingComponent from "./components/AssemblingComponent/AssemblingComponent";
import styles from "./styles.module.css";
export default function page() {
  return (
    <div
      style={{
        maxWidth: "90rem",
        margin: "0 auto",
        padding: "24px 150px 22px",
      }}
    >
      <AssemblingComponent />
      <AssemblingComponent />
    </div>
  );
}
