import React from 'react';
import style from './HeaderSearchBar.module.css';

const HeaderSearchBar = () => {
  return (
    <div className={style.header_search_bar}>
      <form>
        <div className={style.header_search_input}>
            <input type="search" name="search" id="search" placeholder='Search products...'/>
            <button>Search</button>
        </div>
      </form>
    </div>
  )
}

export default HeaderSearchBar;
