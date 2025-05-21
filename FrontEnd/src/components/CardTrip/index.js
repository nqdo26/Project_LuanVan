import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CardTrip.module.scss';
import { Rate } from 'antd';
import { Ellipsis, MapPin, Pencil, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cx = classNames.bind(styles);

function CardTrip({ title, location, image }) {
    const [showMenu, setShowMenu] = useState(false);
    const badges = ['Văn hóa', 'Ẩm thực', 'Chụp hình'];

    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };

    return (
        <motion.div
            className={cx('card')}
            whileHover={{
                scale: 1.005,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: { duration: 0.25, ease: 'easeOut' },
            }}
        >
            <img src={image} alt={title} className={cx('image')} />
            <div className={cx('info')}>
                <div className={cx('header')}>
                    <div className={cx('title')}>{title}</div>
                    <div className={cx('action')} onClick={toggleMenu}>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Ellipsis size={20} />
                        </motion.div>

                        <AnimatePresence>
                            {showMenu && (
                                <motion.div
                                    className={cx('menu')}
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={cx('menu-item')}>
                                        <Pencil size={16} />
                                        <span>Thêm ghi chú</span>
                                    </div>
                                    <div className={cx('menu-item', 'delete')}>
                                        <Trash2 size={16} />
                                        <span>Xóa</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className={cx('rating')}>
                    <Rate disabled defaultValue={5} className={cx('start')} />
                </div>
                <div className={cx('badge-container')}>
                    {badges.map((badge, index) => (
                        <span key={index} className={cx('badge')}>
                            {badge}
                        </span>
                    ))}
                </div>

                <div className={cx('location')}>
                    <MapPin size={15} />
                    {location}
                </div>
            </div>
        </motion.div>
    );
}

export default CardTrip;
