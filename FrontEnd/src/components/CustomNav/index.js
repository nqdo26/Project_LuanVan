import { InfoCircleTwoTone, EnvironmentTwoTone, CalendarTwoTone } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './CustomNav.module.scss';

const cx = classNames.bind(styles);
const navItems = [
    { icon: <InfoCircleTwoTone twoToneColor="#1890ff" className={cx('icon')} />, label: 'Giới thiệu' },
    { icon: <EnvironmentTwoTone twoToneColor="#00b96b" className={cx('icon')} />, label: 'Danh sách địa điểm' },
    { icon: <CalendarTwoTone twoToneColor="#faad14" className={cx('icon')} />, label: 'Tour du lịch' },
];

function CustomNav() {
    return (
        <div className={cx('wrapper')}>
            {navItems.map((item, index) => (
                <div key={index} className={cx('item')} aria-label={item.label}>
                    {item.icon}
                    <span className={cx('label')}>{item.label}</span>
                </div>
            ))}
        </div>
    );
}

export default CustomNav;
