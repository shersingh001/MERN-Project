import React from 'react';
import style from './HomeSection4.module.css';
import ovalSofa from '../../Assets/images/Home-page/product/oval-sofa.webp';
import livingCouch from '../../Assets/images/Home-page/product/cozy-living-couch.webp';
import cornerChair from '../../Assets/images/Home-page/product/corner-chair.webp';
import { Link } from 'react-router-dom';
import LinkBtn from '../UI/Button/LinkBtn';

const HomeSection4 = () => {
  return (
    <section className={style.container}>
      <div className={style.items_wrapper}>
        <div className={style.items_wrapper_heading}>
            <h2>Headline that grabs people's attention goes here</h2>
        </div>
        <div className={style.items_products_wrapper}>
              <div className={style.item_one_wrapper}>
                  <div className={style.item_one_info}>
                    <div className={style.item_one_wrapper}>
                      <figure>
                        <Link>
                          <img src={ovalSofa} alt="oval-sofa" />
                        </Link>
                      </figure>
                      <div className={style.item_content}>
                          <Link to={"/oval-sofa"}>Oval Sofa</Link>
                          <p>from <span>$20</span></p>
                      </div>
                    </div>
                </div>
            </div>
            <div className={style.items_two_product_wrapper}>
                  <div className={style.item_two_info}>
                    <div className={style.item_two_wrapper}>
                      <figure>
                        <Link>
                          <img src={livingCouch} alt="cozy-living-couch" />
                        </Link>
                      </figure>
                      <div className={style.item_content}>
                        <Link to={"/cozy-living-couch"}>Cozy Living Couch</Link>
                        <p>from <span>$50</span></p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className={style.item_container_wrapper}>
              <div className={style.item_container_wrapper_flex}>
                <div className={style.item_container_wrapper_content}>
                  <div className={style.item_container_wrapper_content_flex}>
                    <div className={style.item_wrapper}>
                      <div className={style.item_box}>
                          <figure>
                            <img src={cornerChair} alt="corner-chair" />
                          </figure>
                      </div>
                    <div className={style.item_content_wrapper}>
                      <Link>Corner Chair</Link>
                      <p>from <span>$100</span></p>
                    </div>
                  </div>
                  <div className={style.item_contents}>
                    <div className={style.item_contents_wrapper}>
                      <div className={style.item_contents_box}>
                          <h2> High Quality Furniture </h2>
                          <p> High-quality, ethically sourced products at affordable prices. If you fall in love with furniture you can always decide to buy it -- each monthly payment on furniture goes towards owning. </p>
                          <div className={style.item_contents_btn}>
                            <LinkBtn>Browse Furnitures</LinkBtn>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HomeSection4;
