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
                    <h4 style={{ color: "#1f1e1e" }}>Current Warehouse Capacity</h4>

                    <br />
                    <ul className="responsive-tableh">
                        <li className="table-header">
                            <div className="col col-1">Crop</div>
                            <div className="col col-2">Available Capacity</div>
                            <div className="col col-3">Total Capacity</div>
                            <div className="col col-4">MSP</div>
                            <div className="col col-5">Pricing</div>
                            <div className="col col-6">Queue length</div>
                        </li>

                        {fasalData.map((i) => {
                            return (
                                <li className="table-row">
                                    <div className="col col-1">{i.cropName}</div>
                                    <div className="col col-2">{i.availableCapacity} kg</div>
                                    <div className="col col-3">{i.totalCapacity} kg</div>
                                    <div className="col col-4">₹ {i.msp} / kg</div>
                                    <div className="col col-5">₹ {i.currentPrice} / kg</div>
                                    <div className="col col-6">{i.queue.length} kisaan</div>
                                </li>
                            );
                        })}

                        {/* <li className="table-row">
            <div className="col col-1" data-label="Crop">Wheat</div>
            <div className="col col-2" data-label="space-taken">35 tonnes</div>
            <div className="col col-3" data-label="space-left">500 space</div>
            <div className="col col-4" data-label="">2200 / tonne</div>
            <div className="col col-5" data-label="">$ 1200</div>
            <div className="col col-6" data-label="">
                <ProgressBar />
            </div>
          </li>
          <li className="table-row">
            <div className="col col-1" data-label="Crop">Barley</div>
            <div className="col col-2" data-label="space-taken">35 tonnes</div>
            <div className="col col-3" data-label="space-left">500 space</div>
            <div className="col col-4" data-label="">2200 / tonne</div>
            <div className="col col-5" data-label="">$ 1200</div>
            <div className="col col-6" data-label="">
                <ProgressBar />
            </div>
          </li>
          <li className="table-row">
            <div className="col col-1" data-label="Crop">Dal</div>
            <div className="col col-2" data-label="space-taken">35 tonnes</div>
            <div className="col col-3" data-label="space-left">500 space</div>
            <div className="col col-4" data-label="">2200 / tonne</div>
            <div className="col col-5" data-label="">$ 1200</div>
            <div className="col col-6" data-label="">
                <ProgressBar />
            </div>
          </li> */}

                    </ul>

                </div>
            </div>
        </div>
    );
}