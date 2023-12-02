"use client";
import { useState } from "react";
import styles from "./style.module.css";
import cx from "classnames";
import { SelectImageButton } from "./SelectImageButton";
import Image from "next/image";
export const SelectImage = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const images: { [key: number]: string } = {
    //Сделал для теста

    0: "https://img1.liveinternet.ru/images/attach/b/2/2/263/2263831_15734625_deg.gif",
    1: "https://progermany.ru/wp-content/uploads/2023/05/germaniya3.jpg",
  };
  return (
    <div className={styles.container}>
      <div>
        <ul>
          <SelectImageButton
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
            idElement={0}
          >
            1
          </SelectImageButton>

          <SelectImageButton
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
            idElement={1}
          >
            2
          </SelectImageButton>
        </ul>
      </div>
      <div className={styles.bigImageContainer}>
        <img src={images[imageIndex]} alt="img" style={{ width: "100%" }} />
      </div>
    </div>
  );
};
