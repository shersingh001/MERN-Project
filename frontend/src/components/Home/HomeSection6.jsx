import React from 'react';
import style from './HomeSection6.module.css';
import bgImg from '../../Assets/images/Home-page/become-member-bg.jpg.webp';
import LinkBtn from '../UI/Button/LinkBtn';

const HomeSection6 = () => {
  return (
    <section className={style.container}>
        <div className={style.container_wrapper}>
            <div className={style.bg_section_wrapper}>
                <picture>
                    <img src={bgImg} alt="bg-img" />
                </picture>
            </div>
            <div className={style.bg_section_content}>
                <div className={style.bg_section_content_wrapper}>
                    <h2>Heading title goes here</h2>
                    <p>Explore membership plans and pricing, and see how amazing it can be to live free of the burdens of ownership</p>
                </div>
                <div className={style.bg_section_btn}>
                    <LinkBtn to={"/learn-more"}>LEARN MORE</LinkBtn>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSection6
