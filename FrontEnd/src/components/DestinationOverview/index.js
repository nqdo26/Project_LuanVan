import { Tabs } from 'antd';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DestinationOverview.module.scss';

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
                    <div id="description" className={cx('description')}>
                        <h2 className={cx('title')}>Wimi-Factory, quán và phê nóng nực nhất Cần Thơ.</h2>
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
                </div>
                <div className={cx('action')}>
                    <div className={cx('save')}>
                        <h2 className={cx('title')}>Lưu ngay địa điểm yêu thích</h2>
                    </div>
                    <div className={cx('comment')}>
                        <h2 className={cx('title')}>Để lại cảm nhận của bạn về nơi này</h2>
                    </div>
                    <div className={cx('share')}>
                        <h2 className={cx('title')}>Chia sẻ trải nghiệm với bạn bè</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationOverview;
