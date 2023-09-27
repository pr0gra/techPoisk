import Image from "next/image";
import styles from "./ConfiguratorTable.module.css";

import motherIcon from "../../assets/icons/mother.svg";
import processorIcon from "../../assets/icons/processor.svg";
import videoCardIcon from "../../assets/icons/video-card.svg";
import ramIcom from "../../assets/icons/ram.svg";
import coolingIcon from "../../assets/icons/cooling.svg";
import corpusIcon from "../../assets/icons/corpus.svg";
import memoryIcon from "../../assets/icons/memory.svg";
import powerIcon from "../../assets/icons/power.svg";

import favouritesLight from "../../assets/icons/favourites-light.svg";
import comparisonLight from "../../assets/icons/comparison-light.svg";
import { useState } from "react";

export function ConfiguratorTable({ searchByCPU }) {
  return (
    <div className={styles["configurator-table-container"]}>
      <h2 className={styles["main-title"]}>Системный блок</h2>
      <div className={styles["main-part"]}>
        <div className={styles["configurator-table"]}>
          <div className={styles["row"]}>
            <div className={styles["row-title-container"]}>
              <h2 className={styles["row-title"]}>Материнская плата</h2>
              <Image
                className={styles["row-product-image"]}
                src={motherIcon}
                alt="icon"
              />
            </div>
            <div className={styles["row-product-container"]}>
              <div className={styles["row-product-adding-part"]}>
                <p className={styles["row-product-count-text"]}>товара(ов)</p>
                <p className={styles["row-product-adding-text"]}>
                  Добавить
                  <span className={styles["row-product-adding-text-plus"]}>
                    +
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles["row"]} onClick={searchByCPU}>
            <div className={styles["row-title-container"]}>
              <h2 className={styles["row-title"]}>Процессор</h2>
              <Image
                className={styles["row-product-image"]}
                src={processorIcon}
                alt="icon"
              />
            </div>
            <div className={styles["row-product-container"]}>
              <div className={styles["row-product-adding-part"]}>
                <p className={styles["row-product-count-text"]}>товара(ов)</p>
                <p className={styles["row-product-adding-text"]}>
                  Добавить
                  <span className={styles["row-product-adding-text-plus"]}>
                    +
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles["row"]}>
            <div className={styles["row-title-container"]}>
              <h2 className={styles["row-title"]}>Видеокарта</h2>
              <Image
                className={styles["row-product-image"]}
                src={videoCardIcon}
                alt="icon"
              />
            </div>
            <div className={styles["row-product-container"]}>
              <div className={styles["row-product-adding-part"]}>
                <p className={styles["row-product-count-text"]}>товара(ов)</p>
                <p className={styles["row-product-adding-text"]}>
                  Добавить
                  <span className={styles["row-product-adding-text-plus"]}>
                    +
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles["row"]}>
            <div className={styles["row-title-container"]}>
              <h2 className={styles["row-title"]}>Оперативная память</h2>
              <Image
                className={styles["row-product-image"]}
                src={ramIcom}
                alt="icon"
              />
            </div>
            <div className={styles["row-product-container"]}>
              <div className={styles["row-product-adding-part"]}>
                <p className={styles["row-product-count-text"]}>товара(ов)</p>
                <p className={styles["row-product-adding-text"]}>
                  Добавить
                  <span className={styles["row-product-adding-text-plus"]}>
                    +
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles["row"]}>
            <div className={styles["row-title-container"]}>
              <h2 className={styles["row-title"]}>Охлаждение</h2>
              <Image
                className={styles["row-product-image"]}
                src={coolingIcon}
                alt="icon"
              />
            </div>
            <div className={styles["row-product-container"]}>
              <div className={styles["row-product-adding-part"]}>
                <p className={styles["row-product-count-text"]}>товара(ов)</p>
                <p className={styles["row-product-adding-text"]}>
                  Добавить
                  <span className={styles["row-product-adding-text-plus"]}>
                    +
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles["row"]}>
            <div className={styles["row-title-container"]}>
              <h2 className={styles["row-title"]}>Корпус</h2>
              <Image
                className={styles["row-product-image"]}
                src={corpusIcon}
                alt="icon"
              />
            </div>
            <div className={styles["row-product-container"]}>
              <div className={styles["row-product-adding-part"]}>
                <p className={styles["row-product-count-text"]}>товара(ов)</p>
                <p className={styles["row-product-adding-text"]}>
                  Добавить
                  <span className={styles["row-product-adding-text-plus"]}>
                    +
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles["row"]}>
            <div className={styles["row-title-container"]}>
              <h2 className={styles["row-title"]}>Хранение данных</h2>
              <Image
                className={styles["row-product-image"]}
                src={memoryIcon}
                alt="icon"
              />
            </div>
            <div className={styles["row-product-container"]}>
              <div className={styles["row-product-adding-part"]}>
                <p className={styles["row-product-count-text"]}>товара(ов)</p>
                <p className={styles["row-product-adding-text"]}>
                  Добавить
                  <span className={styles["row-product-adding-text-plus"]}>
                    +
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles["row"]}>
            <div className={styles["row-title-container"]}>
              <h2 className={styles["row-title"]}>Блок питания</h2>
              <Image
                className={styles["row-product-image"]}
                src={powerIcon}
                alt="icon"
              />
            </div>
            <div className={styles["row-product-container"]}>
              <div className={styles["row-product-adding-part"]}>
                <p className={styles["row-product-count-text"]}>товара(ов)</p>
                <p className={styles["row-product-adding-text"]}>
                  Добавить
                  <span className={styles["row-product-adding-text-plus"]}>
                    +
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["control-panel"]}>
          <button className={styles["buying-button"]}>
            <p className={styles["buying-button-text"]}>Купить сборку </p>
            <p className={styles["buying-button-cost"]}>0₽</p>
          </button>
          <div className={styles["save-config-container"]}>
            <h2>Сохранить конфигурацию</h2>
            <button className={styles["control-panel-button"]}>
              <Image src={favouritesLight} alt="icon" />
            </button>
          </div>
          <div className={styles["add-to-config-container"]}>
            <h2>Добавить в сравнение</h2>
            <button className={styles["control-panel-button"]}>
              <Image src={comparisonLight} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
