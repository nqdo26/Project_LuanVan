import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './AdminUserManage.module.scss';
import { Button, Table, Switch, Popconfirm, message } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

const fakeUsers = [
    {
        _id: 'u1',
        userName: 'alice.sigmas',
        fullName: 'Alice Nguyễn',
        isAdmin: false,
        personalItineraries: 3,
        reviewCount: 15,
    },
    {
        _id: 'u2',
        userName: 'john.sigma',
        fullName: 'John Trần',
        isAdmin: true,
        personalItineraries: 7,
        reviewCount: 30,
    },
    {
        _id: 'u3',
        userName: 'betaguy',
        fullName: 'Bùi Văn Beta',
        isAdmin: false,
        personalItineraries: 1,
        reviewCount: 5,
    },
    {
        _id: 'u4',
        userName: 'ha.le',
        fullName: 'Hà Lê',
        isAdmin: false,
        personalItineraries: 0,
        reviewCount: 0,
    },
    {
        _id: 'u5',
        userName: 'chi.hoang',
        fullName: 'Chi Hoàng',
        isAdmin: true,
        personalItineraries: 10,
        reviewCount: 50,
    },
    // Add more mock users here to test pagination if you want!
];

function AdminUserManage() {
    const [users, setUsers] = useState(fakeUsers);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 7;

    const handleToggleAdmin = (record) => {
        setUsers((prev) => prev.map((user) => (user._id === record._id ? { ...user, isAdmin: !user.isAdmin } : user)));
        message.success(
            record.isAdmin ? 'Đã hủy quyền admin cho tài khoản này!' : 'Đã cấp quyền admin cho tài khoản này!',
        );
    };

    const handleDeleteUser = (record) => {
        setUsers((prev) => prev.filter((user) => user._id !== record._id));
        message.success('Xóa tài khoản thành công!');
    };

    const handleAccessUser = (record) => {
        alert(`Truy cập user: ${record.fullName}`);
    };

    const columns = [
        {
            title: 'STT',
            key: 'index',
            width: 60,
            render: (_, __, index) => (currentPage - 1) * pageSize + index + 1,
        },
        {
            title: 'Tên tài khoản',
            dataIndex: 'userName',
        },
        {
            title: 'Họ tên',
            dataIndex: 'fullName',
        },
        {
            title: 'Chỉ số',
            key: 'metrics',
            render: (record) => (
                <div>
                    <div>
                        Số lịch trình cá nhân: <b>{record.personalItineraries}</b>
                    </div>
                    <div>
                        Số lượt đánh giá: <b>{record.reviewCount}</b>
                    </div>
                </div>
            ),
        },
        {
            title: 'Admin',
            key: 'admin',
            render: (record) => (
                <Popconfirm
                    title={`Bạn có chắc muốn ${record.isAdmin ? 'hủy quyền' : 'cấp quyền'} admin cho tài khoản này?`}
                    onConfirm={() => handleToggleAdmin(record)}
                    okText="Đồng ý"
                    cancelText="Hủy"
                >
                    <Switch checked={record.isAdmin} />
                </Popconfirm>
            ),
            width: 100,
        },
        {
            title: 'Tùy chọn',
            key: 'action',
            render: (record) => (
                <div style={{ display: 'flex', gap: 10 }}>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa tài khoản này?"
                        onConfirm={() => handleDeleteUser(record)}
                        okText="Đồng ý"
                        cancelText="Hủy"
                    >
                        <Button danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                    <Button type="primary" icon={<EyeOutlined />} onClick={() => handleAccessUser(record)}>
                        Truy cập
                    </Button>
                </div>
            ),
            width: 160,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cx('wrapper')}
        >
            <div className={cx('inner')}>
                <div className={cx('section-1')}>
                    <h1 className={cx('title')}>Quản lý tài khoản người dùng</h1>
                    <div className={cx('section-1-items')}>
                        <div className={cx('small-card')}>
                            <p className={cx('small-card-title')}>Tài khoản người dùng:</p>
                            <p className={cx('small-card-value')}>{users.length}</p>
                        </div>
                        <div className={cx('small-card')}>
                            <p className={cx('small-card-title')}>Tài khoản admin:</p>
                            <p className={cx('small-card-value')}>{users.filter((u) => u.isAdmin).length}</p>
                        </div>
                    </div>
                </div>
                <div className={cx('table-wrapper')}>
                    <h1 className={cx('table-title')}>Danh sách tài khoản người dùng</h1>
                    <Table
                        dataSource={users}
                        columns={columns}
                        bordered
                        rowKey="_id"
                        pagination={{
                            pageSize,
                            current: currentPage,
                            onChange: (page) => setCurrentPage(page),
                            showSizeChanger: false,
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default AdminUserManage;
