import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs } from "antd";
import { AppstoreOutlined, EnvironmentOutlined, GlobalOutlined, CalendarOutlined } from "@ant-design/icons";
import classNames from 'classnames/bind';

import styles from './SearchFilterTabs.module.scss';


const cx = classNames.bind(styles);

function SearchFilterTabs({ searchTitle }) {
    const [activeKey, setActiveKey] = useState("All");

  const items = [
        { key: "All", label: "Tất cả", icon: <AppstoreOutlined /> },  
        { key: "Destination", label: "Địa điểm", icon: <EnvironmentOutlined /> },  
        { key: "Place", label: "Tỉnh thành", icon: <GlobalOutlined /> },  
        { key: "Tours", label: "Chuyến đi", icon: <CalendarOutlined /> }, 
  ];

  return (
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                  <h2 className={cx('title')}>Results for "{searchTitle}"</h2>
                  <Tabs
                    activeKey={activeKey}
                    onChange={setActiveKey}
                    tabBarStyle={{ borderBottom: "none" }}
                    items={items.map(({ key, label, icon }) => ({
                        key,
                        label: (
                        <span className={cx("tab-item")}>
                            <motion.div>
      
                                    <span className={cx("tab-icon")}>{icon}</span>
                                    <span className={cx("tab-label")}>{label}</span>
 
                            </motion.div>
                        </span>
                        ),
                    }))}
                    />
                </div>
            </div>

  );
}

export default SearchFilterTabs;