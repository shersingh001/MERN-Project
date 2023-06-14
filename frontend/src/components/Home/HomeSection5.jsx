import React from 'react';
import style from './HomeSection5.module.css';
import memberImg from '../../Assets/images/Home-page/client/member-1.webp';
import memberBg from '../../Assets/images/Home-page/client/member-bg.webp';
import { Link } from 'react-router-dom';
import LinkBtn from '../UI/Button/LinkBtn';

const HomeSection5 = () => {
return (
    <section>
        <div className={style.container_wrapper}>
            <div className={style.section_heading}>
                <h2>
                    MEET A FOURNIR MEMBER
                </h2>
            </div>
            <div className={style.img_container}>
                <div className={style.img_container_wrapper}>
                    <div className={style.img_container_box}>
                        <img src={memberImg} alt="member-img" />
                    </div>
                </div>
                <div className={style.img_container_wrapper}>
                    <div className={style.img_container_box}>
                        <img src={memberBg} alt="member-background" />
                    </div>
                </div>
            </div>
            <div className={style.see_more_link}>
                <Link to={"/see-more"}> See more reviews </Link>
            </div>
            <div className={style.fournir_container}>
                <h2>WHY FOURNIR</h2>
                <div className={style.fournir_container_wrapper}>
                    <div className={style.fournir_content}>
                        <h3>A sustainable alternative to fast furniture</h3>
                        <p>High-quality, ethically sourced products at affordable prices. If you fall in love with furniture you can always decide to buy it</p>
                    </div>
                    <div className={style.fournir_content}>
                        <h3>Quality, without the expense or commitment</h3>
                        <p>High-quality, ethically sourced products at affordable prices. If you fall in love with furniture you can always decide to buy it</p>
                    </div>
                    <div className={style.fournir_content}>
                        <h3>Designed to last. And last. And last.</h3>
                        <p>High-quality, ethically sourced products at affordable prices. If you fall in love with furniture you can always decide to buy it</p>
                    </div>
                </div>
                <div className={style.fournir_btn}>
                    <LinkBtn>ABOUT FOURNIR</LinkBtn>
                </div>
            </div>
        </div>
    </section>
)
}

export default HomeSection5;
