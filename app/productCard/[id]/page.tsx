import styles from "./style.module.css";
import { ProcessorDescription } from "./components/Descriptions/ProcessorDescription";
import { PriceBlock } from "./components/PriceBlock/PriceBlock";
import { SelectImage } from "./components/SelectImage/SelectImage";
import { Specifications } from "./components/Specifications/Specifications";

import ky from "ky";

import DescriptionWrapper from "./components/DescriptionWrapper/DescriptionWrapper";

export default function ProductCard() {
  return (
    <div
      style={{
        maxWidth: "90rem",
        margin: "0 auto",
        padding: "24px 150px 22px",
      }}
    >
      <DescriptionWrapper />
    </div>
  );
}
