import React from 'react';
import style from './HomeSection1.module.css';
import posterImg from '../../Assets/images/Home-page/furniture-hero-1.jpg.webp';
import { BsArrowRight } from 'react-icons/bs';
import LinkBtn from '../UI/Button/LinkBtn';

const HomeSection1 = () => {
  return (
    <section className={style.container}>
      <div className={style.poster_box_wrapper}>
      <div className={style.poster_box}>
        <div className={style.poster_img}>
        <picture>
            <img src={posterImg} alt="furnitur-1" />
        </picture>
        </div>
      </div>
      <div className={style.poster_content_text}>
        <div className={style.poster_content_heading}>
          <p>BEST FURNITURE IN TOWN</p>
        </div>
        <div className={style.poster_content_pera}>
          <p>Where style meets affordability.</p>
        </div>
        <div className={style.poster_content_btn}>
          <LinkBtn to={"/shop"}><span className={style.btn_text}>SHOP NOW</span> <span className={style.btn_icon}>
          <BsArrowRight/></span></LinkBtn>
        </div>
      </div>
      </div>
    </section>
  )
}

export default HomeSection1;
