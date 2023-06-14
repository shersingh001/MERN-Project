import React from 'react';
import style from './Widget.module.css';
import { KeyboardArrowUp, Person2Outlined, ShoppingCartOutlined, MonetizationOnOutlined, AccountBalanceWalletOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom';

const Widget = ({type}) => {
    let data;
    const amount = 100;
    const diff = 20;

    switch(type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <Person2Outlined className={style.user_icon} style={{
                    color: "crimson",
                    background: "rgba(218,0,0,0.2)"
                }}/>,
            };
            break;
            case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlined className={style.user_icon} style={{
                    background:"rgba(0,0,230,0.2)",
                    color:"blue"
                }}/>,
            };
            break;
            case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net erarning",
                icon: <MonetizationOnOutlined className={style.user_icon} style={{
                    color: "green",
                    background: "rgba(0,128,0,0.2"
                }}/>,
            };
            break;
            case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlined className={style.user_icon} style={{
                    background:"rgba(128,0,128,0.2)",
                    color:"purple"
                }}/>,
            };
            break;
            default:
            break;
    };

    const widgetRightPositive = `${style.widget_right_percentage} ${style.positive}`;
    const widgetRightNegative = `${style.widget_right_percentage} ${style.negative}`;

return (
    <div className={style.widget}>
        <div className={style.widget_left}>
            <span className={style.widget_left_title}>{data.title}</span>
            <span className={style.widget_left_count}>{data.isMoney && "$"}{amount}</span>
            <span className={style.widget_left_link}><Link>{data.link}</Link></span>
        </div>
        <div className={style.widget_right}>
            <div className={widgetRightPositive}>
                <KeyboardArrowUp />
                {diff}%
            </div>
            <Link>{data.icon}</Link>
        </div>
    </div>
  )
}

export default Widget;
