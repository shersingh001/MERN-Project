import React from 'react';
import style from './Card.module.css';

const Card = (props) => {
    return (
        <div className={`${style.card} ${style.className}`}>{props.children}</div>
    )
}

export default Card;
