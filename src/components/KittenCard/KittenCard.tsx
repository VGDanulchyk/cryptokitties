import React from "react";
import styles from "./KittenCard.module.scss";
import { KittenCardProps } from "../../types/types";

const KittenCard = ({ name, category, price, image_url }: KittenCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.descriptionContainer}>
        <p>
          Name: <span className={styles.descriptionText}>{name}</span>
        </p>
        <p>
          Category: <span className={styles.descriptionText}>{category}</span>
        </p>
        <p>
          Price: <span className={styles.descriptionText}>{price}</span>
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image_url} alt="cat image" />
      </div>
    </div>
  );
};

export default KittenCard;
