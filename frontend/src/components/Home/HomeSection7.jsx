import React from 'react';
import style from './HomeSection7.module.css';
import logo1 from '../../Assets/images/Home-page/company-logo/logo-12.png.webp';
import logo2 from '../../Assets/images/Home-page/company-logo/logo-7.png.webp';
import logo3 from '../../Assets/images/Home-page/company-logo/logo-8.png.webp';

const HomeSection7 = () => {
  return (
    <section className={style.press_container}>
        <div className={style.press_container_wrapper}>
            <div className={style.press_heading}>
                <h2> IN THE PRESS</h2>
            </div>
            <div className={style.press_logo}>
                <div className={style.press_logo_wrapper}>
                    <div className={style.press_logo_img}>
                        <figure>
                            <img src={logo1} alt="press-logo-1" />
                        </figure>
                    </div>
                    <div className={style.press_logo_img}>
                        <fiqure>
                            <img src={logo2} alt="press-logo-2" />
                        </fiqure>
                    </div>
                    <div className={style.press_logo_img}>
                        <fiqure>
                            <img src={logo3} alt="press-logo-3" />
                        </fiqure>
                    </div>
                    <div className={style.press_logo_img}>
                        <fiqure>
                            <img src={logo2} alt="press-logo-4" />
                        </fiqure>
                    </div>
                    <div className={style.press_logo_img}>
                        <fiqure>
                            <img src={logo1} alt="press-logo-5" />
                        </fiqure>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSection7
