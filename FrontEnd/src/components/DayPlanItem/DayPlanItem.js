import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DayPlanItem.module.scss';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, MapPin, NotebookPen, Utensils, Plus } from 'lucide-react';
import { Tooltip } from 'antd';
import CustomDrawer from '../CustomDrawer';
import CardTrip from '../CardTrip';
import AddDestinationDrawer from '../AddDestinationDrawer';

const cx = classNames.bind(styles);

function DayPlanItem() {
    const [expanded, setExpanded] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [direction, setDirection] = useState('open');
    const [timelineItems, setTimelineItems] = useState([]);

    const [tripTime, setTripTime] = useState('');
    const [tripNote, setTripNote] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [addDrawerOpen, setAddDrawerOpen] = useState(false);

    const [selectedType, setSelectedType] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');

    const handleOpen = () => {
        setDirection('open');
        setExpanded(true);
        setShowButton(false);
    };

    const handleClose = () => {
        setDirection('close');
        setExpanded(false);
    };

    const handleAddItem = (type, title) => {
        setSelectedType(type);
        setSelectedTitle(title);
        setAddDrawerOpen(true);
    };

    const handleAddDrawer = () => {
        if (selectedType) {
            setTimelineItems((prev) => [
                ...prev,
                {
                    type: selectedType,
                    title: selectedTitle || 'Tiêu đề địa điểm',
                    content: 'Mô tả địa điểm mẫu...',
                },
            ]);
        }
        setAddDrawerOpen(false);
    };

    const openDrawer = () => {
        setDrawerOpen(true);
    };

    const handleSaveDrawer = (time, note) => {
        setTripTime(time);
        setTripNote(note);
        setDrawerOpen(false);
    };

    const handleAddNote = () => {
        setTimelineItems((prev) => [
            ...prev,
            {
                type: 'note',
                title: 'Tiêu đề ghi chú',
                content: 'Đây là nội dung ghi chú mẫu.',
            },
        ]);
        setAddDrawerOpen(false);
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
                    {timelineItems.length === 0 ? (
                        <div className={cx('timeline-row')}>
                            <div className={cx('timeline-icon')}>
                                <Plus size={18} />
                            </div>
                            <div className={cx('add-box')} onClick={handleOpen} style={{ cursor: 'pointer' }}>
                                <p className={cx('description')}>Thêm điểm đến đầu tiên</p>
                            </div>
                        </div>
                    ) : (
                        timelineItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className={cx('timeline-row')}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div
                                    className={cx('timeline-icon')}
                                    data-last={index === timelineItems.length - 1 ? 'true' : 'false'}
                                >
                                    {iconMap[item.type]}
                                </div>

                                <div className={cx('card-trip-wrapper')}>
                                    {item.type === 'note' ? (
                                        <div className={cx('note-box')}>
                                            <h4 className={cx('note-title')}>{item.title}</h4>
                                            <p className={cx('note-content')}>{item.content}</p>
                                        </div>
                                    ) : (
                                        <CardTrip
                                            title={item.title}
                                            location="Hẻm 30 đường Lê Anh Xuân"
                                            image="/wimi2-img.png"
                                            showMenu={true}
                                            time={tripTime}
                                            note={tripNote}
                                            onEdit={openDrawer}
                                            hoverEffect={false}
                                            clickEffect={true}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        ))
                    )}
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
                            <Tooltip title="Địa điểm">
                                <button
                                    className={cx('action-btn')}
                                    aria-label="place"
                                    onClick={(e) =>
                                        handleAddItem(e.currentTarget.getAttribute('aria-label'), 'Địa điểm')
                                    }
                                >
                                    <MapPin size={22} />
                                </button>
                            </Tooltip>
                            <Tooltip title="Quán ăn/Nhà hàng">
                                <button
                                    className={cx('action-btn')}
                                    aria-label="restaurant"
                                    onClick={(e) =>
                                        handleAddItem(e.currentTarget.getAttribute('aria-label'), 'Quán ăn/Nhà hàng')
                                    }
                                >
                                    <Utensils size={20} />
                                </button>
                            </Tooltip>
                            <Tooltip title="Quán nước">
                                <button
                                    className={cx('action-btn')}
                                    aria-label="coffee"
                                    onClick={(e) =>
                                        handleAddItem(e.currentTarget.getAttribute('aria-label'), 'Quán nước')
                                    }
                                >
                                    <Coffee size={22} />
                                </button>
                            </Tooltip>
                            <Tooltip title="Ghi chú">
                                <button
                                    className={cx('action-btn')}
                                    aria-label="note"
                                    onClick={(e) =>
                                        handleAddItem(e.currentTarget.getAttribute('aria-label'), 'Ghi chú')
                                    }
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

            <CustomDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                onSave={handleSaveDrawer}
                initialTime={tripTime}
                initialNote={tripNote}
            />

            <AddDestinationDrawer
                open={addDrawerOpen}
                onAdd={handleAddDrawer}
                onClose={() => setAddDrawerOpen(false)}
                title={selectedTitle}
                type={selectedType}
                handleAddNote={handleAddNote}
            />
        </div>
    );
}

export default DayPlanItem;
