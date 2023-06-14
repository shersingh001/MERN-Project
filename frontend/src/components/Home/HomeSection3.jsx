import React from 'react';
import style from './HomeSection3.module.css';
import sectionImg from '../../Assets/images/Home-page/furniture-explore-packages.jpg.webp';
import LinkBtn from '../UI/Button/LinkBtn';

const HomeSection3 = () => {
  return (
    <section className={style.container}>
        <div className={style.furniture_img_section}>
            <picture>
                <img src={sectionImg} alt="furniture-img" />
            </picture>
            <div className={style.img_section_btn_wrapper}>
                <div className={style.img_section_btn}>
                    <div className={style.img_section_btn_box}>
                        <div className={style.btn_box_justify}>
                            <div className={style.btn_box_style}>
                                <LinkBtn>EXPLORE BEDROOM</LinkBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSection3;
