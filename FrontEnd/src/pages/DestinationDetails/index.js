import classNames from 'classnames/bind';

import styles from './DestinationDetails.module.scss';
import DestinationDetailPageHeader from '~/components/DestinationDetailPageHeader';
import DestinationGallery from '~/components/DestinationGallery';
import DestinationNav from '~/components/DestinationNav';


const cx = classNames.bind(styles);

function DestinationDetails() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}><DestinationDetailPageHeader/></div>
                <div className={cx('body')}>
                    <DestinationGallery type="restaurant" />
                    <DestinationNav />
                    
                </div>

            </div>
        </div>  
    )
}

export default DestinationDetails;
