import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import FilterTabs from '~/components/SearchFilterTabs';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import SearchSidebar from '~/components/SearchSidebar';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filtertab')}><FilterTabs className={cx('nav')} searchTitle="Wimi Factory" /></div>
            <div className={cx('inner')}>
                <div className={cx('sidebar')} ><SearchSidebar/></div>
                <div className={cx('content-wrapper')}>
                    <div className={cx('content')} >hehe</div>
                </div>

            </div>
        </div>
    );
}

export default Search;
