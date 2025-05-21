import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DayPlanItem.module.scss';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, MapPin, NotebookPen, Utensils } from 'lucide-react';
import { Tooltip } from 'antd';
import CardTrip from '../CardTrip';

const cx = classNames.bind(styles);

function DayPlanItem() {
    const [expanded, setExpanded] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [direction, setDirection] = useState('open');
    const [timelineItems, setTimelineItems] = useState([]);

    const handleOpen = () => {
        setDirection('open');
        setExpanded(true);
        setShowButton(false);
    };

    const handleClose = () => {
        setDirection('close');
        setExpanded(false);
    };

    const handleAddItem = (type) => {
        setTimelineItems((prev) => [...prev, type]);
    };

    const iconMap = {
        place: <MapPin size={18} />,
        restaurant: <Utensils size={18} />,
        coffee: <Coffee size={18} />,
        note: <NotebookPen size={18} />,
    };

    return (
        <div className={cx('day-plan-item')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>Tuesday, May 6</h3>
            </div>

            <div className={cx('main-content')}>
                <div className={cx('time-line')}>
                    {timelineItems.map((type, index) => (
                        <motion.div
                            key={index}
                            className={cx('timeline-icon')}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {iconMap[type]}
                        </motion.div>
                    ))}
                </div>
                <div className={cx('trip-items')}>
                    <CardTrip title="Wimi-Factory" location="Hẻm 30 đường Lê Anh Xuân, Ninh Kiều, Cần Thơ" image="/wimi2-img.png" />
                    <div className={cx('add-box')}>
                        <p className={cx('description')}>
                            Build your day by adding from your saves or adding custom travel details not on Tripadvisor.
                        </p>
                    </div>
                </div>
            </div>

            <div className={cx('action-add')}>
                {showButton && (
                    <button className={cx('toggle-button')} onClick={handleOpen} aria-label="Expand">
                        <PlusOutlined className={cx('icon')} />
                        <span className={cx('toggle-text')}>Điểm đến</span>
                    </button>
                )}

                <AnimatePresence
                    onExitComplete={() => {
                        if (direction === 'close') {
                            setShowButton(true);
                        }
                    }}
                >
                    {expanded && (
                        <motion.div
                            key="actions"
                            className={cx('actions')}
                            initial={{
                                opacity: 0,
                                x: direction === 'open' ? -60 : 60,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                                opacity: 0,
                                x: direction === 'close' ? 60 : -60,
                            }}
                            transition={{
                                duration: direction === 'close' ? 0.8 : 0.25,
                                ease: 'easeInOut',
                            }}
                        >
                            <Tooltip title="Địa điểm sẽ đến">
                                <button
                                    className={cx('action-btn')}
                                    onClick={() => handleAddItem('place')}
                                    aria-label="place"
                                >
                                    <MapPin size={22} />
                                </button>
                            </Tooltip>
                            <Tooltip title="Quán ăn/Nhà hàng">
                                <button
                                    className={cx('action-btn')}
                                    onClick={() => handleAddItem('restaurant')}
                                    aria-label="restaurant"
                                >
                                    <Utensils size={20} />
                                </button>
                            </Tooltip>
                            <Tooltip title="Quán cafe">
                                <button
                                    className={cx('action-btn')}
                                    onClick={() => handleAddItem('coffee')}
                                    aria-label="coffee"
                                >
                                    <Coffee size={22} />
                                </button>
                            </Tooltip>
                            <Tooltip title="Ghi chú">
                                <button
                                    className={cx('action-btn')}
                                    onClick={() => handleAddItem('note')}
                                    aria-label="note"
                                >
                                    <NotebookPen size={20} />
                                </button>
                            </Tooltip>

                            <button className={cx('action-btn', 'exit-btn')} onClick={handleClose} aria-label="Close">
                                <CloseOutlined />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default DayPlanItem;
