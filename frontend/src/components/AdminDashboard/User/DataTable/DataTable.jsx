import React from "react";
import style from "./DataTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { rows, columns } from "../../../../DummyData";

const DataTable = () => {
	return (
		<div>
			<div className={style.add_new_user}>
				<p>Add New User</p>
				<Link to={"/admin/user/new"}>Add New</Link>
			</div>
			<div style={{ height: 400, width: "100%" }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={8}
					rowsPerPageOptions={[8]}
					checkboxSelection
					disableRowSelectionOnClick
				/>
			</div>
		</div>
	);
};

export default DataTable;
