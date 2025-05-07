import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './CityDetail.module.scss';
import DestinationOverview from '~/components/DestinationOverview';
import CustomComment from '~/components/CustomComment';
import { Tabs } from 'antd';
import CityGallery from '~/components/CityGallery';
import CustomNav from '~/components/CustomNav';
import WeatherInfo from '~/components/WeatherInfo';

const cx = classNames.bind(styles);

const items = [
    { key: 'description', label: 'Tổng quan' },
    { key: 'rate', label: 'Đánh giá' },
];

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function CityDetail() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cx('wrapper')}
        >
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <CityGallery />
                </div>
                <div className={cx('body')}>
                    <div className={cx('nav')}>
                        <CustomNav />
                    </div>
                    <div className={cx('info')}>
                        <h1 className={cx('title')}>Vài nét về Hà Nội</h1>
                        <p className={cx('description')}>
                            Hà Nội, thủ đô của Việt Nam, một thành phố của truyền thống và lịch sử một thành phố của
                            truyền thống và lịch sử một thành phố của truyền thống và lịch sử một thành phố của truyền
                            thống và lịch sử một thành phố của truyền thống và lịch sử một thành phố của truyền thống và
                            lịch sử một thành phố của truyền thống và lịch sửHà Nội, thủ đô của Việt Nam, một thành phố
                            của truyền thống và lịch sử một thành phố của truyền thống và lịch sử một thành phố của
                            truyền thống và lịch sử một thành phố của truyền thống và lịch sử một thành phố của truyền
                            thống và lịch sử một thành phố của truyền thống và lịch sử một thành phố của truyền thống và
                            lịch sửHà Nội, thủ đô của Việt Nam, một thành phố của truyền thống và lịch sử một thành phố
                            của truyền thống và lịch sử một thành phố của truyền thống và lịch sử một thành phố của
                            truyền thống và lịch sử một thành phố của truyền thống và lịch sử một thành phố của truyền
                            thống và lịch sử một thành phố của truyền thống và lịch sử
                        </p>
                    </div>
                    <div className={cx('weather')} >
                    <h1 className={cx('title')}>Thông tin hữu ích</h1>
                        <WeatherInfo/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default CityDetail;
