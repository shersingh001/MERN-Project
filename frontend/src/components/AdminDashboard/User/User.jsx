import React from 'react';
import style from './User.module.css';
import SideBar from '../Sidebar/SideBar';
import NavBar from '../Navbar/NavBar';
import DataTable from './DataTable/DataTable';

const User = () => {
return (
    <div className={style.user_container}>
        <SideBar />
        <div className={style.user_wrapper}>
            <NavBar />
            <div className={style.user_dataTable}>
                <DataTable />
            </div>
        </div>
    </div>
  )
}

export default User;
