import React from 'react';
import style from './Error404.module.css';
import { Link } from 'react-router-dom';
import errorImg from '../../Assets/images/Error page/error-page.png';
import Footer from '../Footer/Footer';

const Error404 = () => {
return (
    <>
    <div className={style.main}>
        <div className={style.main_container}>
            <div className={style.container_data}>
                <span>Error 404</span>
                <h1>Hey Buddy</h1>
                <p>
                    We can't seem to find the page <br/> you are looking for.
                </p>
                <Link to={"/home"} className={style.home_btn}>Go Home</Link>
            </div>
            <div className={style.error_img}>
                <img src={errorImg} alt="ghost-error-img" />
            </div>
        </div>
    </div>
        <Footer />
    </>
    )
}

export default Error404;
