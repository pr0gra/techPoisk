import { Description } from "./components/Description/Description";
import { PriceBlock } from "./components/PriceBlock/PriceBlock";
import { SelectImage } from "./components/SelectImage/SelectImage";
import { Specifications } from "./components/Specifications/Specifications";

import styles from "./style.module.css";
export default function ProductCard() {
  return (
    <>
      <div className={styles.container}>
        <SelectImage />
        <Specifications />
        <PriceBlock />
      </div>
      <Description />
    </>
  );
}
