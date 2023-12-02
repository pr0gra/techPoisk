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
export default function ComparisonPage() {
  return (
    <>
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
        <MotherboardMenu />
        <ProcessorsMenu />
        <VideoCardsMenu />
        <RAMMenu />
        <CoolingMenu />
        <CaseFanMenu />
        <CaseMenu />
        <SSDMMenu />
        <SSDMenu />
        <HDDMenu />
        <PowerUnitMenu />
      </div>
    </>
  );
}
