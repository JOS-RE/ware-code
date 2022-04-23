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
    async function queueHandler(event, cropId) {
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

    async function retractHandler(event, cropId) {
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
                    <h4 className="ktabHeading" style={{textAlign: "center" }}>Your Warehouse allotment details</h4>
                    <ul className="responsive-tablek">
                        <li className="table-header">
                            <div className="col col-1">Crop</div>
                            <div className="col col-2">Space<br /> Left</div>
                            <div className="col col-3">Total <br /> Space</div>
                            <div className="col col-4">MSP</div>
                            <div className="col col-5">Storage Pricing</div>
                            <div className="col col-6" style = {{fontSize : "1.2rem"}}>Your Status</div>
                        </li>

                        {dashboardData.map((i, index) => {
                            return (
                                <li className="table-row">
                                    <div className="col col-1">{i._doc.cropName}</div>
                                    <div className="col col-2">{i._doc.availableCapacity}</div>
                                    <div className="col col-3">{i._doc.totalCapacity}</div>
                                    <div className="col col-4">₹ {i._doc.msp}</div>
                                    <div className="col col-5">₹ {i._doc.currentPrice} Rs / KG</div>
                                    <div className="col col-6">
                                        {i.inQueue ? <>
                                            <div>
                                            Queue Status : {i.queueNumber}/{i._doc.queue.length} <br />
                                            <button className="statusqueue2" onClick={(event) => { retractHandler(event, i._doc._id) }}> Leave</button></div>
                                        </> : <button className="status-queue1" onClick={(event) => { queueHandler(event, i._doc._id) }}>Join Queue ! <br /> Waiting list : {i._doc.queue.length}</button>}
                                    </div>
                                </li>
                            );
                        })}



                    </ul>

                </div>
                
                <button className="logout-ktab" onClick={(event) => {
                    event.preventDefault();
                    setKisaan({ username: null, token: null });
                    localStorage.removeItem("token");
                    localStorage.removeItem("username");
                    navigate("/login");
                }}>Logout</button>
               
            </div>
        </div>
    )
}