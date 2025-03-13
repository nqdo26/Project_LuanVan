import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import FilterTabs from '~/components/SearchFilterTabs';
import SearchSidebar from '~/components/SearchSidebar';
import ResultSorter from '~/components/ResultSorter';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
                <div className={cx('filtertab')}><FilterTabs className={cx('nav')} searchTitle="Wimi Factory" /></div>
                <div className={cx('inner-wrapper')}>
                    <div className={cx('inner')}>
                        <div className={cx('sidebar')} ><SearchSidebar/></div>
                        <div className={cx('content-wrapper')}>
                            <div className={cx('content')} >
                                <ResultSorter />
                                

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}   

export default Search;
