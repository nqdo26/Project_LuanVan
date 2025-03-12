import classNames from 'classnames/bind';
import styles from './SearchResultLayout.module.scss';
import { Layout } from 'antd';
import CustomFooter from '../components/Footer/CustomFooter';
import HeaderSearchResultLayout from './HeaderSearchResultLayout';

function SearchResultLayout({ children }) {
    const { Content } = Layout;

    const cx = classNames.bind(styles);
    return (
        <Layout style={{
            backgroundColor: 'white',
        }} className={cx('wrapper')}>
                    <HeaderSearchResultLayout className={cx('header')} />
                    <div className={cx('content')}>
                       {children}
                    </div>
                    <CustomFooter />
        </Layout>
    );
}

export default SearchResultLayout;
