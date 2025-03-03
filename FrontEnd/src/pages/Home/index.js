import classNames from 'classnames/bind';

import styles from './Home.module.scss';

import { Typography } from 'antd';
const { Title } = Typography;


const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')} >Where to?</h1>
        </div>
    )
}

export default Home;
