import classNames from 'classnames/bind';
import styles from './TripDetail.module.scss';
import TripHeader from '~/components/TripHeader';

const cx = classNames.bind(styles);

function TripDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <TripHeader />
            </div>
        </div>
    );
}

export default TripDetail;
