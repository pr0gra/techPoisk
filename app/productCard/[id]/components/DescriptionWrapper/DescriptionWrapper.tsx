"use client";
import React, { ReactNode } from "react";
import { ProcessorDescription } from "../Descriptions/ProcessorDescription";
import { MotherboardDescription } from "../../components/Descriptions/MotherboardDescription";
import { VideoCardDescription } from "../../components/Descriptions/VideoCardDescription";
import { RAMDescription } from "../../components/Descriptions/RAMDescription";
import { CoolerDescription } from "../../components/Descriptions/CoolerDescription";
import { CaseFanDescription } from "../../components/Descriptions/CaseFanDescription";
import { LiquidCoolingSystemDescription } from "../../components/Descriptions/LiquidCoolingSystemDescription";
import { CaseDescription } from "../../components/Descriptions/CaseDescription";
import { HDDDescription } from "../../components/Descriptions/HDDDescription";
import { SSDDescription } from "../../components/Descriptions/SSDDescription";
import { SSDMDescription } from "../../components/Descriptions/SSDMDescription";
import { PowerUnitDescription } from "../../components/Descriptions/PowerUnitDescription";
import { useEffect, useState, FC } from "react";
import { usePathname } from "next/navigation";
import styles from "../../style.module.css";
import ky from "ky";
import { SelectImage } from "../SelectImage/SelectImage";
import { Specifications } from "../Specifications/Specifications";
import { PriceBlock } from "../PriceBlock/PriceBlock";

interface IStore {
  id: number;
  name: string;
  logoUrl: string | null;
  logoWidth: number | null;
  logoHeight: number | null;
}

interface IOffer {
  price: number;
  store: IStore;
}

interface IData {
  id: number;
  detail: string | null;
  properties: {
    [key: string]: boolean;
  };
  offers: IOffer[];
  componentType: string;
  name: string;
  manufacturer: string | null;
}

interface IDescriptionBlock {
  [key: string]: any;
  case_fan: JSX.Element;
  motherboard: JSX.Element;
  processor: JSX.Element;
  graphicsCard: JSX.Element;
  ram: JSX.Element;
  cooler: JSX.Element;
  liquidCooling: JSX.Element;
  case: JSX.Element;
  hdd: JSX.Element;
  ssd: JSX.Element;
  ssdm2: JSX.Element;
  powerSupply: JSX.Element;
}

export default function DescriptionWrapper() {
  const [data, setData] = useState<IData>({} as IData);
  const [loading, setLoading] = useState(false);
  const params = usePathname();
  console.log(params);
  const productId = params;
  const digits = productId.split("/")[2];
  async function getProductData() {
    setLoading(true);
    try {
      const respone = await fetch(
        `http://localhost:8000/components/${digits}/`,
        {
          headers: {
            mode: "no-cors",
          },
        }
      );
      const data = await respone.json();
      console.log(data);
      setData(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      return data;
    } catch (e) {
      console.log(e);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }
  useEffect(() => {
    getProductData();
    console.log(data);
  }, []);
  function getDescription(componentType: string, data: any) {
    const descriptionBlocks: IDescriptionBlock = {
      case_fan: <CaseFanDescription props={data} />,
      motherboard: <MotherboardDescription props={data} />,
      processor: <ProcessorDescription props={data} />,
      graphicsCard: <VideoCardDescription props={data} />,
      ram: <RAMDescription props={data} />,
      cooler: <CoolerDescription props={data} />,
      liquidCooling: <LiquidCoolingSystemDescription props={data} />,
      case: <CaseDescription props={data} />,
      hdd: <HDDDescription props={data} />,
      ssd: <SSDDescription props={data} />,
      ssdm2: <SSDMDescription props={data} />,
      powerSupply: <PowerUnitDescription props={data} />,
    };
    return descriptionBlocks[componentType];
  }
  console.log(loading);
  return (
    <>
      {loading && <h2>Загрузка...</h2>}
      {!loading && (
        <div className={styles.container}>
          <SelectImage />
          <Specifications />
          <PriceBlock offers={data?.offers} />
        </div>
      )}
      {!loading && data.id && getDescription(data?.componentType, data)}
      {!loading && data.detail && <h2>{data.detail}</h2>}
    </>
  );
}
