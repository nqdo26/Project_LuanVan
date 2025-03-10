import classNames from 'classnames/bind';
import { Typography } from 'antd';

import styles from './Home.module.scss';
import SearchBar from '~/components/SearchBar';
import CustomTitle from '~/components/CustomTitle';
import CustomCarousel from '~/components/CustomCarousel';
const { Title } = Typography;


const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <CustomTitle title={"Where to?"} />
            <div className={cx('search-bar')}><SearchBar /></div>
            <div className={cx('carousel')} > <CustomCarousel/></div>
        </div>

    )
}

export default Home;
