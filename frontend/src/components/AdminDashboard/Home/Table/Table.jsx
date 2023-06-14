import React from "react";
import style from "./Table.module.css";
import img1 from "../../../../Assets/images/Home-page/product/corner-chair.webp";
import img2 from "../../../../Assets/images/Home-page/product/cozy-living-couch.webp";
import img3 from "../../../../Assets/images/Home-page/product/oval-sofa.webp";
import img4 from "../../../../Assets/images/Home-page/product/corner-chair.webp";
import img5 from "../../../../Assets/images/Home-page/product/cozy-living-couch.webp";
import img6 from "../../../../Assets/images/Home-page/product/corner-chair.webp";

const Table = () => {

    const statusApproved = `${style.product_status} ${style.Approved}`;
    const statusPending = `${style.product_status} ${style.Pending}`;

	const rows = [
		{
			id: 1646847655,
			product: "Sofa",
			img: img1,
			customer: "Jem rol",
			date: "1 March",
			amount: 1600,
			method: "Online",
			status: "Pending",
		},
		{
			id: 1646847652,
			product: "Chair",
			img: img2,
			customer: "Harold Carol",
			date: "5 March",
			amount: 2000,
			method: "Online",
			status: "Pending",
		},
		{
			id: 1646847672,
			product: "Couch",
			img: img3,
			customer: "Belly ",
			date: "8 March",
			amount: 2200,
			method: "Online",
			status: "Approved",
		},
		{
			id: 1646847612,
			product: "Sofa",
			img: img4,
			customer: "Amrond",
			date: "13 March",
			amount: 2100,
			method: "Online",
			status: "Pending",
		},
		{
			id: 1646847610,
			product: "Couch",
			img: img5,
			customer: "Brett",
			date: "14 March",
			amount: 2000,
			method: "Online",
			status: "Approved",
		},
		{
			id: 1646847601,
			product: "Chair",
			img: img6,
			customer: "Henrey",
			date: "18 March",
			amount: 2000,
			method: "Online",
			status: "Pending",
		},
	];
	return (
		<div className={style.home_table}>
			<div className={style.table_wrapper}>
				<table>
					<thead>
						<tr>
							<th>Tracking ID</th>
                            <th>Product</th>
                            <th>Customer</th>
							<th>Date</th>
							<th>Amount</th>
                            <th>Payment Method</th>
                            <th>Status</th>
						</tr>
					</thead>
					<tbody>
                    {rows.map(item => {
                        return(
                            <tr key={item.id}>
                            <td>{item.id}</td>
							<td className={style.product_table_data}><span><img src={item.img} alt={item.product} /></span> <span>{item.product}</span></td>
							<td>{item.customer}</td>
                            <td>{item.date}</td>
                            <td>{item.amount}/-</td>
                            <td>{item.method}</td>
                            <td><span className={(item.status === "Approved") ? statusApproved : statusPending}>{item.status}</span></td>
						</tr>
                        )
                    })}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
