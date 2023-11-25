import { useState } from "react";
import styles from "./SearchComponents.module.css";

import { SearchProcessors } from "./components/SearchProcessors/SearchProcessors";

interface Props {
  searchTableName: string;
  setIsSearchTableOpen: any;
}

export function SearchComponents({
  searchTableName,
  setIsSearchTableOpen,
}: Props) {
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
    <>
      <div
        onClick={() => {
          setIsSearchTableOpen(false);
        }}
        className={styles["layout"]}
      ></div>
      <div className={styles["modal"]}>
        {searchTableName === "processors" && <SearchProcessors demoBase={demoBase} />}
      </div>
    </>
  );
}
