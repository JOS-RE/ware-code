import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Kisaantab.scss"
// import ProgressBar from "./progress/3ProgressBar";
// import data1 from "../Data/data";
import Domain from "../../Constants";
import KisaanContext from "../../Context"

export default function Kisaabtab() {
    const navigate = useNavigate();
    const { kisaan, setKisaan } = useContext(KisaanContext);
    const [dashboardData, setDashboardData] = useState([]);
    useEffect(() => {
        async function dashboard() {
            if (kisaan.username) {
                await fetch(Domain + "/dashboard", {
                    headers: { "x-access-token": kisaan.token, "username": kisaan.username },
                    method: "GET"
                })
                    .then(response => response.json())
                    .then((jsonData) => {
                        if (jsonData.status === "ok") {
                            setDashboardData(jsonData.dashboardData);
                            console.log(jsonData.dashboardData);
                        } else {
                            setTimeout(() => {
                                setKisaan({ username: null, token: null });
                                localStorage.removeItem("token");
                                localStorage.removeItem("username");
                                navigate("/login");
                            }, 1500);
                        }
                    });
            } else {
                // token not available
                setTimeout(() => {
                    setKisaan({ username: null, token: null });
                    localStorage.removeItem("token");
                    localStorage.removeItem("username");
                    navigate("/login");
                }, 300);
            }
        }
        dashboard();
    }, []);
    async function queueHandler(event, cropId){
        event.preventDefault();
        await fetch(Domain + "/queue", {
            method: "POST",
            headers: { "content-type": "application/json", "x-access-token": kisaan.token, "username": kisaan.username },
            body: JSON.stringify({
                cropId
            })
        })
            .then(response => response.json())
            .then(() => {
                window.location.reload(false);
            })
    }

    async function retractHandler(event, cropId){
        event.preventDefault();
        await fetch(Domain + "/retract", {
            method: "POST",
            headers: { "content-type": "application/json", "x-access-token": kisaan.token, "username": kisaan.username },
            body: JSON.stringify({
                cropId
            })
        })
            .then(response => response.json())
            .then(() => {
                window.location.reload(false);
            })
    }
    return (
        <div style={{ marginBottom: "2%" }}>
            <div className="containerktab">
                <div>
                    <h4 className="ktabHeading">Your Warehouse allotment details</h4>
                    <ul className="responsive-tablek">
                        <li className="table-header">
                            <div className="col col-1">Crop</div>
                            <div className="col col-2">Available Space</div>
                            <div className="col col-3">Total Space</div>
                            <div className="col col-4">MSP</div>
                            <div className="col col-5">Current Price</div>
                            <div className="col col-6">Your Status</div>
                        </li>

                        {dashboardData.map((i, index) => {
                            return (
                                <li className="table-row">
                                    <div className="col col-1">{i._doc.cropName}</div>
                                    <div className="col col-2">{i._doc.availableCapacity}</div>
                                    <div className="col col-3">{i._doc.totalCapacity}</div>
                                    <div className="col col-4">{i._doc.msp}</div>
                                    <div className="col col-5">{i._doc.currentPrice} Rs.</div>
                                    <div className="col col-6">
                                        {i.inQueue ? <>
                                            No. {i.queueNumber}/{i._doc.queue.length} in queue <br/>
                                            <button onClick={(event) => {retractHandler(event, i._doc._id)}}>Retract</button>
                                        </> : <button onClick={(event) => {queueHandler(event, i._doc._id)}}>Queue yourself! <br />{i._doc.queue.length} in queue</button>}
                                    </div>
                                </li>
                            );
                        })}



                    </ul>

                </div>

            </div>
        </div>
    )
}