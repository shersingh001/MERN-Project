import { Link } from "react-router-dom";
import userLogo from "./Assets/images/profile/FjU2lkcWYAgNG6d.jpg";
import productImg from './Assets/images/Home-page/product/corner-chair.webp';
import style from './components/AdminDashboard/User/DataTable/DataTable.module.css';
import {DeleteOutline} from '@mui/icons-material';

export const rows = [
	{
		id: 1,
		username: "Snow",
		status: "active",
		email: "snow@gmail.com",
		img: userLogo,
		age: 35,
	},
	{
		id: 2,
		username: "Lannister",
		status: "active",
		email: "lannister1@gmail.com",
		img: userLogo,
		age: 42,
	},
	{
		id: 3,
		username: "Lannister",
		status: "pending",
		email: "lannister2@gmail.com",
		img: userLogo,
		age: 45,
	},
	{
		id: 4,
		username: "Stark",
		status: "active",
		email: "stark@gmail.com",
		img: userLogo,
		age: 16,
	},
];

const statusActive = `${style.status} ${style.active}`;
const statusPending = `${style.status} ${style.pending}`;

export const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "user",
        width: 230,
        renderCell: (params) => {
            return (
                <div className={style.user_details}>
                    <img
                        className={style.avatar_img}
                        src={params.row.img}
                        alt="avatar"
                    />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "status",
        headerName: "status",
        width: 230,
        renderCell: (params) => {
            return (
                <div
                    className={
                        params.row.status === "active" ? statusActive : statusPending
                    }
                >
                    {params.row.status}
                </div>
            );
        },
    },
    {
        field: "age",
        headerName: "age",
        width: 230,
    },
	{
		field: "action",
		headerName: "Action",
		width: 150,
		renderCell: (params) => {
			return (
				<>
				<div className={style.action}>
						<Link
							to={"/admin/user/" + params.row.id}
							className={style.action_view_Btn}
						>
							EDIT
						</Link>
						<DeleteOutline className={style.action_delete_Btn}/>
					</div>
				</>
			)
		}
	}
];


export const productRows = [
    {
        id: 1,
        img: productImg,
        Title: 'Corner Chair',
        Description: 'Chair using for home or office',
        Category: 'Home or office',
        Price: 120,
        Stock: 138,
    },
    {
        id: 2,
        img: productImg,
        Title: 'Corner Chair',
        Description: 'Chair using for home or office',
        Category: 'Home or office',
        Price: 120,
        Stock: 138,
    },
    {
        id: 3,
        img: productImg,
        Title: 'Corner Chair',
        Description: 'Chair using for home or office',
        Category: 'Home or office',
        Price: 120,
        Stock: 138,
    }
];

export const productcolumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "title",
        headerName: "Title",
        width: 230,
        renderCell: (params) => {
            return (
                <div className={style.user_details}>
                    <img
                        className={style.avatar_img}
                        src={params.row.img}
                        alt="product"
                    />
                    {params.row.Title}
                </div>
            );
        },
    },
    {
        field: "Description",
        headerName: "Description",
        width: 230,
    },
    {
        field: "Category",
        headerName: "Category",
        width: 230,
    },
    {
        field: "Price",
        headerName: "Price",
        width: 100,
    },
    {
        field: "Stock",
        headerName: "Stock",
        width: 100,
    },
	{
		field: "Action",
		headerName: "Action",
		width: 140,
		renderCell: (params) => {
			return (
				<>
				<div className={style.action}>
						<Link
							to={"/admin/product/" + params.row.id}
							className={style.action_view_Btn}
						>
							EDIT
						</Link>
						<DeleteOutline className={style.action_delete_Btn}/>
					</div>
				</>
			)
		}
	}
];