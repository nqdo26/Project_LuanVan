import classNames from 'classnames/bind';
import { Layout, Flex, Modal, Button, Avatar, Dropdown, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styles from './Header.module.scss';

function Header() {
    const cx = classNames.bind(styles);
    const { Header } = Layout;
    const navigate = useNavigate();

    const user = {
        isAdmin: false,
        logginedIn: true,
    };

    const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
    const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNavigate = (path) => {
        navigate('/' + path);
        window.scrollTo(0, 0);
    };

    const handleMenuClick = ({ key }) => {
        if (key === 'logout') {
            console.log('Đăng xuất');
        } else {
            navigate('/' + key);
            window.scrollTo(0, 0);
        }
    };

    const dropdownItems = [
        { key: 'profile', label: <span className={cx('menu-avt-item')}>Thông tin cá nhân</span> },
        { key: 'schedule', label: <span className={cx('menu-avt-item')}>Lên lịch trình</span> },
        { type: 'divider' },
        { key: 'logout', label: <span className={cx('menu-avt-item')}>Đăng xuất</span> },
    ];

    const searchDropdownItems = [
        { key: 'add-trip', label: 'Tạo lịch trình mới' },
        { key: 'my-trip', label: 'Hành trình cá nhân' },
        { key: 'ai-plan', label: 'Tạo lịch trình với AI' },
    ];

    const handleSearchMenuClick = ({ key }) => {
        if (key === 'add-trip') {
            navigate('/add-trip');
        } else if (key === 'ai-plan') {
            navigate('/gobot-assistant');
        } else if (key === 'my-trip') {
            navigate('/my-trip');
        }
        window.scrollTo(0, 0);
    };

    const handleLoginSubmit = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        setIsModalLoginOpen(false);
    };

    return (
        <Header className={cx('wrapper')}>
            <Flex justify="space-between" className={cx('inner')}>
                <div className={cx('logo')} onClick={() => handleNavigate('')}>
                    <img src="/logo.png" alt="documan" />
                    <span className={cx('title')}>GoOhNo</span>
                </div>

                <nav className={cx('menu')}>
                    {[
                        { label: 'Trang chủ', path: '' },
                        { label: 'Tìm kiếm', path: 'search' },
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

                    <Dropdown
                        trigger={['hover']}
                        placement="bottom"
                        menu={{ items: searchDropdownItems, onClick: handleSearchMenuClick }}
                    >
                        <motion.div
                            className={cx('menu-item')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ cursor: 'pointer' }}
                        >
                            Lịch trình
                        </motion.div>
                    </Dropdown>
                </nav>

                <div className={cx('button-group')}>
                    {user.isAdmin && (
                        <button className={cx('admin-button')} color="pink" variant="solid">
                            Mục quản lý
                        </button>
                    )}

                    {!user.logginedIn ? (
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <button className={cx('login')} onClick={() => setIsModalLoginOpen(true)}>
                                Đăng nhập
                            </button>
                        </motion.div>
                    ) : (
                        <Dropdown
                            trigger={['hover']}
                            placement="bottomRight"
                            menu={{ items: dropdownItems, onClick: handleMenuClick }}
                            dropdownClassName={cx('dropdown-menu')}
                        >
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Avatar
                                    size={40}
                                    icon={<UserOutlined />}
                                    className={cx('avatar')}
                                    style={{ cursor: 'pointer' }}
                                />
                            </motion.div>
                        </Dropdown>
                    )}
                </div>
            </Flex>

            <Modal
                open={isModalLoginOpen}
                onCancel={() => setIsModalLoginOpen(false)}
                footer={null}
                className={cx('login-modal')}
                centered
                destroyOnClose
                width={400}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={cx('modal-content')}
                >
                    <div className={cx('modal-logo')}>
                        <img className={cx('logo')} src="/logo.png" alt="GoOhNo" />
                        <span className={cx('title')}>GoOhNo</span>
                    </div>
                    <p className={cx('modal-title')}>Đăng nhập</p>
                    <div className={cx('login-form')}>
                        <Input
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={cx('login-input')}
                            style={{ marginBottom: 20 }}
                        />
                        <Input.Password
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={cx('login-input')}
                            style={{ marginBottom: 20 }}
                        />
                        <div
                            className={cx('register-link')}
                            onClick={() => {
                                setIsModalLoginOpen(false);
                                setIsModalRegisterOpen(true);
                            }}
                        >
                            <span>
                                Chưa có tài khoản? <strong>Đăng ký ngay</strong>
                            </span>
                        </div>
                        <Button className={cx('login-button', 'submit')} onClick={handleLoginSubmit} block>
                            Đăng nhập
                        </Button>
                    </div>
                </motion.div>
            </Modal>

            {/* Modal Đăng ký */}
            <Modal
                open={isModalRegisterOpen}
                onCancel={() => setIsModalRegisterOpen(false)}
                footer={null}
                className={cx('login-modal')}
                centered
                destroyOnClose
                width={400}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={cx('modal-content')}
                >
                    <div className={cx('modal-logo')}>
                        <img className={cx('logo')} src="/logo.png" alt="GoOhNo" />
                        <span className={cx('title')}>GoOhNo</span>
                    </div>
                    <p className={cx('register-title')}>Đăng ký</p>
                    <div className={cx('login-form')}>
                        <Input placeholder="Họ và tên" className={cx('login-input')} style={{ marginBottom: 20 }} />
                        <Input placeholder="Email" className={cx('login-input')} style={{ marginBottom: 20 }} />
                        <Input.Password
                            placeholder="Mật khẩu"
                            className={cx('login-input')}
                            style={{ marginBottom: 20 }}
                        />
                        <Input.Password
                            placeholder="Xác nhận mật khẩu"
                            className={cx('login-input')}
                            style={{ marginBottom: 30 }}
                        />
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Button className={cx('register-button')} type="primary" block style={{ flex: 1 }}>
                                Đăng ký
                            </Button>
                            <Button
                                block
                                style={{ flex: 1 }}
                                onClick={() => {
                                    setIsModalRegisterOpen(false);
                                    setIsModalLoginOpen(true);
                                }}
                                className={cx('back-button')}
                            >
                                Trở về đăng nhập
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </Modal>
        </Header>
    );
}

export default Header;
