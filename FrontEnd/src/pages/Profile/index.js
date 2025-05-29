import classNames from 'classnames/bind';

import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    return <h1 className={cx('hehe')}>Profile Page</h1>;
}

export default Profile;
