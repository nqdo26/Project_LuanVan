import React, { useState } from 'react';
import { Button, Modal, Input, Tooltip, Upload } from 'antd';
import { SettingOutlined, UploadOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './HeaderProfilePage.module.scss';
import { UserPen } from 'lucide-react';

const cx = classNames.bind(styles);

function HeaderProfilePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('avatar-section')}>
                    <img className={cx('avatar')} src="/wimi1-img.png" alt="avatar" />
                    <div className={cx('info')}>
                        <h2 className={cx('name')}>Nguyễn Quang Độ</h2>
                        <span className={cx('username')}>nguoideptrainhatthegioi@gmail.com</span>
                    </div>
                </div>

                <Tooltip title="Chỉnh sửa thông tin cá nhân" placement="bottom">
                    <div className={cx('edit-icon')} onClick={showModal}>
                        <UserPen />
                    </div>
                </Tooltip>
            </div>

            <div className={cx('stats')}>
                <div className={cx('stat-item')}>
                    <strong>0</strong>
                    <span>Contributions</span>
                </div>
                <div className={cx('stat-item')}>
                    <strong>0</strong>
                    <span>Followers</span>
                </div>
                <div className={cx('stat-item')}>
                    <strong>0</strong>
                    <span>Following</span>
                </div>
            </div>

            <div className={cx('edit-btn')}>
                <Button icon={<SettingOutlined />} type="default">
                    Edit profile
                </Button>
            </div>

            <div className={cx('tabs')}>
                <span className={cx('tab', 'active')}>Activity feed</span>
                <span className={cx('tab')}>Trips</span>
                <span className={cx('tab')}>Photos</span>
                <span className={cx('tab')}>Reviews</span>
                <span className={cx('tab')}>Forums</span>
                <span className={cx('tab')}>Travel map</span>
            </div>

            <Modal
                title="Chỉnh sửa thông tin cá nhân"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Lưu"
                cancelText="Hủy"
                width={600}
            >
                {/* Avatar */}
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                    <img
                        src="/wimi1-img.png"
                        alt="avatar"
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginBottom: 12,
                        }}
                    />
                    <br />
                    <Upload showUploadList={false}>
                        <Button icon={<UploadOutlined />}>Thay đổi ảnh đại diện</Button>
                    </Upload>
                </div>

                {/* Form Fields */}
                <Input style={{ marginBottom: 12 }} placeholder="Họ và tên" defaultValue="Nguyễn Quang Độ" />
                <Input style={{ marginBottom: 12 }} placeholder="Username" defaultValue="583quang_n" prefix="@" />
                <Input style={{ marginBottom: 12 }} placeholder="Thành phố hiện tại" />
                <Input style={{ marginBottom: 12 }} placeholder="Website" prefix="🌐" />
                <Input.TextArea placeholder="Thông tin giới thiệu bản thân" maxLength={160} rows={4} />
                <div style={{ fontSize: 12, color: '#999', marginTop: 8 }}>160 ký tự tối đa</div>
            </Modal>
        </div>
    );
}

export default HeaderProfilePage;
