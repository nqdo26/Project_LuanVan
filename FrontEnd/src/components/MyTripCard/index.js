import { Card, Typography, Dropdown, Menu } from 'antd';
import { MoreVertical } from 'lucide-react';
import classNames from 'classnames/bind';
import styles from './MyTripCard.module.scss';

const cx = classNames.bind(styles);
const { Title, Text } = Typography;

function MyTripCard() {
    const menuItems = [
        {
            key: 'share',
            label: 'Chia sẻ',
            onClick: () => {
                navigator.clipboard.writeText(window.location.href);
                alert('Đã copy liên kết chuyến đi!');
            },
        },
        {
            key: 'delete',
            label: 'Xóa',
            onClick: () => {
                alert('Đã xóa chuyến đi này!');
            },
        },
    ];

    return (
        <Card
            className={cx('trip-card')}
            hoverable
            cover={<img alt="Trip thumbnail" src="/wimi1-img.png" className={cx('trip-image')} />}
        >
            <div className={cx('trip-info')}>
                <div className={cx('trip-header')}>
                    <Title level={5} className={cx('trip-title')}>
                        Du lịch vui ver
                    </Title>
                    <Dropdown overlay={<Menu items={menuItems} />} trigger={['click']} placement="bottomRight" arrow>
                        <div className={cx('icon-button')}>
                            <MoreVertical size={20} />
                        </div>
                    </Dropdown>
                </div>
                <Text className={cx('trip-date')}>May 6 → May 9, 2025</Text>
                <Text className={cx('trip-location')}>Hanoi, Amsterdam, & 4 more</Text>
            </div>
        </Card>
    );
}

export default MyTripCard;
