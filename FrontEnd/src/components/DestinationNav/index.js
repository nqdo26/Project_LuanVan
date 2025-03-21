import { Tabs } from "antd";
import classNames from "classnames/bind";
import styles from "./DestinationNav.module.scss";

const cx = classNames.bind(styles);

function DestinationNav() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const items = [
        { key: "overview", label: "Tổng quan" },
        { key: "location", label: "Vị trí" },
        { key: "comments", label: "Bình luận" }
    ];

    return (
        <div className={cx("wrapper")}>
            <Tabs 
                className={cx("tabs")} 
                onChange={scrollToSection} 
                items={items.map(({ key, label }) => ({
                    key,
                    label: <span className={cx("tab-item")}>{label}</span>,
                }))}
            />
        </div>
    );
}

export default DestinationNav;
