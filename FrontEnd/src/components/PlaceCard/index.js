import React from "react";
import { Card } from "antd";
import classNames from "classnames/bind";
import styles from "./PlaceCard.module.scss";

const cx = classNames.bind(styles);

function PlaceCard({ image, title }) {
  return (
    <div className={cx("place-card")}>
      <Card 
        hoverable className={cx("custom-card")}
        styles={{
            body: {
                padding: 0,
            },
        }} 
        >
        <div className={cx("image-container")}>
          <img alt={title} src={image} className={cx("card-image")} />
          <div className={cx("card-title")}>{title}</div>
        </div>
      </Card>
    </div>
  );
}

export default PlaceCard;
