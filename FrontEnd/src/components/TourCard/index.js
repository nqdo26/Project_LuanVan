import { Card, Rate } from "antd";
import { motion } from "framer-motion";
import { HeartOutlined } from "@ant-design/icons";
import { AiOutlineEnvironment, AiOutlineCalendar, AiOutlineUsergroupAdd } from "react-icons/ai";

import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TourCard.module.scss";

const cx = classNames.bind(styles);

function TourCard({location, title}) {
    const [liked, setLiked] = useState(false);
    const toggleLike = () => setLiked(!liked);

    const rating = 3.5;
    const badges = ["Tham quan ngắm cảnh", "Ăn uống", "Check-in sống ảo"];
    const maxBadgesToShow = 2;

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };
    

    return (
        <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3 }}
            className={cx("destination-card")}
        >
            <Card
                styles={{
                    body: {
                        padding: "16px",
                    },
                }}
                hoverable
                cover={
                    <div className={cx("image-container")}>
                        <img
                            alt="WIMI-Factory"
                            src="/tour-img.jpg"
                            className={cx("card-image")}
                        />
                        <button className={cx("favorite-btn")}>
                            <HeartOutlined className={cx("favourite-icon")} style={{ color: "white", fontSize: "22px", transition: "color 0.3s ease" }} />
                        </button>
                    </div>
                }
                className={cx("card")}
            >
                <div className={cx("location")}>
                    <AiOutlineEnvironment className={cx('icon-location')} />
                    {location}
                </div>
                <h3 className={cx("title")}>{title}</h3>

                <div className={cx("badge-container")}>
                    {badges.slice(0, maxBadgesToShow).map((badge, index) => (
                        <div key={index} className={cx("badge")} title={badge}>
                            {truncateText(badge, 11)}
                        </div>
                    ))}
                    {badges.length > maxBadgesToShow && <div className={cx("badge")}>...</div>}
                </div>

                <div className={cx("tour-info")}>
                    <div className={cx("info-item")}>
                        <AiOutlineCalendar style={{ color: "black", marginRight: "3px" }} />
                        <span>2 ngày 3 đêm</span>
                    </div>
                    <span className={cx("separator")}>•</span>
                    <div className={cx("info-item")}>
                        <AiOutlineUsergroupAdd style={{ color: "black", marginRight: "3px" }} />
                        <span>5-6 người</span>
                    </div>
                </div>


                <div className={cx("rating-container")}>
                    <Rate disabled allowHalf value={rating} />
                    <span className={cx("rating-value")}>{rating}</span>
                    <span className={cx("rating-count")}>(300)</span>
                </div>

            </Card>
        </motion.div>
    );
}

export default TourCard;
