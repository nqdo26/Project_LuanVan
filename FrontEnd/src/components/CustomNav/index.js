import { InfoCircleTwoTone, EnvironmentTwoTone, CalendarTwoTone, CloudTwoTone } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './CustomNav.module.scss';

const cx = classNames.bind(styles);
const navItems = [
    { icon: <InfoCircleTwoTone twoToneColor="#52c41a" className={cx('icon')} />, label: 'Giới thiệu' }, 
    { icon: <CloudTwoTone twoToneColor="#40a9ff" className={cx('icon')} />, label: 'Thời tiết' }, 
    { icon: <EnvironmentTwoTone twoToneColor="#fa541c" className={cx('icon')} />, label: 'Địa điểm' }, 
    { icon: <CalendarTwoTone twoToneColor="#722ed1" className={cx('icon')} />, label: 'Tour' }, 
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
