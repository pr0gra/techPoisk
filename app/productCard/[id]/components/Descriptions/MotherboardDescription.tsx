"use client";
import React from "react";
import styles from "./style.module.css";

export const MotherboardDescription = ({ props }: any) => {
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
                  <h3>Socket</h3>
                  <p>
                    <span>LGA 1700</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Чипсет</h3>
                  <p>
                    <span>Intel Z690</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Форм-фактор</h3>
                  <p>
                    <span>ATX</span>
                  </p>
                </div>
                <div className={styles.DescriptionRow}>
                  <h3>Совместимые ядра процессоров</h3>
                  <p>
                    <span>Alder Lake, Raptor Lake</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Интерфейсы</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>USB на задней панели</h3>
                    <p>
                      <span>
                        USB 3.2 Gen1 Type A x4, USB 3.2 Gen2 Type-C, USB 3.2
                        Gen2 Type A x4, USB 3.2 Gen2x2 Type-C, S/PDIF
                        (оптический)
                      </span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Видеовыходы</h3>
                    <p>
                      <span>1 x DisplayPort, 1 x HDM</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество сетевых портов</h3>
                    <p>
                      <span>1</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Разъемы SMA (для антенны Wi-Fi)</h3>
                    <p>
                      <span>Есть</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Память</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Тип памяти</h3>
                    <p>
                      <span>DDR5</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Форм-фактор памяти</h3>
                    <p>
                      <span>DIMM</span>
                    </p>
                  </div>

                  <div className={styles.DescriptionRow}>
                    <h3>Количество слотов памяти</h3>
                    <p>
                      <span>4</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество каналов памяти</h3>
                    <p>
                      <span>2</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальный объём памяти</h3>
                    <p>
                      <span>192 Гб</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Частота памяти (без разгона)</h3>
                    <p>
                      <span>5600 МГц</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Максимальная частота в разгоне</h3>
                    <p>
                      <span>7200 МГц</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.DescriptionSecondContainer}>
          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>
              Питание и охлаждение
            </h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Основной разъём питания</h3>
                    <p>
                      <span>24 pin</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Разъём питания процессора</h3>
                    <p>
                      <span>2 x 8 pin</span>
                    </p>
                  </div>

                  <div className={styles.DescriptionRow}>
                    <h3>Количество фаз питания</h3>
                    <p>
                      <span>18</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Пассивное охлаждение</h3>
                    <p>
                      <span>4 x M.2 слот, зона VRM, чипсет</span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Активное охлаждение</h3>
                    <p>
                      <span>нет</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.DescriptionBlock}>
            <h2 className={styles.DescriptionBlockTitle}>Слоты расширения</h2>
            <div className={styles.DescriptionBlock}>
              <div className={styles.Description}>
                <div className={styles.DescriptionColumn}>
                  <div className={styles.DescriptionRow}>
                    <h3>Слоты расширения</h3>
                    <p>
                      <span>
                        PCI-E 5.0 x16, PCI-E 4.0 x16, PCI-E x1, 4 x PCI-E M.2
                      </span>
                    </p>
                  </div>
                  <div className={styles.DescriptionRow}>
                    <h3>Количество портов SATA</h3>
                    <p>
                      <span>7</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.commonColumn}>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Аудио</h2>
              <div className={styles.DescriptionBlock}>
                <div className={styles.Description}>
                  <div className={styles.DescriptionColumn}>
                    <div className={styles.DescriptionRow}>
                      <h3>Звуковая схема</h3>
                      <p>
                        <span>7.1</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Чипсет звукового адаптера</h3>
                      <p>
                        <span>Realtek ALC4080</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DescriptionBlock}>
              <h2 className={styles.DescriptionBlockTitle}>Сеть</h2>
              <div className={styles.DescriptionBlock}>
                <div className={styles.Description}>
                  <div className={styles.DescriptionColumn}>
                    <div className={styles.DescriptionRow}>
                      <h3>Скорость сетевого адаптера</h3>
                      <p>
                        <span>2.5 Гбит/с</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Сетевой адаптер</h3>
                      <p>
                        <span>Intel I225-V</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Стандарт Wi-Fi</h3>
                      <p>
                        <span>6E (802.11ax)</span>
                      </p>
                    </div>
                    <div className={styles.DescriptionRow}>
                      <h3>Версия Bluetooth</h3>
                      <p>
                        <span>5.3</span>
                      </p>
                    </div>
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
