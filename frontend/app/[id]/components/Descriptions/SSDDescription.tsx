"use client";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";
export const SSDDescription = () => {
  const params = usePathname();
  console.log(params);
  return (
    <>
      <h1 className={styles.title}>Характеристики</h1>
      <div className={styles.hline} />
      <div className={styles.DescriptionContainer}>
        <div className={styles.DescriptionSecondContainer}>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Основные</h2>
            <div className={styles.Description}>
              <div className={styles.DescriptionColumn}>
                <div className={styles.DescriptionRow}>
                  <h3>Тип</h3>
                  <p>
                    <span>2.5" SATA накопитель</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Код производителя</h3>
                  <p>
                    <span>[MZ-77E1T0BW/EU]</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Объем накопителя</h3>
                  <p>
                    <span>1000 ГБ</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Разъём подключения</h3>
                  <p>
                    <span>SATA</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>
              Показатели производительности
            </h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальная скорость чтения</h3>
                    <p>
                      <span>560 Мбайт/сек</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальная скорость записи</h3>
                    <p>
                      <span>530 Мбайт/сек</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>
                      Скорость производительности чтения 4 Кб файлов (QD32)
                    </h3>
                    <p>
                      <span>98000 IOPS</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Скорость произвольной записи 4 Кб файлов (QD32)</h3>
                    <p>
                      <span>88000 IOPS</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>
              Конфигурация накопителя
            </h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество бит на ячейку</h3>
                    <p>
                      <span>3 бит MLC (TLC)</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Структура памяти</h3>
                    <p>
                      <span>3D NAND</span>
                    </p>
                  </div>

                  <div className={styles.DescriptionRow}>
                    <h3>DRAM буфер</h3>
                    <p>
                      <span>есть</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Объем DRAM буфера</h3>
                    <p>
                      <span>1024 Мб</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.DescriptionSecondContainer}>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Надежность</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальный ресурс записи (TBW)</h3>
                    <p>
                      <span>600 ТБ</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>DWPD</h3>
                    <p>
                      <span>0.33</span>
                    </p>
                  </div>

                  <div className={styles.DescriptionRow}>
                    <h3>Время наработки на отказ</h3>
                    <p>
                      <span>1500000 ч</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Габариты и вес</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Ширина</h3>
                    <p>
                      <span>65.85 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Длина</h3>
                    <p>
                      <span>100 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Толщина</h3>
                    <p>
                      <span>6.8 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Вес</h3>
                    <p>
                      <span>45 г</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Дополнительно</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Энергопотребление</h3>
                    <p>
                      <span>4 Вт</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Аппаратное шифрование данных</h3>
                    <p>
                      <span>есть</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hline} />
    </>
  );
};
