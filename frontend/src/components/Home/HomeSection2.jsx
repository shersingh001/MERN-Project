import React from 'react';
import style from './HomeSection2.module.css';
import LinkBtn from '../UI/Button/LinkBtn';

const HomeSection2 = () => {
  return (
    <section className={style.container}>
      <div className={style.content_wrapper}>
        <h3>
            The Quick Brown Fox Jupms Over The Lazy Dog
        </h3>
        <p>
            High-quality furniture delivered & assembled in less than a week that can change as your life changes
        </p>
        <div className={style.btn_container}>
            <LinkBtn> HOW IT WORKS </LinkBtn>
        </div>
      </div>
    </section>
  )
}

export default HomeSection2;
