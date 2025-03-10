import React from 'react';
import { Carousel } from 'antd';
import classNames from 'classnames/bind';
import styles from './CustomCarousel.module.scss';

const cx = classNames.bind(styles);

const carouselItems = [
    { text: "SLIDE 1", color: "#ff7b54" },
    { text: "SLIDE 2", color: "#6a0572" },
    { text: "SLIDE 3", color: "#0a9396" },
    { text: "SLIDE 4", color: "#ffb703" },
];

function CustomCarousel() {
    return (
        <div className={cx('carousel-container')}>
            <Carousel autoplay autoplaySpeed={3000} effect="scrollx">
                {carouselItems.map((item, index) => (
                    <div key={index} className={cx('carousel-item')} style={{ backgroundColor: item.color }}>
                        <h2 className={cx('carousel-text')}>{item.text}</h2>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default CustomCarousel;
