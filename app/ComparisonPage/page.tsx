import React from "react";
import styles from "./style.module.css";
import MotherboardMenu from "./components/MotherboardMenu/MotherboardMenu";
import ProcessorsMenu from "./components/ProcessorsMenu/ProcessorsMenu";
import VideoCardsMenu from "./components/VideoCardsMenu/VideoCardsMenu";
import RAMMenu from "./components/RAMMenu/RAMMenu";
import CoolingMenu from "./components/CoolingMenu/CoolingMenu";
import CaseFanMenu from "./components/CaseFanMenu/CaseFanMenu";
import CaseMenu from "./components/CaseMenu/CaseMenu";
import SSDMMenu from "./components/SSDMMenu/SSDMMenu";
import SSDMenu from "./components/SSDMenu/SSDMenu";
import HDDMenu from "./components/HDDMenu/HDDMenu";
import PowerUnitMenu from "./components/PowerUnitMenu/PowerUnitMenu";
import AssemblyBlock from "./components/AssemblyBlock/AssemblyBlock";
export default function ComparisonPage() {
  let countAssembly = 2;
  return (
    <div
      style={{
        maxWidth: "90rem",
        margin: "0 auto",
        padding: "24px 150px 22px",
      }}
    >
      <h1 className={styles.title}>Сравнение</h1>
      <div className={styles.settings}>
        <p>Показать:</p>
        <button>
          <p>
            <span>Сборки (2)</span>
          </p>
        </button>
        <button>
          <p>
            <span>Процессоры (2)</span>
          </p>
        </button>
      </div>
      <div className={styles.burgerMenu}>
        <AssemblyBlock countAssembly={countAssembly} />
        <MotherboardMenu countAssembly={countAssembly} />
        <ProcessorsMenu countAssembly={countAssembly} />
        <VideoCardsMenu countAssembly={countAssembly} />
        <RAMMenu countAssembly={countAssembly} />
        <CoolingMenu countAssembly={countAssembly} />
        <CaseFanMenu countAssembly={countAssembly} />
        <CaseMenu countAssembly={countAssembly} />
        <SSDMMenu countAssembly={countAssembly} />
        <SSDMenu countAssembly={countAssembly} />
        <HDDMenu countAssembly={countAssembly} />
        <PowerUnitMenu countAssembly={countAssembly} />
      </div>
    </div>
  );
}
