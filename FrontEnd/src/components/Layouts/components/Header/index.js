import classNames from 'classnames/bind';
import { Layout, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


import styles from './Header.module.scss';

function Header() {
    const cx = classNames.bind(styles);
    const { Header } = Layout;
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate('/' + path);
    };

    return (
        <Header className={cx('wrapper')}>
            <Flex justify="space-between" className={cx('inner')}>
                <div className={cx('logo')} onClick={() => handleNavigate('')}>
                    <img src="/logo.png" alt="documan" />
                </div>

                <div className={cx('menu')}>
                    
                </div>

                <div className={cx('button-group')}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <button className={cx('sign-up')} onClick={() => handleNavigate('signUp')}>Sign up</button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <button className={cx('login')} onClick={() => handleNavigate('login')}>Sign in</button>
                    </motion.div>
                </div>
            </Flex>
        </Header>
    );
}

export default Header;
