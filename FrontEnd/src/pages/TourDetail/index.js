import classNames from 'classnames/bind';
import styles from './TourDetail.module.scss';
import DestinationGallery from '~/components/DestinationGallery';
import DestinationOverview from '~/components/DestinationOverview';
import CustomComment from '~/components/CustomComment';
import { Tabs } from 'antd';
import TourDetailPageHeader from '~/components/TourDetailPageHeader';

const cx = classNames.bind(styles);

const items = [
    { key: 'description', label: 'Tổng quan' },
    { key: 'rate', label: 'Đánh giá' },
];

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function TourDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <TourDetailPageHeader title="Hành trình săn mây, hái dâu, ngắm hoa, cưỡi ngựa, uống sữa, cắm trại, đốt lửa, lạc lối giữa Đà Lạt mộng mơ trong 3N2Đ không ngủ!" />
                </div>
                <div className={cx('body')}>
                    <DestinationGallery type="restaurant" />
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
        </div>
    );
}

export default TourDetail;
