import { SearchOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./SearchBar.module.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const cx = classNames.bind(styles);

function SearchBar() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/search");
         window.scrollTo(0, 0); 
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -5, 
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)", 
            }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }} 
            className={cx("search-bar")}
            onClick={handleNavigate}
        >
            <div className={cx("search-header")}>
                <div className={cx("search-icon")}>
                    <SearchOutlined style={{ padding: "6px 7px" }}/>
                </div>
                <span className={cx("search-text")}>
                    Tìm kiếm địa điểm, quán ăn, quán cà phê...
                </span>
            </div>
            <div className={cx("search-button")}>
                <span className={cx("search-button-text")}>
                    Tìm kiếm
                </span>
            </div>
        </motion.div>
    );
}

export default SearchBar;
