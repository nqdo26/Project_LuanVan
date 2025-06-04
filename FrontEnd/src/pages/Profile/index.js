import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import HeaderProfilePage from '~/components/HeaderProfilePage';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <HeaderProfilePage />
            </div>
            <div className={cx('body')}></div>
        </div>
    );
}

export default Profile;
