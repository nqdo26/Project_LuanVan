import classNames from 'classnames/bind';
import { Layout, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './HeaderSearchResultLayout.module.scss';

function HeaderSearchResultLayout() {
    const cx = classNames.bind(styles);
    const { HeaderSearchResultLayout } = Layout;
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate('/' + path);
    };

    return (
        <HeaderSearchResultLayout className={cx('wrapper')}>
            <Flex justify="space-between" className={cx('inner')}>
                <div className={cx('logo')} onClick={() => handleNavigate('')}>
                    <img src="/logo.png" alt="documan" />
                </div>

                <nav className={cx('menu')}>
                    {[
                        { label: 'Trang chủ', path: '' },
                        { label: 'Tìm kiếm', path: 'search' },
                        { label: 'Địa điểm', path: 'admin' },
                        { label: 'Lịch trình', path: 'hehe' },
                        { label: 'AI Chatbox', path: 'hehe' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className={cx('menu-item')}
                            onClick={() => handleNavigate(item.path)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.label}
                        </motion.div>
                    ))}
            </nav>
                <div className={cx('button-group')}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <button className={cx('sign-up')} onClick={() => handleNavigate('signUp')}>Sign up</button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <button className={cx('login')} onClick={() => handleNavigate('login')}>Sign in</button>
                    </motion.div>
                </div>
            </Flex>
        </HeaderSearchResultLayout>
    );
}

export default HeaderSearchResultLayout;
