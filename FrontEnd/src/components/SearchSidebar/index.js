import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SearchSidebar.module.scss";

const cx = classNames.bind(styles);

const categories = [
  {
    key: "1",
    title: "Loại hình địa điểm",
    options: [
      "Danh lam thắng cảnh",
      "Quán cà phê",
      "Nhà hàng/quán ăn",
      "Khu vui chơi, giải trí",
      "Di tích lịch sử",
    ],
  },
  {
    key: "2",
    title: "Khu vực/Vị trí",
    options: [
      "Trung tâm thành phố",
      "Ven sông",
      "Gần chợ, trung tâm thương mại",
      "Xa trung tâm (khu sinh thái, resort)",
    ],
  },
  {
    key: "3",
    title: "Hoạt động/Nhu cầu",
    options: [
      "Check-in sống ảo",
      "Ăn uống",
      "Tham quan ngắm cảnh",
      "Trải nghiệm văn hóa",
      "Nghỉ dưỡng",
    ],
  },
  {
    key: "4",
    title: "Thời gian hoạt động",
    options: [
      "Cả ngày",
      "Chỉ mở ban ngày",
      "Chỉ mở ban đêm",
    ],
  },
  {
    key: "5",
    title: "Giá cả",
    options: [
      "Miễn phí",
      "Bình dân",
      "Trung cấp",
      "Cao cấp",
    ],
  },
  {
    key: "6",
    title: "Số người",
    options: [
      "Trên 20 người",
      "Trên 10 người",
      "Trên 5 người",
      "Trên 2 người",
    ],
  },
  {
    key: "7",
    title: "Đánh giá",
    options: [
      "5 sao",
      "4 sao",
      "3 sao",
      "2 sao",
      "1 sao",
    ],
  },
];

function SearchSidebar() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
          {categories.map((category) => (
            <div className={cx('category-wrapper')} key={category.key}>
            <div className={cx('category-inner')}>
                  <div className={cx("category-title")}>{category.title}</div>
                  <div className={cx("option-group")}>
                    {category.options.map((option) => (
                      <div
                        key={option}
                        className={cx("option-item", { selected: selectedOptions.includes(option) })}
                        onClick={() => handleSelect(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
            </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchSidebar;
