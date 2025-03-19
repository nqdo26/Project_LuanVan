import classNames from 'classnames/bind';

import styles from './DestinationDetails.module.scss';
import DestinationDetailPageHeader from '~/components/DestinationDetailPageHeader';


const cx = classNames.bind(styles);

function DestinationDetails() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}><DestinationDetailPageHeader/></div>
                <h1>DestinationDetails Page</h1>
            </div>
        </div>
    )
}

export default DestinationDetails;
