import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DayPlanItem.module.scss';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, MapPin, NotebookPen, Utensils } from 'lucide-react';
import { Tooltip } from 'antd';

const cx = classNames.bind(styles);

function DayPlanItem() {
    const [expanded, setExpanded] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [direction, setDirection] = useState('open');

    const handleOpen = () => {
        setDirection('open');
        setExpanded(true);
        setShowButton(false);
    };

    const handleClose = () => {
        setDirection('close');
        setExpanded(false);
    };

    return (
        <div className={cx('day-plan-item')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>Tuesday, May 6</h3>
            </div>

            <div className={cx('content')}>
                <p className={cx('description')}>
                    Build your day by adding from your saves or adding custom travel details not on Tripadvisor.
                </p>
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
                                <button className={cx('action-btn')} aria-label="place">
                                    <MapPin size={22} />
                                </button>
                            </Tooltip>
                            <Tooltip title="Quán ăn/Nhà hàng">
                                <button className={cx('action-btn')} aria-label="restaurant">
                                    <Utensils size={20} />
                                </button>
                            </Tooltip>
                            <Tooltip title="Quán cafe">
                                <button className={cx('action-btn')} aria-label="coffee">
                                    <Coffee size={22} />
                                </button>
                            </Tooltip>
                            <Tooltip title="Ghi chú">
                                <button className={cx('action-btn')} aria-label="note">
                                    <NotebookPen size={20} />
                                </button>
                            </Tooltip>

                            <button className={cx('action-btn', 'exit-btn')} aria-label="Close" onClick={handleClose}>
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
