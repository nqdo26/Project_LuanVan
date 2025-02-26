import classNames from 'classnames/bind';
import { Layout, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

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
                    <button className={cx('sign-up')} onClick={() => handleNavigate('signUp')}>Sign up</button>
                    <button className={cx('login')} onClick={() => handleNavigate('login')}>Sign in</button>
                </div>
            </Flex>
        </Header>
    );
}

export default Header;
