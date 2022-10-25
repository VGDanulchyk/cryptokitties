import React, { useEffect, useState } from "react";
import styles from "./Sort.module.scss";
import { SortProps } from "../../types/types";

const Sort = ({
  sortType,
  buttonsList,
  buttonName,
  defaultActiveButton = "",
}: SortProps) => {
  const [activeButton, setActiveButton] = useState<string>(defaultActiveButton);

  useEffect(() => {
    sortType(activeButton);
  }, [activeButton]);

  const sortTypeHandler = (data: string) => {
    setActiveButton(data);
  };

  return (
    <div className={styles.sortWrapper}>
      <div className={styles.sortButtonsContainer}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>{buttonName}:</h2>
        </div>
        <div className={styles.sortButtonsWrap}>
          {buttonsList.map((button) => (
            <div key={button} className={styles.buttonWrap}>
              <button
                className={`${styles.sortButton} ${
                  button === activeButton ? styles.sortButtonActive : ""
                }`}
                onClick={() => sortTypeHandler(button)}
              >
                {button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sort;
