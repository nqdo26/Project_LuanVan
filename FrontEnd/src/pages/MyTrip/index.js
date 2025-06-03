import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './MyTrip.module.scss';
import MyTripCard from '~/components/MyTripCard';

const cx = classNames.bind(styles);

function MyTrip() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cx('wrapper')}
        >
            <h1 className={cx('title')}>Lịch trình của bạn</h1>
            <MyTripCard />
        </motion.div>
    );
}

export default MyTrip;
