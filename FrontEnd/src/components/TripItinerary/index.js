import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TripItinerary.module.scss';
import { Space } from 'antd';

import DayPlanItem from '../DayPlanItem/DayPlanItem';

const cx = classNames.bind(styles);

const days = [
    { id: 1, label: 'May 6' },
    { id: 2, label: 'May 7' },
    { id: 3, label: 'May 8' },
    { id: 4, label: 'May 9' },
];

export default function TripItinerary() {
    const [selectedDay, setSelectedDay] = useState(days[0].id);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('day-list')}>
                <Space size={12} wrap>
                    {days.map(({ id, label }) => (
                        <div
                            key={id}
                            role="button"
                            tabIndex={0}
                            className={cx('day-button', { selected: selectedDay === id })}
                            onClick={() => setSelectedDay(id)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedDay(id);
                                }
                            }}
                        >
                            {label}
                        </div>
                    ))}
                </Space>
            </div>
            <div className={cx('day-content')}>
                <DayPlanItem day={selectedDay} />
            </div>
        </div>
    );
}
