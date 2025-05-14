import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './AddTrip.module.scss';
import CustomTitle from '~/components/CustomTitle';
import { AimOutlined, EnvironmentOutlined, HeartOutlined, SearchOutlined, TeamOutlined } from '@ant-design/icons';
import { Button, Drawer, Input } from 'antd';
import { useState } from 'react';
import CardSearchDrawer from '~/components/CardSearchDrawer';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const features = [
    {
        icon: <AimOutlined />,
        lines: ['Lên lịch trình cá nhân', 'cùng trợ lý AI thông minh'],
    },
    {
        icon: <HeartOutlined />,
        lines: ['Lưu lại khách sạn, nhà hàng', 'và điểm đến yêu thích'],
    },
    {
        icon: <EnvironmentOutlined />,
        lines: ['Xem thông tin chi tiết của những điểm đến'],
    },
    {
        icon: <TeamOutlined />,
        lines: ['Chia sẻ & đồng hành', 'cùng bạn bè trong mỗi chuyến đi'],
    },
];

function AddTrip() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [tripName, setTripName] = useState('');
    const [destination, setDestination] = useState('');

    const navigate = useNavigate();

    const handleCreateTrip = () => {
        navigate('/trip-detail/hehe');

        setOpenDrawer(false);
        setTripName('');
        setDestination('');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cx('wrapper')}
        >
            <div className={cx('inner')}>
                <CustomTitle title={'Tạo hành trình khám phá riêng của bạn'} size={45} />
                <div className={cx('description')}>
                    <p className={cx('description-text')}>
                        Bạn có thể để AI giúp lên kế hoạch chuyến đi nhanh chóng, hoặc tự tay tạo hành trình theo cách
                        của riêng mình. Dù chọn cách nào, bạn cũng có hơn 8 triệu điểm đến để khám phá và hơn một tỷ
                        đánh giá từ những du khách khác để tham khảo, tha hồ tìm cảm hứng và chuẩn bị cho chuyến đi
                        tuyệt vời sắp tới!
                    </p>
                </div>
                <div className={cx('feature')}>
                    {features.map((item, index) => (
                        <div key={index} className={cx('feature-item')}>
                            <div className={cx('feature-icon')}>{item.icon}</div>
                            <div className={cx('feature-text')}>
                                {item.lines.map((line, i) => (
                                    <div key={i}>{line}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={cx('option')}>
                    <div className={cx('option-item')}>
                        <div className={cx('option-inner')}>
                            <img alt="error" src="/addtrip-img.png" className={cx('option-img')} />
                            <p className={cx('option-title')}>Tạo hành trình của riêng bạn</p>
                            <p className={cx('option-description')}>
                                Tạo hành trình khám phá riêng của bạn với những điểm đến yêu thích.
                            </p>
                            <Button type="primary" className={cx('option-button')} onClick={() => setOpenDrawer(true)}>
                                Bắt đầu ngay
                            </Button>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#dcc8ff' }} className={cx('option-item')}>
                        <div className={cx('option-inner')}>
                            <img alt="error" src="/addtrip-img2.png" className={cx('option-img')} />
                            <p className={cx('option-title')}>Lên kế hoạch nhanh chóng cùng AI</p>
                            <p className={cx('option-description')}>
                                Để AI giúp bạn lên kế hoạch cho chuyến đi của mình một cách nhanh chóng và dễ dàng.
                            </p>
                            <Button type="primary" className={cx('option-button', 'button-ai')}>
                                Sử dụng AI ngay
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Drawer
                placement="right"
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
                width={500}
                className={cx('drawer')}
                header={
                    <div className={cx('drawer-header')}>
                        <h1>heh</h1>
                    </div>
                }
                footer={
                    <div className={cx('drawer-footer')}>
                        <Button className={cx('drawer-button')} onClick={() => setOpenDrawer(false)}>
                            Hủy
                        </Button>
                        <Button className={cx('drawer-button', 'button-add')} onClick={handleCreateTrip}>
                            Tạo hành trình
                        </Button>
                    </div>
                }
            >
                <div className={cx('drawer-inner')}>
                    <p className={cx('drawer-title')}>Tạo hành trình mới</p>
                    <div className={cx('drawer-group')}>
                        <p className={cx('drawer-label')}>Tên hành trình</p>
                        <Input
                            placeholder="Chuyến du lịch Cần Thơ cùng gia đình"
                            maxLength={80}
                            value={tripName}
                            onChange={(e) => setTripName(e.target.value)}
                            className={cx('drawer-input')}
                        />
                    </div>
                    <div className={cx('drawer-group')}>
                        <p className={cx('drawer-label')}>Địa điểm</p>
                        <Input
                            prefix={<SearchOutlined />}
                            placeholder="Chuyến du lịch Cần Thơ cùng gia đình"
                            maxLength={80}
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className={cx('drawer-input', 'drawer-search')}
                        />
                        <div className={cx('drawer-search-result')}>
                            <div className={cx('result-list')}>
                                <CardSearchDrawer
                                    city="Cần Thơ"
                                    region="Thành phố nực nhất miền Tây"
                                    image="/wimi2-img.png"
                                />
                                <CardSearchDrawer
                                    city="Cần Thơ"
                                    region="Thành phố nực nhất miền Tây"
                                    image="/wimi2-img.png"
                                />
                                <CardSearchDrawer
                                    city="Cần Thơ"
                                    region="Thành phố nực nhất miền Tây"
                                    image="/wimi2-img.png"
                                />
                                <CardSearchDrawer
                                    city="Cần Thơ"
                                    region="Thành phố nực nhất miền Tây"
                                    image="/wimi2-img.png"
                                />
                                <CardSearchDrawer
                                    city="Cần Thơ"
                                    region="Thành phố nực nhất miền Tây"
                                    image="/wimi2-img.png"
                                />
                                <CardSearchDrawer
                                    city="Cần Thơ"
                                    region="Thành phố nực nhất miền Tây"
                                    image="/wimi2-img.png"
                                />
                                <CardSearchDrawer
                                    city="Cần Thơ"
                                    region="Thành phố nực nhất miền Tây"
                                    image="/wimi2-img.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </motion.div>
    );
}

export default AddTrip;
