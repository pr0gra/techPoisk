import { useState } from "react";
import styles from "./SearchComponents.module.css";
import cross from "../../assets/icons/cross.png";
import { SearchProcessors } from "./components/SearchProcessors/SearchProcessors";
import Image from "next/image";
import FiltersPopUp from "./components/FiltersPopUp/FiltersPopUp";
import MultiRangeSlider from "./components/MultiRangeSlider/MultiRangeSlider";

interface Props {
  searchTableName: string;
  setIsSearchTableOpen: any;
}

export function SearchComponents({
  searchTableName,
  setIsSearchTableOpen,
}: Props) {
  const [valueFrom, setValueFrom] = useState(0);
  const [valueTo, setValueTo] = useState(10000);
  const demoBase: any = [
    {
      id: 0,
      type: "Processor",
      manufacturer: {
        id: 0,
        name: "AMD",
        logo: {
          url: "https://example.com/image.png",
          width: 640,
          height: 480,
        },
      },
      offers: [
        {
          id: 0,
          price: 0,
          buyLink: "string",
          shop: {
            id: 0,
            name: "DNS",
            logo: {
              url: "https://example.com/image.png",
              width: 640,
              height: 480,
            },
          },
        },
      ],
      photos: [
        {
          url: "https://example.com/image.png",
          width: 640,
          height: 480,
        },
      ],
      "<other props from DB>": "example value",
    },
    {
      id: 2,
      type: "Processor",
      manufacturer: {
        id: 0,
        name: "AMD",
        logo: {
          url: "https://example.com/image.png",
          width: 640,
          height: 480,
        },
      },
      offers: [
        {
          id: 0,
          price: 0,
          buyLink: "string",
          shop: {
            id: 0,
            name: "DNS",
            logo: {
              url: "https://example.com/image.png",
              width: 640,
              height: 480,
            },
          },
        },
      ],
      photos: [
        {
          url: "https://example.com/image.png",
          width: 640,
          height: 480,
        },
      ],
      "<other props from DB>": "example value",
    },
    {
      id: 3,
      type: "Processor",
      manufacturer: {
        id: 0,
        name: "AMD",
        logo: {
          url: "https://example.com/image.png",
          width: 640,
          height: 480,
        },
      },
      offers: [
        {
          id: 0,
          price: 0,
          buyLink: "string",
          shop: {
            id: 0,
            name: "DNS",
            logo: {
              url: "https://example.com/image.png",
              width: 640,
              height: 480,
            },
          },
        },
      ],
      photos: [
        {
          url: "https://example.com/image.png",
          width: 640,
          height: 480,
        },
      ],
      "<other props from DB>": "example value",
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        onClick={() => {
          setIsSearchTableOpen(false);
        }}
        className={styles["layout"]}
      ></div>
      <div className={styles["modal"]}>
        <div className={styles["name-category"]}>
          <div>
            <h2>Процессор</h2>
            <p>59 товаров</p>
          </div>
          <button
            onClick={() => {
              setIsSearchTableOpen(false);
            }}
          >
            Закрыть <Image src={cross} width={23} height={23} alt={"cross"} />
          </button>
        </div>
        <div className={styles["hzline"]} />
        <div className={styles["modal-container"]}>
          <aside>
            <h3>Фильтры</h3>

            <div className={styles["input-container"]}>
              <input type="checkbox" name="сompatible" id="idCompatible" />
              <p>Совместимо</p>
            </div>
            <div className={styles["filters-block"]}>
              <FiltersPopUp title={"Цена"}>
                <div className={styles["price-blocks-container"]}>
                  <div>
                    <p>От</p>
                    <input type="text" placeholder={`${valueFrom}`} />
                  </div>
                  <div>
                    <p>До</p>
                    <input type="text" placeholder={`${valueTo}`} />
                  </div>
                </div>
                <MultiRangeSlider min={valueFrom} max={valueTo} />
              </FiltersPopUp>
              <FiltersPopUp title={"Производитель"}>
                <div className={styles["input-container"]}>
                  <input
                    type="checkbox"
                    name="manufacturer"
                    id="idЬanufacturer"
                  />
                  <p>
                    AMD <span>(49)</span>
                  </p>
                </div>
                <div className={styles["input-container"]}>
                  <input
                    type="checkbox"
                    name="manufacturer"
                    id="idЬanufacturer"
                  />
                  <p>
                    Intel <span>(113)</span>
                  </p>
                </div>
              </FiltersPopUp>
              <FiltersPopUp title={"Socket"}>
                <div className={styles["input-container"]}>
                  <input
                    type="checkbox"
                    name="manufacturer"
                    id="idЬanufacturer"
                  />
                  <p>
                    Intel <span>(113)</span>
                  </p>
                </div>
              </FiltersPopUp>
              <FiltersPopUp title={"Семейство процессоров"}>
                <div className={styles["input-container"]}>
                  <input
                    type="checkbox"
                    name="manufacturer"
                    id="idЬanufacturer"
                  />
                  <p>
                    Intel <span>(113)</span>
                  </p>
                </div>
              </FiltersPopUp>
            </div>
          </aside>
          <div>
            {searchTableName === "processors" && (
              <SearchProcessors demoBase={demoBase} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
