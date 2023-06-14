import React from 'react';
import style from './Footer.module.css';
import logo from '../../Assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';
import {FiInstagram} from 'react-icons/fi';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineReddit} from 'react-icons/ai';

const Footer = () => {
return (
    <footer>
        <div className={style.footer_container}>
            <div className={style.footer_layout}>
                <div className={style.footer_layout_grid}>
                    <div className={style.footer_layout_shop}>
                    <h2>Shop</h2>
                    <ul>
                        <li> <Link>Bedroom</Link> </li>
                        <li> <Link>Dining</Link> </li>
                        <li> <Link>Home Office</Link> </li>
                        <li> <Link>Living Room</Link> </li>
                        <li> <Link>Outdoor</Link> </li>
                        <li> <Link>Packages</Link> </li>
                        <li> <Link>Uncategorized</Link> </li>
                    </ul>
                    </div>
                <div className={style.footer_layout_about}>
                    <h2>About</h2>
                    <ul>
                        <li> <Link>About Feather</Link> </li>
                        <li> <Link>How it Works</Link> </li>
                        <li> <Link>Reviews</Link> </li>
                        <li> <Link>Contact</Link> </li>
                        <li> <Link>Career</Link> </li>
                    </ul>
                </div>
                <div>
                    <h2>Help</h2>
                    <ul>
                        <li> <Link>FAQs</Link> </li>
                        <li> <Link>Privacy Policy</Link> </li>
                        <li> <Link>Terms</Link> </li>
                    </ul>
                </div>
                <div className={style.footer_layout_contact}>
                    <img src={logo} alt="logo" />
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A delectus iusto totam consequuntur aperiam maxime quaerat. Aut omnis harum quo eum maiores dicta veritatis tempore, ullam modi culpa sed minus!</li>
                        <li>Call Us :  (800) 1234-456789</li>
                        <li>Email Us :  email@gmail.com</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className={style.footer_bottm_text}>
                <p>© 2023 Botiga Furniture. Proudly powered by Botiga</p>
                <div className={style.footer_layout_icons}>
                    <ul>
                        <li><Link to={"https://www.instagram.com/accounts/login/"} target="_blank" title='instagram'><FiInstagram/></Link></li>
                        <li><Link to={"https://www.facebook.com/login/"} target='_blank' title='facebook'><BsFacebook/></Link></li>
                        <li><Link to={"https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"} target="_blank" title='twitter'><AiOutlineTwitter/></Link></li>
                        <li><Link to={"https://www.linkedin.com/feed/"} target='_blank' title='linkedin'><AiFillLinkedin/></Link></li>
                        <li><Link to={"https://www.reddit.com/login/"} target="_blank" title='reddit'><AiOutlineReddit/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
