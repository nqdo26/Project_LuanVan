import classNames from 'classnames/bind';
import { Rate, Input, DatePicker, Button, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './ReviewForm.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);
const { TextArea } = Input;

function ReviewForm({ type = 'restaurant', onSubmit }) {
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
        images: [],
    });

    const handleChange = (key, value) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleImageChange = ({ fileList }) => {
        if (fileList.length > 4) {
            message.warning('Chỉ được tải tối đa 4 hình ảnh!');
            return;
        }
        setForm((prev) => ({ ...prev, images: fileList }));
    };

    const handleSubmit = () => {
        console.log('Review gửi đi:', form);
        if (onSubmit) onSubmit(form); // Gọi callback onSubmit nếu có
    };

    return (
        <div className={cx('wrapper')}>
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
                <label>Thời gian đến trải nghiệm:</label>
                <DatePicker picker="day" value={form.date} onChange={(value) => handleChange('date', value)} />
            </div>

            <div className={cx('form-group-rate')}>
                <label>Đánh giá tổng thể:</label>
                <Rate value={form.rating} onChange={(value) => handleChange('rating', value)} />
            </div>

            <div className={cx('form-group-rate')}>
                <label>Cảnh quan:</label>
                <Rate allowHalf value={form.landscape} onChange={(value) => handleChange('landscape', value)} />
            </div>

            <div className={cx('form-group-rate')}>
                <label>Dịch vụ / Tiện ích:</label>
                <Rate allowHalf value={form.service} onChange={(value) => handleChange('service', value)} />
            </div>

            <div className={cx('form-group-rate')}>
                <label>Giá cả:</label>
                <Rate allowHalf value={form.price} onChange={(value) => handleChange('price', value)} />
            </div>

            <div className={cx('form-group-rate')}>
                <label>Vệ sinh:</label>
                <Rate allowHalf value={form.cleanliness} onChange={(value) => handleChange('cleanliness', value)} />
            </div>


            <div className={cx('form-group-rate')}>
                <label>{type === 'restaurant' ? 'Đồ ăn/Thức uống' : 'Hoạt động'}:</label>
                <Rate allowHalf value={form.activities} onChange={(value) => handleChange('activities', value)} />
            </div>

            <div className={cx('form-group-rate')}>
                <label>Độ thuận tiện:</label>
                <Rate allowHalf value={form.convenience} onChange={(value) => handleChange('convenience', value)} />
            </div>

            <div className={cx('form-group')}>
                <label>Tải lên hình ảnh (tối đa 4):</label>
                <Upload
                    listType="picture-card"
                    fileList={form.images}
                    onChange={handleImageChange}
                    beforeUpload={() => false}
                >
                    {form.images.length >= 4 ? null : (
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Tải ảnh</div>
                        </div>
                    )}
                </Upload>
            </div>

            <div className={cx('form-group-submit')}>
                <Button className={cx('btn-submit')} onClick={handleSubmit}>
                    Gửi đánh giá
                </Button>
                <Button className={cx('btn-cancel')} onClick={handleSubmit}>
                    Hủy bỏ
                </Button>
            </div>
        </div>
    );
}

export default ReviewForm;
