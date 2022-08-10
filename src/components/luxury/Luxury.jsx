import React from 'react'
import styles from './Luxury.module.css'
import Card from "../find/Card";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const Luxury = () => {
  return (
    <div className={styles.luxury}>
              <div className={styles.heading}>
        <h1>Luxury Selection</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top luxury vehicles to roll in style</span>
          </p>
        </div>

      </div>

      <div className={styles.container}>
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
                      slidesPerView: 3,
                  },
                  // when window width is >= 1040px
                  1040: {
                      width: 1040,
                      slidesPerView: 4,
                  },
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
          >
              <SwiperSlide>
                  <Card
                      image='https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/1-aston-martin-victor-2021-fd-hero-front.jpg?itok=q6UHOJtM'
                      make='Aston Martin'
                      href='https://www.astonmartin.com/en/'
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Card
                      image='https://motor.ru/imgs/2019/09/02/08/3541317/21c2375b048d884226a5b8ea5dce4c5ffd388a14.jpg'
                      make='Bugatti'
                      href='https://www.bugatti.com/'
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Card
                      image='https://s1.cdn.autoevolution.com/images/news/gallery/beefed-up-ferrari-sf90-hides-novitec-goodies-behind-satin-black-and-red-attire_1.jpg'
                      make='Ferrari'
                      href='https://www.ferrari.com/'
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Card
                      image='https://www.motorbiscuit.com/wp-content/uploads/2022/02/Fully-loaded-new-gray-2022-Jaguar-F-TYPE-R-driving-on-a-mountain-highway.jpg'
                      make='Jaguar'
                      href='https://www.jaguarusa.com/index.html'
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Card
                      image='https://maserati.scene7.com/is/image/maserati/maserati/international/Brand/Alfieri/2016-06-01/141510M.JPG?$1400x2000$&fit=constrain'
                      make='Maserati'
                      href='https://www.maserati.com/global/en'
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Card
                      image='https://motor.ru/thumb/0x750/filters:quality(75)/imgs/2021/08/27/09/4853180/a5f0a8fad63703f91c936e580709f29ab587689c.jpg'
                      make='Range  Rover'
                      href='https://www.landroverusa.com/index.html'
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Card
                      image='https://s2.glbimg.com/w2yM2-e5icts2CEJOVpkXG9owHo=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/A/B/cUIEpTQASqltmZYGMGIg/rolls-royce-ghost-black-badge-2021-warehouse-2.jpg'
                      make='Rolls Royce'
                      href='https://www.rolls-roycemotorcars.com/en_GB/home.html'
                  />
              </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default Luxury
