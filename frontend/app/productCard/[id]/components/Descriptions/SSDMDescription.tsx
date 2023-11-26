"use client";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";
export const SSDMDescription = () => {
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
                  <h3>Форм-фактор</h3>
                  <p>
                    <span>2280</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Физический интерфейс</h3>
                  <p>
                    <span>PCI-E 3.x x4</span>
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
                      <span>3500 Мбайт/сек</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальная скорость записи</h3>
                    <p>
                      <span>3000 Мбайт/сек</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>
                      Скорость производительности чтения 4 Кб файлов (QD32)
                    </h3>
                    <p>
                      <span>-</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Скорость произвольной записи 4 Кб файлов (QD32)</h3>
                    <p>
                      <span>-</span>
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
                      <span>3 бит TLC</span>
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
                      <span>640 ТБ</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>DWPD</h3>
                    <p>
                      <span>0.35</span>
                    </p>
                  </div>

                  <div className={styles.DescriptionRow}>
                    <h3>Время наработки на отказ</h3>
                    <p>
                      <span>2000000 ч</span>
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
                      <span>80 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Длина</h3>
                    <p>
                      <span>22 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Толщина</h3>
                    <p>
                      <span>6.1 мм</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Вес</h3>
                    <p>
                      <span>11 г</span>
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
                      <span>0.33 Вт</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Аппаратное шифрование данных</h3>
                    <p>
                      <span>-</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Радиатор в комплекте</h3>
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
