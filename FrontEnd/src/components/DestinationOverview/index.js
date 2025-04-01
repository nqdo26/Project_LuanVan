import { Button, Tabs } from 'antd';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DestinationOverview.module.scss';
import {
    AppstoreFilled,
    BulbFilled,
    CheckOutlined,
    ClockCircleFilled,
    ClockCircleOutlined,
    EditOutlined,
    EnvironmentFilled,
    EnvironmentOutlined,
    FacebookFilled,
    FireFilled,
    GlobalOutlined,
    HeartOutlined,
    HomeFilled,
    InstagramFilled,
    PhoneFilled,
    PlusCircleOutlined,
    ShareAltOutlined,
    StarOutlined,
} from '@ant-design/icons';

const cx = classNames.bind(styles);

function DestinationOverview() {
    const [showMore, setShowMore] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const items = [
        { key: 'description', label: 'Tổng quan' },
        { key: 'location', label: 'Vị trí' },
        { key: 'comments', label: 'Bình luận' },
    ];

    const toggleShowMore = () => {
        setShowMore((prev) => !prev);
    };

    return (
        <div className={cx('wrapper')}>
            <Tabs
                className={cx('tabs')}
                onChange={scrollToSection}
                items={items.map(({ key, label }) => ({
                    key,
                    label: <span className={cx('tab-item')}>{label}</span>,
                }))}
            />

            <div className={cx('overview-and-action')}>
                <div className={cx('overview')}>
                    <div id="description" className={cx('overview-item')}>
                        <h2 className={cx('title')}>Giới thiệu</h2>
                        <div className={cx('content', { expanded: showMore })}>
                            Tọa lạc tại trung tâm thành phố, Wimi-Factory không chỉ là một quán cà phê mà còn là một
                            điểm đến lý tưởng cho những ai yêu thích không gian sáng tạo và hiện đại. Với thiết kế tinh
                            tế, kết hợp hài hòa giữa phong cách công nghiệp và nét mềm mại của thiên nhiên, Wimi-Factory
                            mang đến một không gian vừa ấm cúng, vừa chuyên nghiệp. Quán được chia thành nhiều khu vực
                            riêng biệt, phù hợp với các nhu cầu khác nhau của khách hàng. Nếu bạn đang tìm kiếm một góc
                            yên tĩnh để học tập hay làm việc, khu bàn đơn và bàn nhóm với hệ thống đèn chiếu sáng dịu
                            nhẹ, ổ cắm điện tiện lợi sẽ là lựa chọn hoàn hảo. Đặc biệt, không gian tại Wimi-Factory luôn
                            tràn ngập ánh sáng tự nhiên, giúp tinh thần bạn luôn sảng khoái và tập trung.
                        </div>
                        <button onClick={toggleShowMore} className={cx('show-more-btn')}>
                            {showMore ? 'Thu gọn' : 'Xem thêm'}
                        </button>
                    </div>

                    <div className={cx('overview-item')}>
                        <h2 className={cx('title')}>Điểm nổi bật tại Wimi-Factory</h2>
                        <ul className={cx('list')}>
                            <li className={cx('list-item')}>
                                <FireFilled style={{ color: '#FF0000' }} /> Không gian lớn
                            </li>
                            <li className={cx('list-item')}>
                                <FireFilled style={{ color: '#FF0000' }} /> Cà phê ngon
                            </li>
                        </ul>
                    </div>
                    <div className={cx('overview-item')}>
                        <h2 className={cx('title')}>Dịch vụ tiện ích</h2>
                        <ul className={cx('list')}>
                            <li className={cx('list-item')}>
                                <CheckOutlined style={{ color: '#1890ff' }} /> Wifi miễn phí
                            </li>
                            <li className={cx('list-item')}>
                                <CheckOutlined style={{ color: '#1890ff' }} /> Đỗ xe miễn phí
                            </li>
                            <li className={cx('list-item')}>
                                <CheckOutlined style={{ color: '#1890ff' }} /> Thẻ thành viên
                            </li>
                        </ul>
                    </div>

                    <div className={cx('overview-item')}>
                        <h2 className={cx('title')}>Không gian</h2>
                        <div className={cx('content')}>
                            <p>Phù hợp với nhóm 1-20 người.</p>
                        </div>
                    </div>

                    <div className={cx('overview-item')}>
                        <h2 className={cx('title')}>Thời gian mở cửa</h2>
                        <ul className={cx('list')}>
                            <li style={{ color: '#52c41a' }} className={cx('list-item', 'opening-status')}>
                                <ClockCircleOutlined /> Đang mở cửa
                            </li>
                            <li className={cx('list-item')}>Thứ 2 - Thứ 6: 8:00 - 22:00</li>
                            <li className={cx('list-item')}>Thứ 7 - Chủ nhật: 9:00 - 23:00</li>
                        </ul>
                    </div>

                    <div  className={cx('overview-item')}>
                        <h2 className={cx('title')}>Địa chỉ & Thông tin liên hệ</h2>

                        <p className={cx('address')}>
                            <EnvironmentOutlined style={{ color: 'black' }} /> Wimi-Factory, 123 Đường ABC, Quận 1,
                            TP.HCM
                        </p>
                        <div className={cx('contact')}>
                            <p className={cx('contact-item')}>
                                <FacebookFilled style={{ color: '#4267B2' }} /> Facebook
                            </p>
                            <p className={cx('contact-item')}>
                                <InstagramFilled style={{ color: '#E4405F' }} /> Instagram
                            </p>
                            <p className={cx('contact-item')}>
                                <GlobalOutlined style={{ color: '#1890ff' }} /> Website
                            </p>
                            <p className={cx('contact-item')}>
                                <PhoneFilled style={{ color: '#52c41a' }} /> 0123 456 789
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('action')}>
                    <div className={cx('action-items')}>
                        <h2 className={cx('title')}>Thêm địa điểm vào lịch trình của bạn</h2>
                        <Button icon={<PlusCircleOutlined />} className={cx('button')} type="primary" size="large">
                            Thêm địa điểm
                        </Button>
                    </div>
                    <div className={cx('action-items')}>
                        <Button icon={<HeartOutlined />} className={cx('button')} type="primary" size="large">
                            Lưu địa điểm
                        </Button>
                        <Button icon={<EditOutlined />} className={cx('button')} type="primary" size="large">
                            Viết đánh giá
                        </Button>
                        <Button icon={<ShareAltOutlined />} className={cx('button')} type="primary" size="large">
                            Chia sẻ địa điểm
                        </Button>
                    </div>
                    <div id="location" className={cx('action-items')}>
                        <h2 className={cx('title')}>Vị trí</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationOverview;
