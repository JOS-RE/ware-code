import React, { useEffect, useState } from "react";
import "./Tableone.scss"
import ProgressBar from "./progress/ProgressBar";
// import data1 from "../Data/data";
import Domain from "../../Constants"

export default function Tableone() {
    const [fasalData, setFasalData] = useState([]);
    useEffect((async () => {
        const data = await (
            await fetch(`${Domain}/`, {
                method: "GET"
            })
        ).json();
        console.log(data);
        setFasalData(data.fasal);
    }), [])
    return (
        <div style={{ marginBottom: "2%" }}>


            <div className="containehm" style={{ background: "#f8df8b" }}>
                <div>
                    <div className="headingHomePage">
                    <h4 style={{ color: "#1f1e1e", textAlign: "center" }} >Current Warehouse Capacity</h4>
                    </div>
                    <br />
                    <ul className="responsive-tableh">
                        <li className="table-header">
                            <div className="col col-1">Crop</div>
                            <div className="col col-2">Available Capacity</div>
                            <div className="col col-3">Total Capacity</div>
                            <div className="col col-4">MSP</div>
                            {/* <div className="col col-5">Pricing</div> */}
                            <div className="col col-6">Queue length</div>
                        </li>

                        {fasalData.map((i) => {
                            return (
                                <li className="table-row">
                                    <div className="col col-1">{i.cropName}</div>
                                    <div className="col col-2">{i.availableCapacity} kg</div>
                                    <div className="col col-3">{i.totalCapacity} kg</div>
                                    <div className="col col-4">₹ {i.msp} / kg</div>
                                    {/* <div className="col col-5">₹ {i.currentPrice} / kg</div> */}
                                    <div className="col col-6">{i.queue.length} kisaan</div>
                                </li>
                            );
                        })}

                        

                    </ul>

                </div>
            </div>
        </div>
    );
}