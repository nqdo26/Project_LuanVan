import React, { useState } from "react";
import { Card, Image, Modal } from "antd";
import classNames from "classnames/bind";
import styles from "./DestinationGallery.module.scss";
import { CameraOutlined } from "@ant-design/icons";

const cx = classNames.bind(styles);



const DestinationGallery = ({ type }) => {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const showAlbum = (category) => {
    setSelectedCategory(category);
    setVisible(true);
  };

  const categories = [
    { src: "/wimi2-img.png", label: "Không gian", count: 37 },
    { src: "/wimi3-img.png", label: "Ẩm thực", count: 3 },
    {
      src: type === "restaurant" ? "/wimi3-img.png" : "/wimi4-img.png",
      label: type === "restaurant" ? "Thực đơn" : "Nổi bậc",
      count: 5,
    },
  ];
  
  return (
    <div className={cx("gallery-container")}>
      <div className={cx("main-image-container")}>
        <Card
            styles={{body: { display: "contents" }}}
            onClick={() => showAlbum(categories[0])} 
            className={cx("main-image-card")}>
            <Image src="/wimi3-img.png" alt="Main View" className={cx("main-image")} />
            <div className={cx("image-overlay")}>
              <CameraOutlined className={cx("image-icon")} />
              <span className={cx("image-count")}>50</span>
          </div>
        </Card>
      </div>

      <div className={cx("category-container")}>
        {categories.map((item, index) => (
          <Card 
            styles={{body: { display: "contents" }}}
            onClick={() => showAlbum(categories[0])} 
            key={index} 
            className={cx("category-card")}>
            <Image src={item.src} alt={item.label} className={cx("category-image")} />
            <div className={cx("category-overlay")}>
              <span className={cx("category-label")}>{item.label}</span>
              <span className={cx("category-count")}>{item.count}</span>
            </div>
          </Card>
        ))}
      </div>
        <Modal 
          visible={visible} 
          onCancel={() => setVisible(false)} 
          footer={null} 
          className={cx("custom-modal")}
        >
          {selectedCategory && (
            <div className={cx("modal-content")}> 
              <h2 className={cx("modal-title")}>{selectedCategory.label}</h2>
              <Image src={selectedCategory.src} alt={selectedCategory.label} className={cx("modal-image")} />
            </div>
          )}
        </Modal>
    </div>
  );
};

export default DestinationGallery;
