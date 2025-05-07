import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './CityDetail.module.scss';
import CityGallery from '~/components/CityGallery';
import CustomNav from '~/components/CustomNav';
import WeatherInfo from '~/components/WeatherInfo';
import CitySideBar from '~/components/CitySideBar';

const cx = classNames.bind(styles);

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
                    <h1 className={cx('title')}>Vài nét về Hà Nội</h1>
                    <div className={cx('info')}>
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
                    <h1 className={cx('title')}>Các địa điểm và tour du lịch ở Hà Nội</h1>
                    <div className={cx('destination')}>
                        <div className={'sidebar'}>
                            <CitySideBar />
                        </div>
                        <div className={cx('list')}></div>
                    </div>
                    <h1 className={cx('title')}>Thông tin hữu ích</h1>
                    <div className={cx('weather')}>
                        <WeatherInfo />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default CityDetail;
