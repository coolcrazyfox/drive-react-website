import React from 'react';
import styles from './Find.module.css';
import Card from './Card';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your drive</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Card
              image='https://cdn.wallpapersafari.com/79/53/xa8kuK.jpg'
              make='Audi'
              href='https://www.audiusa.com/us/web/en.html'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://i.pinimg.com/736x/a6/33/09/a63309c295f4a5a5f0d14cb0bd14dd0a.jpg'
              make='BMW'
              href='https://www.bmwusa.com/home.html'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://autoreview.ru/images/Article/1669/Article_166962_860_575.jpg'
              make='Cadillac'
              href='https://www.cadillac.com/'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
                image='https://rohanawheels.com/wp-content/uploads/2019/08/Ford-Mustang-RFX13-Brushed-Titanium-50005.jpg'
                make='Ford'
                href='https://www.ford.com/'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
                image='https://cdn.wallpapersafari.com/85/23/O5fGUy.jpg'
                make='Jeep'
                href='https://www.jeep.com/grand-cherokee.html'            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://w0.peakpx.com/wallpaper/338/47/HD-wallpaper-mercedes-benz-amg-benz-black-car-logo-luxury-mercedes-silver.jpg'
              make='Mercedes-Benz'
              href='https://www.mercedes-benz.com/en/'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
              make='Nissan'
              href='https://www.nissanusa.com/'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
              make='Toyota'
              href='https://www.toyota.com/'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              make='Tesla'
              href='https://www.tesla.com/'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
              make='Porsche'
              href='https://www.porsche.com/usa/'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
