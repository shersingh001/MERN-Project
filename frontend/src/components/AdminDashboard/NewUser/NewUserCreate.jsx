import React, { useState } from "react";
import style from "./NewUserCreate.module.css";
import SideBar from "../Sidebar/SideBar";
import NavBar from "../Navbar/NavBar";
import uploadIcon from "../../../Assets/images/upload img icon/upload img icon.jpg";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NewUserCreate = () => {
	const [file, setFile] = useState("");

	const uploadImgHandler = (event) => {
		console.log(event.target.files);
		setFile(event.target.files[0]);
	};

	return (
		<div className={style.new_container}>
			<SideBar />
			<div className={style.new_wrapper}>
				<NavBar />
				<div className={style.new_top}>
					<h2>Add New User</h2>
				</div>
				<div className={style.new_bottom}>
					<div className={style.bottom_left}>
						<img
							src={file ? URL.createObjectURL(file) : uploadIcon}
							alt="upload-img-icon"
						/>
					</div>
					<div className={style.bottom_right}>
						<form method="POST">
							<div className={style.form_input}>
								<label htmlFor="file">
									Image:
									<DriveFolderUploadOutlined className={style.img_icon} />
								</label>
								<input
									type="file"
									id="file"
									onChange={uploadImgHandler}
									style={{ display: "none" }}
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Username</label>
								<input
									type="text"
									placeholder="john_doe"
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Name and surname</label>
								<input
									type="text"
									placeholder="john Doe"
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Email</label>
								<input
									type="email"
									placeholder="john_doe@gmail.com"
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Phone</label>
								<input
									type="text"
									placeholder="+91 123 456 789"
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Address</label>
								<input
									type="text"
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Password</label>
								<input
									type="password"
								/>
							</div>
							<div className={style.form_input}>
								<label htmlFor="">Country</label>
								<input
									type="text"
								/>
							</div>
							<div className={style.form_submit_btn}>
								<button className={style.send_btn}>Create</button>
								<Link
									to={"/admin/user"}
									className={style.cancle_btn}
								>
									Back
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewUserCreate;
