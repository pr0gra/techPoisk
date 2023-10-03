"use client";
import { useState } from "react";
import styles from "./style.module.css";
import cx from "classnames";
import { SelectImageButton } from "./SelectImageButton";
export const SelectImage = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

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
      <div className={styles.bigImage}>
        {imageIndex % 2 == 0 ? <p>Чет</p> : <p>Не чет</p>}
      </div>
    </div>
  );
};
