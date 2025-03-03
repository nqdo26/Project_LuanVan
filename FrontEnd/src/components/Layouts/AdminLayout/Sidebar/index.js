import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { Button, Card, Layout, Menu, Avatar, Flex } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogoutOutlined, PlusOutlined, EnvironmentOutlined, GlobalOutlined, UserOutlined } from '@ant-design/icons';

import styles from './Sidebar.module.scss';

function Sidebar() {
    const cx = classNames.bind(styles);
    const navigate = useNavigate();
    const location = useLocation();
    const { Sider } = Layout;
    const { Meta } = Card;
    

    const menuItems = [
        {
            key: 'statistics',
            label: 'Quản lý người dùng',
            icon: <UserOutlined />, 
            path: '/admin/users-manage',
        },
        {
            key: 'provinces',
            label: 'Danh sách tỉnh thành',
            icon: <EnvironmentOutlined />,
            path: '/admin/places-manage',
        },
        {
            key: 'tourist-spots',
            label: 'Danh sách địa điểm',
            icon: <GlobalOutlined />, 
            path: '/admin/destinations-manage',
        },
    ];
    

    const handleOnclick = (e) => {
        const item = menuItems.find((item) => item.key === e.key);
        if (item) {
            navigate(item.path);
        }
    };

    const handleNewDoc = () => {
        navigate('/new-doc');
    };

    const selectedKey = menuItems.find((item) => item.path === location.pathname)?.key;

    return (
        <Sider style={{ position: 'fixed', backgroundColor: '#ccc' }} width="300px" className={cx('wrapper')}>
            <Flex vertical justify="space-between" style={{ height: '100%' }}>
                <div>
                    <Card
                        style={{
                            width: 300,
                            borderRadius: '0',
                        }}
                        actions={[
                            <div className={cx('action')}>
                                <motion.div 
                                    whileHover={{ scale: 1.1}} 
                                    whileTap={{ scale: 0.9}}
                                >
                                    <Button 
                                        style={{
                                            backgroundColor: '#1890ff',
                                            color: 'white',
                                        }} 
                                        onClick={handleNewDoc}
                                    >
                                        <PlusOutlined /> Thêm tỉnh mới
                                    </Button>
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.1 }} 
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Button style={{
                                        backgroundColor: '#52c41a',
                                        color: 'white',
                                    }} onClick={handleNewDoc}>
                                        <PlusOutlined /> Thêm địa điểm mới
                                    </Button>
                                </motion.div>
                            </div>
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            title="Admin"
                            description="This is the description"
                        />
                    </Card>
                    <Menu mode="inline" items={menuItems} onClick={handleOnclick} selectedKeys={[selectedKey]} />
                </div>

                <Menu
                    mode="inline"
                    items={[
                        {
                            key: 'logout',
                            label: 'Đăng xuất',
                            icon: <LogoutOutlined />,
                        },
                    ]}
                />
            </Flex>
        </Sider>
    );
}

export default Sidebar;
