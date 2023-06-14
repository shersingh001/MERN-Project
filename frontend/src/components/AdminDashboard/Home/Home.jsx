import React from "react";
import style from './Home.module.css'
import SideBar from "../Sidebar/SideBar";
import NavBar from "../Navbar/NavBar";
import Widget from "../Widget/Widget";
import Featured from "./Featured/Featured";
import Chart from "./Chart/Chart";
import Table from "./Table/Table";

const Home = ({title, aspect}) => {
	return (
        <div className={style.container}>
            <SideBar />
            <div className={style.home_container}>
                <NavBar />
                <div className={style.home_widgets}>
                    <Widget type={"user"}/>
                    <Widget type={"order"}/>
                    <Widget type={"earning"}/>
                    <Widget type={"balance"}/>
                </div>
                <div className={style.home_charts}>
                    <Featured />
                    <Chart title={"Last 6 Month (Revenue)"} aspect={2 / 1}/>
                </div>
                <div className={style.home_list_container}>
                    <div className={style.list_container_title}>Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    )
};

export default Home;
