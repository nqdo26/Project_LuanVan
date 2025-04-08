import classNames from 'classnames/bind';

import styles from './PlaceDetails.module.scss';
import DestinationDetailPageHeader from '~/components/DestinationDetailPageHeader';
import DestinationGallery from '~/components/DestinationGallery';
import DestinationOverview from '~/components/DestinationOverview';
import CustomComment from '~/components/CustomComment';
import { Tabs } from 'antd';

const cx = classNames.bind(styles);

const items = [
    { key: 'description', label: 'Tổng quan' },
    { key: 'location', label: 'Vị trí' },
    { key: 'comments', label: 'Bình luận' },
];

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function PlaceDetails() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <DestinationDetailPageHeader title="Bến Ninh Kiều" />
                </div>
                <div className={cx('body')}>
                    <DestinationGallery type="hehe" />
                    <Tabs
                        className={cx('tabs')}
                        onChange={scrollToSection}
                        items={items.map(({ key, label }) => ({
                            key,
                            label: <span className={cx('tab-item')}>{label}</span>,
                        }))}
                    />
                    <DestinationOverview />
                    <CustomComment id="comments" />
                </div>
            </div>
        </div>
    );
}

export default PlaceDetails;
