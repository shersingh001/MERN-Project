import React from 'react';
import style from './LinkBtn.module.css';
import { Link } from 'react-router-dom';

const LinkBtn = (props) => {
  return (
    <Link to={props.to} onClick={props.onClick} className={`${style.linkBtn} ${props.className}`}>{props.children}</Link>
  )
}

export default LinkBtn;
