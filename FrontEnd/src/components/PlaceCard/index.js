import React from "react";
import { Card } from "antd";
import classNames from "classnames/bind";
import styles from "./PlaceCard.module.scss";

const cx = classNames.bind(styles);

function PlaceCard({ title }) {
  return (
    <div className={cx("place-card")}>
      <Card 
        hoverable className={cx("custom-card")}
        styles={{
            width: "100%", 
            height: 250,
            body: {
                padding: 0,
            },
        }} 
        >
        <div className={cx("image-container")}>
          <img alt={title} src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" className={cx("card-image")} />
          <div className={cx("card-title")}>{title}</div>
        </div>
      </Card>
    </div>
  );
}

export default PlaceCard;
