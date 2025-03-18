import { motion } from "framer-motion";
import { Tabs } from "antd";
import { AppstoreOutlined, EnvironmentOutlined, GlobalOutlined, CalendarOutlined } from "@ant-design/icons";
import classNames from 'classnames/bind';

import styles from './SearchFilterTabs.module.scss';
import SearchBarInSearchPage from "../SearchBarInSearchPage";
import CustomTitle from "../CustomTitle";


const cx = classNames.bind(styles);

function SearchFilterTabs({ onChange, searchTitle }) {

  const items = [
        { key: "all", label: "Tất cả", icon: <AppstoreOutlined /> },  
        { key: "destination", label: "Địa điểm", icon: <EnvironmentOutlined /> },  
        { key: "tours", label: "Hành trình & trải nghiệm", icon: <CalendarOutlined /> }, 
  ];

  return (
    <div className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('header')}>
                <CustomTitle 
                    title={"Khám phá địa điểm & hành trình"} 
                    size={35}
                />
                <div className={cx('search-bar')} ><SearchBarInSearchPage/></div>
          </div>
            <Tabs
                onChange={onChange}
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