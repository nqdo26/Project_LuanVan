import React, { useState } from 'react';
import { Drawer, Button, Input } from 'antd';
import classNames from 'classnames/bind';
import styles from './AddDestinationDrawer.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import CardTrip from '../CardTrip';

const cx = classNames.bind(styles);

function AddDestinationDrawer({ open, onClose, onAdd, title }) {
    const [selectedTrip, setSelectedTrip] = useState(null);

    const handleSelectTrip = (trip) => {
        setSelectedTrip(trip);
        onAdd(trip);
        setSelectedTrip(null); 
    };

    const trips = [
        { title: 'Wimi-Factory 1', location: 'Hẻm 30 đường Lê Anh Xuân', image: '/wimi2-img.png' },
        { title: 'Wimi-Factory 2', location: 'Hẻm 30 đường Lê Anh Xuân', image: '/wimi1-img.png' },
        { title: 'Wimi-Factory 3', location: 'Hẻm 30 đường Lê Anh Xuân', image: '/wimi3-img.png' },
        { title: 'Wimi-Factory 4', location: 'Hẻm 30 đường Lê Anh Xuân', image: '/wimi4-img.png' },
    ];

    return (
        <Drawer
            placement="right"
            onClose={onClose}
            open={open}
            width={550}
            footer={
                <div className={cx('footer')}>
                    <Button className={cx('footer-btn')} onClick={onClose}>
                        Hủy
                    </Button>
                </div>
            }
        >
            <div className={cx('body')}>
                <h1 className={cx('title')}>Thêm {title}</h1>
                <div className={cx('content')}>
                    <Input
                        prefix={<SearchOutlined />}
                        placeholder="Chuyến du lịch Cần Thơ cùng gia đình"
                        maxLength={80}
                        className={cx('drawer-input', 'drawer-search')}
                    />

                    <div className={cx('list-items')}>
                        {trips.map((trip, index) => (
                            <CardTrip
                                key={index}
                                title={trip.title}
                                location={trip.location}
                                image={trip.image}
                                showMenu={false}
                                onClick={() => handleSelectTrip(trip)}
                                isSelected={selectedTrip === trip}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Drawer>
    );
}

export default AddDestinationDrawer;
