import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Rate, Input, DatePicker, Button } from 'antd';
import styles from './WriteReview.module.scss';
import CardReview from '~/components/CardReview';
import dayjs from 'dayjs';

const cx = classNames.bind(styles);
const { TextArea } = Input;

function WriteReview() {
    const [form, setForm] = useState({
        author: '',
        rating: 0,
        landscape: 0,
        service: 0,
        price: 0,
        cleanliness: 0,
        convenience: 0,
        activities: 0,
        title: '',
        content: '',
        date: null,
    });

    const handleChange = (key, value) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSubmit = () => {
        console.log('Review gửi đi:', form);
        // Gửi lên server hoặc lưu local ở đây
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('side-bar')}>
                    <h1>Trải nghiệm của bạn như thế nào? Hãy chia sẻ cho mọi người biết nhé</h1>
                    <CardReview />
                </div>

                <div className={cx('content')}>
                    <div className={cx('form-group')}>
                        <label>Tiêu đề đánh giá:</label>
                        <Input
                            value={form.title}
                            className={cx('title-input')}
                            onChange={(e) => handleChange('title', e.target.value)}
                            placeholder="Ví dụ: Nóng như chó nái"
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label>Nội dung đánh giá:</label>
                        <TextArea
                           className={cx('content-input')}
                            rows={4}
                            value={form.content}
                            onChange={(e) => handleChange('content', e.target.value)}
                            placeholder="Hãy chia sẻ trải nghiệm của bạn..."
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label>Đánh giá tổng thể:</label>
                        <Rate value={form.rating} onChange={(value) => handleChange('rating', value)} />
                    </div>

                    <div className={cx('form-group')}>
                        <label>Cảnh quan:</label>
                        <Rate allowHalf value={form.landscape} onChange={(value) => handleChange('landscape', value)} />
                    </div>

                    <div className={cx('form-group')}>
                        <label>Dịch vụ / Tiện ích:</label>
                        <Rate allowHalf value={form.service} onChange={(value) => handleChange('service', value)} />
                    </div>

                    <div className={cx('form-group')}>
                        <label>Giá cả:</label>
                        <Rate allowHalf value={form.price} onChange={(value) => handleChange('price', value)} />
                    </div>

                    <div className={cx('form-group')}>
                        <label>Vệ sinh:</label>
                        <Rate
                            allowHalf
                            value={form.cleanliness}
                            onChange={(value) => handleChange('cleanliness', value)}
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label>Độ thuận tiện:</label>
                        <Rate
                            allowHalf
                            value={form.convenience}
                            onChange={(value) => handleChange('convenience', value)}
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label>Hoạt động:</label>
                        <Rate
                            allowHalf
                            value={form.activities}
                            onChange={(value) => handleChange('activities', value)}
                        />
                    </div>


                    <div className={cx('form-group')}>
                        <label>Thời gian bạn đi (tháng/năm):</label>
                        <DatePicker
                            picker="month"
                            value={form.date}
                            onChange={(value) => handleChange('date', value)}
                        />
                    </div>

                    <Button type="primary" onClick={handleSubmit}>
                        Gửi đánh giá
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default WriteReview;
