import styles from "./CatalogPopUp.module.css";

import { CatalogPopUpColumn } from "../catalogPopUpColumn/CatalogPopUpColumn";

export function CatalogPopUp() {
  const intelProcessors: string[] = [
    "Intel Core i3",
    "Intel Core i5",
    "Intel Core i7",
    "Intel Core i9",
    "Intel Pentium",
    "Intel Xeon",
  ];
  const amdProcessors = [
    "AMD Ryzen 3",
    "AMD Ryzen 5",
    "AMD Ryzen 7",
    "AMD Ryzen 9",
    "AMD Athlon",
    "AMD Threadripper",
  ];

  const intelMotherBoards = [
    "Intel H610",
    "Intel B660",
    "Intel B760",
    "Intel H670",
    "Intel H770",
    "Intel Z690",
    "Intel Z790",
  ];

  const amdMotherBoards = [
    "AMD A320",
    "AMD A520",
    "AMD B450",
    "AMD B550",
    "AMD B650",
    "AMD X570",
    "AMD X670",
  ];

  const nvidiaGraphicsCards = [
    "GeForce RTX 4000",
    "GeForce RTX 3000",
    "GeForce RTX 2000",
    "GeForce GTX 1600",
    "GeForce GT/GTX 1000",
    "GeForce GT 700",
  ];

  const intelGraphicsCards = ["Arc A700", "Arc A300"];

  const amdGraphicsCards = [
    "Radeon RX 7000",
    "Radeon RX 6000",
    "Radeon RX 500",
  ];

  const ramTypes = ["DDR5", "DDR4", "DDR3L", "DDR3"];

  const powerArray = ["400 Вт", "600 Вт", "800 Вт", "1000 Вт"];

  const powerSertificate = [
    "80 Plus Platinum",
    "80 Plus Gold",
    "80 Plus Bronze",
    "80 Plus",
  ];

  const sizeTypes = ["Full-Tower", "Mid-Tower", "Mini-Tower", "Slim", "SFF"];

  const motherboardTypes = ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"];

  const coldTypes = [
    "Охлаждение процессора",
    "Охлаждение SSD",
    "Корпусные вентиляторы",
    "Термопаста и термопрокладки",
  ];

  const ssd = ["SSD M2", "SSD mSATA", "SSD 2.5″"];

  const hdd = ["HDD 3.5″", "HDD 2.5″"];

  return (
    <div className={styles["catalog-pop-up"]}>
      <div className={styles["block"]}>
        <h2 className={styles["block-title"]}>Процессоры</h2>
        <div className={styles["content"]}>
          <CatalogPopUpColumn array={intelProcessors} />
          <CatalogPopUpColumn array={amdProcessors} />
        </div>
      </div>
      <div className={styles["block"]}>
        <h2 className={styles["block-title"]}>Материнские платы</h2>
        <div className={styles["content"]}>
          <CatalogPopUpColumn array={intelMotherBoards} />
          <CatalogPopUpColumn array={amdMotherBoards} />
        </div>
      </div>
      <div className={styles["block"]}>
        <h2 className={styles["block-title"]}>Видеокарты</h2>
        <div className={styles["content"]}>
          <div className={styles["block-column"]}>
            <h3 className={styles["block-subtitle"]}>Nvidia</h3>
            <CatalogPopUpColumn array={nvidiaGraphicsCards} />
          </div>
          <div className={styles["block-column"]}>
            <h3 className={styles["block-subtitle"]}>AMD</h3>
            <CatalogPopUpColumn array={amdGraphicsCards} />

            <h3 className={styles["block-subtitle"]}>Intel</h3>
            <CatalogPopUpColumn array={intelGraphicsCards} />
          </div>
        </div>
      </div>
      <div className={styles["block"]}>
        <h2 className={styles["block-title"]}>Оперативная память</h2>
        <div className={styles["content"]}>
          <div className={styles["block-column"]}>
            <h3 className={styles["block-subtitle"]}>DIMM</h3>
            <CatalogPopUpColumn array={ramTypes} />
          </div>
          <div className={styles["block-column"]}>
            <h3 className={styles["block-subtitle"]}>SO-DIMM</h3>
            <CatalogPopUpColumn array={ramTypes} />
          </div>
        </div>
      </div>
      <div className={styles["block"]}>
        <h2 className={styles["block-title"]}>Охлаждение</h2>
        <CatalogPopUpColumn array={coldTypes} />
      </div>
      <div className={styles["block"]}>
        <h2 className={styles["block-title"]}>Блоки питания</h2>
        <div className={styles["content"]}>
          <div className={styles["block-column"]}>
            <h3 className={styles["block-subtitle"]}>Мощность от</h3>
            <CatalogPopUpColumn array={powerArray} />
          </div>
          <div className={styles["block-column"]}>
            <h3>Сертификат</h3>
            <CatalogPopUpColumn array={powerSertificate} />
          </div>
        </div>
      </div>
      <div className={styles["block"]}>
        <h2 className={styles["block-title"]}>Корпуса</h2>
        <div className={styles["content"]}>
          <div className={styles["block-column"]}>
            <h3 className={styles["block-subtitle"]}>Типоразмер</h3>
            <CatalogPopUpColumn array={sizeTypes} />
          </div>
          <div className={styles["block-column"]}>
            <h3 className={styles["block-subtitle"]}>Форм-фактор платы</h3>
            <CatalogPopUpColumn array={motherboardTypes} />
          </div>
        </div>
      </div>
      <div className={styles["block"]}>
        <h2 className={styles["block-title"]}>Хранение данных</h2>
        <div className={styles["content"]}>
          <div className={styles["block-column"]}>
            <h3 className={styles["block-subtitle"]}>SSD накопители</h3>
            <CatalogPopUpColumn array={ssd} />
          </div>
          <div className={styles["block-column"]}>
            <h3 className={styles["block-subtitle"]}>Жёсткие диски</h3>
            <CatalogPopUpColumn array={hdd} />
          </div>
        </div>
      </div>
    </div>
  );
}
