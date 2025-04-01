import classNames from 'classnames/bind';

import styles from './DestinationDetails.module.scss';
import DestinationDetailPageHeader from '~/components/DestinationDetailPageHeader';
import DestinationGallery from '~/components/DestinationGallery';
import DestinationOverview from '~/components/DestinationOverview';
import CustomComment from '~/components/CustomComment';

const cx = classNames.bind(styles);

function DestinationDetails() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <DestinationDetailPageHeader />
                </div>
                <div className={cx('body')}>
                    <DestinationGallery type="restaurant" />
                    <DestinationOverview />
                    <CustomComment
                        author="Nomad49633624224"
                        avatar="https://joesch.moe/api/v1/random"
                        content="We arrived on a Friday night. It was very busy but the staff were super efficient..."
                        rating={5}
                        datetime="February 22, 2025"
                        likes={0}
                    />
                </div>
            </div>
        </div>
    );
}

export default DestinationDetails;
