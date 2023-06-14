import React from 'react';
import style from './ShopMain.module.css';
import { Link } from 'react-router-dom';
import ShopCard from './ShopCard';
import Footer from '../../components/Footer/Footer';

const ShopMain = () => {
  return (
    <section className={style.shop_container}>
        <div className={style.shop_container_wrapper}>
            <div className={style.shop_text}>
                <div className={style.shop_text_wrapper}>
                    <h2>Shop</h2>
                    <p>High-quality, ethically sourced products at affordable prices, If you fall in love with furniture you can always decide to buy it.</p>
                </div>
            </div>
            <div className={style.product_category}>
                <div className={style.product_category_list}>
                    <ul>
                        <Link><li>Bedroom (5)</li></Link>
                        <Link><li>Dining (8)</li></Link>
                        <Link><li>Home Office (1)</li></Link>
                        <Link><li>Living Room (4)</li></Link>
                        <Link><li>Outdoor (2)</li></Link>
                        <Link><li>Packages (10)</li></Link>
                    </ul>
                </div>
                <ShopCard />
            </div>
        </div>
        <Footer />
    </section>
  )
}

export default ShopMain;
