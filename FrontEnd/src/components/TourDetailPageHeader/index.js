import { Button, Rate } from 'antd';
import { HeartOutlined, EnvironmentOutlined, ShareAltOutlined, PlusOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './TourDetailPageHeader.module.scss';

const cx = classNames.bind(styles);

const badges = ['Văn hóa', 'Ẩm thực', 'Chụp hình', 'Gia đình', 'Cặp đôi', 'Bạn bè'];

function TourDetailPageHeader({ title }) {
    return (
        <div className={cx('destination-header')}>
            <div className={cx('location')}>
                <EnvironmentOutlined className={cx('location-icon')} />
                <span className={cx('location-name')}>Thành phố Đà Lạt</span>
            </div>
            <h2 className={cx('title')}>{title}</h2>

            <div className={cx('review-section')}>
                <div className={cx('badge-container')}>
                    {badges.map((badge, index) => (
                        <span key={index} className={cx('badge')}>
                            {badge}
                        </span>
                    ))}
                </div>
                <div className={cx('action')}>
                    <Button icon={<HeartOutlined />} className={cx('save-btn')}>
                        Lưu
                    </Button>

                    <Button icon={<PlusOutlined />} className={cx('save-btn')}>
                        Tạo lịch trình tương tự
                    </Button>
                    <Button icon={<ShareAltOutlined />} className={cx('share-btn')}>
                        Chia sẻ
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default TourDetailPageHeader;
