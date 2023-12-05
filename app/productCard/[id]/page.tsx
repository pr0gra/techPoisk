import styles from "./style.module.css";
import { ProcessorDescription } from "./components/Descriptions/ProcessorDescription";
import { PriceBlock } from "./components/PriceBlock/PriceBlock";
import { SelectImage } from "./components/SelectImage/SelectImage";
import { Specifications } from "./components/Specifications/Specifications";
import { MotherboardDescription } from "./components/Descriptions/MotherboardDescription";
import { VideoCardDescription } from "./components/Descriptions/VideoCardDescription";
import { RAMDescription } from "./components/Descriptions/RAMDescription";
import { CoolerDescription } from "./components/Descriptions/CoolerDescription";
import { CaseFanDescription } from "./components/Descriptions/CaseFanDescription";
import { LiquidCoolingSystemDescription } from "./components/Descriptions/LiquidCoolingSystemDescription";
import { CaseDescription } from "./components/Descriptions/CaseDescription";
import { HDDDescription } from "./components/Descriptions/HDDDescription";
import { SSDDescription } from "./components/Descriptions/SSDDescription";
import { SSDMDescription } from "./components/Descriptions/SSDMDescription";
import { PowerUnitDescription } from "./components/Descriptions/PowerUnitDescription";

export default function ProductCard() {
  return (
    <div
      style={{
        maxWidth: "90rem",
        margin: "0 auto",
        padding: "24px 150px 22px",
      }}
    >
      <div className={styles.container}>
        <SelectImage />
        <Specifications />
        <PriceBlock />
      </div>
      <ProcessorDescription />
      {/* <MotherboardDescription /> */}
      {/* <VideoCardDescription /> */}
      {/* <RAMDescription /> */}
      {/* <CoolerDescription /> */}
      {/* <CaseFanDescription /> */}
      {/* <LiquidCoolingSystemDescription /> */}
      {/* <CaseDescription /> */}
      {/* <HDDDescription /> */}
      {/* <SSDDescription /> */}
      {/* <SSDMDescription /> */}
      {/* <PowerUnitDescription /> */}
    </div>
  );
}
