import React, { useState } from 'react';
import { Avatar, Rate, List, Select, Progress } from 'antd';
import classNames from 'classnames/bind';
import styles from './CustomComment.module.scss';

const cx = classNames.bind(styles);

function CustomComment() {
    const [filter, setFilter] = useState('newest');

    const reviews = [
        {
            author: 'Nomad49633624224',
            avatar: 'https://via.placeholder.com/50',
            rating: 5,
            landscape: 4.5,
            service: 4.7,
            price: 4.2,
            cleanliness: 5,
            convenience: 4.3,
            activities: 4.6,
            date: 'Feb 2025 • Couples',
            content:
                'We arrived on a Friday night. It was very busy but the staff were super efficient. We went with the all you can eat option. Absolutely everything was delicious.',
        },
        {
            author: 'TravelLover2025',
            avatar: 'https://via.placeholder.com/50',
            rating: 4,
            landscape: 4.0,
            service: 4.3,
            price: 4.1,
            cleanliness: 4.5,
            convenience: 4.2,
            activities: 4.3,
            date: 'Jan 2025 • Family',
            content:
                'Great experience, but the place could use a little more seating. The food was amazing, and the staff was very friendly.',
        },
    ];

    // Count the number of reviews for each rating level
    const ratingCount = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
    };

    reviews.forEach((review) => {
        const roundedRating = Math.round(review.rating);
        ratingCount[roundedRating]++;
    });

    const totalReviews = reviews.length;

    const handleFilterChange = (value) => {
        setFilter(value);
    };

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Nhận xét & Đánh giá</h3>
            <div className={cx('custom-comment')}>
                <div className={cx('custom-comment-sidebar')}>
                    <div className={cx('custom-comment-rating')}>
                        <div className={cx('rating')}>
                            <span>4.3</span>
                            <Rate allowHalf disabled defaultValue={4.3} />
                        </div>
                        <p className={cx('total-review')}>({totalReviews})</p>
                    </div>

                    <div className={cx('rating-levels')}>
                        <p>Rất tốt</p>
                        <Progress percent={(ratingCount[5] / totalReviews) * 100} showInfo={false} />
                        <p>Tốt</p>
                        <Progress percent={(ratingCount[4] / totalReviews) * 100} showInfo={false} />
                        <p>Bình thường</p>
                        <Progress percent={(ratingCount[3] / totalReviews) * 100} showInfo={false} />
                        <p>Tệ</p>
                        <Progress percent={(ratingCount[2] / totalReviews) * 100} showInfo={false} />
                        <p>Rất tệ</p>
                        <Progress percent={(ratingCount[1] / totalReviews) * 100} showInfo={false} />
                    </div>
                </div>

                <div className={cx('custom-comment-content')}>
                    <div className={cx('custom-comment-filter')}>
                        <Select
                            defaultValue="newest"
                            onChange={handleFilterChange}
                            className={cx('custom-comment-select')}
                        >
                            <Select.Option value="newest">Mới nhất</Select.Option>
                            <Select.Option value="oldest">Cũ nhất</Select.Option>
                        </Select>
                    </div>

                    <List
                        itemLayout="horizontal"
                        dataSource={reviews}
                        renderItem={(item) => (
                            <List.Item className={cx('custom-comment-item')}>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<span className={cx('custom-comment-author')}>{item.author}</span>}
                                    description={
                                        <>
                                            <Rate disabled defaultValue={item.rating} />
                                            <p className={cx('custom-comment-text')}>{item.content}</p>
                                            <p className={cx('custom-comment-date')}>{item.date}</p>
                                            <div className={cx('rating-details')}>
                                                <div className={cx('rating-item')}>
                                                    <span>Cảnh quan: </span>
                                                    <Rate disabled defaultValue={item.landscape} />
                                                </div>
                                                <div className={cx('rating-item')}>
                                                    <span>Dịch vụ/Tiện ích: </span>
                                                    <Rate disabled defaultValue={item.service} />
                                                </div>
                                                <div className={cx('rating-item')}>
                                                    <span>Giá cả: </span>
                                                    <Rate disabled defaultValue={item.price} />
                                                </div>
                                                <div className={cx('rating-item')}>
                                                    <span>Vệ sinh: </span>
                                                    <Rate disabled defaultValue={item.cleanliness} />
                                                </div>
                                                <div className={cx('rating-item')}>
                                                    <span>Độ thuận tiện đường đi: </span>
                                                    <Rate disabled defaultValue={item.convenience} />
                                                </div>
                                                <div className={cx('rating-item')}>
                                                    <span>Hoạt động: </span>
                                                    <Rate disabled defaultValue={item.activities} />
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export default CustomComment;
