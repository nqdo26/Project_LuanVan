import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import SearchBar from '~/components/SearchBar';
import CustomTitle from '~/components/CustomTitle';
import ImageCarousel from '~/components/ImageCarousel';
import ChatBoxIntro from '~/components/ChatBoxIntro';
import DestinationCard from '~/components/DestinationCard';
import CustomCarousel from '~/components/CustomCarousel';
import PlaceCard from '~/components/PlaceCard';
import Category from '~/components/Category';


const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
                <CustomTitle title={"Where to?"} />
                <div className={cx('search-bar')}><SearchBar /></div>
                <div className={cx('carousel')} > <ImageCarousel/></div>
                <div className={cx('chatbox-intro')}><ChatBoxIntro /></div>
                <div className={cx('carousel')} >
                    <CustomCarousel
                        title="Điểm đến phổ biến" 
                        number={4}
                        card={<DestinationCard />} 
                    />
                </div>
                <div className={cx('category')}><Category/></div>
                <div className={cx('carousel')} >
                    <CustomCarousel
                        title="Địa điểm tiếp theo" 
                        number={6}
                        card={
                            <PlaceCard 
                                image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" 
                                title="Bà Rịa Vũng Tàu Lao" 
                            />} 
                    />
                </div>

        </div>


    )
}

export default Home;
