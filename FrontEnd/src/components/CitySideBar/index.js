import React, { useState } from 'react';
import { Checkbox } from 'antd';
import classNames from 'classnames/bind';
import styles from './CitySideBar.module.scss';

const cx = classNames.bind(styles);

function CitySideBar() {
    const [showTourSub, setShowTourSub] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});

    const allOptions = [
        'Công viên nước',
        'Bảo tàng',
        'Công viên & Vườn bách thảo',
        'Sở thú & Thủy cung',
        'Cáp treo',
        'Di tích lịch sử',
        'Vé tham quan',
    ];

    const tourOptions = ['Tour đi thuyền', 'Hop on hop off', 'Đi bộ leo núi'];

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
                    <div className={cx('expandable-header')}>
                        <label className={cx('checkbox-label')}>
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
                        <span className={cx('arrow')} onClick={() => setShowTourSub(!showTourSub)}>
                            {showTourSub ? '▾' : '▸'}
                        </span>
                    </div>
                    {showTourSub && (
                        <ul className={cx('sublist')}>
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
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default CitySideBar;
