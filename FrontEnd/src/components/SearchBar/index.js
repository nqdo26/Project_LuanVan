import { SearchOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

function SearchBar() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/search');
    };

    return (
        <motion.div
            className={cx('search-bar')}
            onClick={handleNavigate}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div 
                className={cx('search-icon')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <SearchOutlined  style={{
                    padding: '6px 7px'
                }} />
            </motion.div>
            <span className={cx('search-text')}>Tìm kiếm địa điểm, quán ăn, quán cà phê...</span>
        </motion.div>
    );
}

export default SearchBar;
