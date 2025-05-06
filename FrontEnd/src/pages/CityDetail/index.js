import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './CityDetail.module.scss';
import DestinationOverview from '~/components/DestinationOverview';
import CustomComment from '~/components/CustomComment';
import { Tabs } from 'antd';
import CityGallery from '~/components/CityGallery';

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
                    <Tabs
                        className={cx('tabs')}
                        onChange={scrollToSection}
                        items={items.map(({ key, label }) => ({
                            key,
                            label: <span className={cx('tab-item')}>{label}</span>,
                        }))}
                    />
                    <div id="description">
                        <DestinationOverview />
                    </div>
                    <div id="rate">
                        <CustomComment />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default CityDetail;
