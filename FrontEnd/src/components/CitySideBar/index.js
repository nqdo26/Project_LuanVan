import React, { useState } from 'react';
import { Checkbox } from 'antd';
import classNames from 'classnames/bind';
import styles from './CitySideBar.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const cx = classNames.bind(styles);

function CitySideBar() {
    const [showTourSub, setShowTourSub] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});

    const allOptions = [
        'Quán ăn & Nhà hàng',
        'Quán cà phê',
        'Khu vui chơi',
        'Công viên',
        'Di tích lịch sử',
        'Bảo tàng',
    ];

    const tourOptions = ['Tham quan ngắm cảnh', 'Trải nghiệm văn hóa', 'Thưởng thức ẩm thực', 'Check-in sống ảo'];

    const toggleCheckbox = (label) => {
        setCheckedItems((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    return (
        <div className={cx('sidebar')}>
            <h3 className={cx('title')}>Danh mục</h3>
            <ul className={cx('list')}>
                {allOptions.map((label, index) => (
                    <li key={index}>
                        <label className={cx('checkbox-label')}>
                            <Checkbox checked={!!checkedItems[label]} onChange={() => toggleCheckbox(label)} />
                            {label}
                        </label>
                    </li>
                ))}
                <li className={cx('expandable')}>
                    <div className={cx('expandable-header')} onClick={() => setShowTourSub(!showTourSub)}>
                        <label className={cx('checkbox-label')} onClick={(e) => e.stopPropagation()}>
                            <Checkbox
                                checked={tourOptions.every((item) => checkedItems[item])}
                                indeterminate={
                                    tourOptions.some((item) => checkedItems[item]) &&
                                    !tourOptions.every((item) => checkedItems[item])
                                }
                                onChange={() => {
                                    const allChecked = tourOptions.every((item) => checkedItems[item]);
                                    const updated = {};
                                    tourOptions.forEach((item) => {
                                        updated[item] = !allChecked;
                                    });
                                    setCheckedItems((prev) => ({ ...prev, ...updated }));
                                }}
                            />
                            Tour
                        </label>
                        <span className={cx('arrow', { expanded: showTourSub })}>{showTourSub ? '▾' : '▸'}</span>
                    </div>

                    <AnimatePresence>
                        {showTourSub && (
                            <motion.ul
                                className={cx('sublist')}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {tourOptions.map((tour, index) => (
                                    <li key={index}>
                                        <label className={cx('checkbox-label')}>
                                            <Checkbox
                                                checked={!!checkedItems[tour]}
                                                onChange={() => toggleCheckbox(tour)}
                                            />
                                            {tour}
                                        </label>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </li>
            </ul>
        </div>
    );
}

export default CitySideBar;
