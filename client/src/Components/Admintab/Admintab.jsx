import React, { useState, useContext, useEffect } from "react";
import "./Admintab.scss"
// import ProgressBar from "./progress/3ProgressBar";
import { useNavigate } from "react-router-dom";
import data3 from "../Data/adata";
import Domain from "../../Constants";
import KisaanContext from "../../Context"

export default function Kisaabtab() {
    const navigate = useNavigate();
    const { kisaan, setKisaan } = useContext(KisaanContext);
    const [adminData, setAdminData] = useState([]);
    const [newCrop, setNewCrop] = useState({
        cropName: "",
        availableCapacity: null,
        totalCapacity: null,
        msp: null,
        currentPrice: null,
    });
    useEffect(() => {
        async function admin() {
            if (kisaan.username) {
                await fetch(Domain + "/admin", {
                    method: "GET"
                })
                    .then(response => response.json())
                    .then((jsonData) => {
                        if (jsonData.status === "ok") {
                            setAdminData(jsonData.adminData);
                            console.log(jsonData);
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
        admin();
    }, []);

    function handleCropNameChange(event, index) {
        event.preventDefault();
        var temp = [...adminData];
        temp[index].cropName = event.target.value;
        setAdminData(temp);
    }

    function handleAvailableCapacityChange(event, index) {
        event.preventDefault();
        var temp = [...adminData];
        temp[index].availableCapacity = event.target.value;
        setAdminData(temp);
    }

    function handleTotalCapacityChange(event, index) {
        event.preventDefault();
        var temp = [...adminData];
        temp[index].totalCapacity = event.target.value;
        setAdminData(temp);
    }
    function handleMspChange(event, index) {
        event.preventDefault();
        var temp = [...adminData];
        temp[index].msp = event.target.value;
        setAdminData(temp);
    }

    function handleCurrentPriceChange(event, index) {
        event.preventDefault();
        var temp = [...adminData];
        temp[index].currentPrice = event.target.value;
        setAdminData(temp);
    }

    async function handleShortening(event, index){
        event.preventDefault();
        await fetch(Domain + "/admin/shorten", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                fasalId: adminData[index]._id
            })
        })
            .then(response => response.json())
            .then((jsonData) => {
                console.log(JSON.stringify(jsonData))
                window.location.reload(false);
            })
    }

    async function handleUpdate(event, index) {
        event.preventDefault();
        await fetch(Domain + "/admin/update", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(
                adminData[index]
            )
        })
            .then(response => response.json())
            .then((jsonData) => {
                console.log(JSON.stringify(jsonData))
                window.location.reload(false);
            })
    }

    async function handleNewCrop(event) {
        event.preventDefault();
        await fetch(Domain + "/admin/newCrop", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(
                newCrop
            )
        })
            .then(response => response.json())
            .then((jsonData) => {
                console.log(JSON.stringify(jsonData))
                window.location.reload(false);
            })
    }

    return (
        <div style={{ marginBottom: "2%" }}>
            <div className="containerad">
                <div>
                    <h4 className="ktabHeading">Customer Details</h4>
                    <ul className="responsive-table" style={{ textAlign: "center" }}>
                        <li className="table-header">
                            <div className="col col-1">S.no</div>
                            <div className="col col-2">Crop</div>
                            <div className="col col-3">Available Capacity</div>
                            <div className="col col-4">Total Capacity</div>
                            <div className="col col-5">MSP</div>
                            <div className="col col-6">Current Price</div>
                            <div className="col col-7">Queue Length</div>
                            <div className="col col-8">Update</div>

                            {/* <div className="col col-6">warehouse status</div> */}
                        </li>

                        {adminData.map((i, index) => {
                            return (
                                <form onSubmit={(event) => { handleUpdate(event, index) }}>
                                    <li className="table-rowad">
                                        <div className="col col-1">{index + 1}</div>
                                        <div className="col col-2">
                                            <input
                                                type="text"
                                                value={i.cropName}
                                                onChange={(event) => { handleCropNameChange(event, index) }}
                                            />
                                        </div>
                                        <div className="col col-3">
                                            <input
                                                type="number"
                                                value={i.availableCapacity}
                                                onChange={(event) => { handleAvailableCapacityChange(event, index) }}
                                            /> kg
                                        </div>
                                        <div className="col col-4">
                                            <input
                                                type="number"
                                                value={i.totalCapacity}
                                                onChange={(event) => { handleTotalCapacityChange(event, index) }}
                                            /> kg
                                        </div>
                                        <div className="col col-5">
                                            Rs.
                                            <input
                                                type="number"
                                                value={i.msp}
                                                onChange={(event) => { handleMspChange(event, index) }}
                                            />
                                        </div>
                                        <div className="col col-6">
                                            <input
                                                type="number"
                                                value={i.currentPrice}
                                                onChange={(event) => { handleCurrentPriceChange(event, index) }}
                                            />
                                        </div>
                                        <div className="col col-7">{i.queue.length}</div>
                                        <div className="col col-8">
                                            <button type="button" onClick={(event) => {handleShortening(event, index)}}>Shorten queue</button>
                                            <button type="submit">Update</button>
                                        </div>
                                    </li>
                                </form>
                            );
                        })}
                        <form onSubmit={(event) => { handleNewCrop(event) }}>
                            <li className="table-rowad">
                                <div className="col col-1">New</div>
                                <div className="col col-2">
                                    <input
                                        type="text"
                                        value={newCrop.cropName}
                                        onChange={(event) => {
                                            const temp = {...newCrop};
                                            temp.cropName = event.target.value;
                                            setNewCrop(temp);
                                        }}
                                        placeholder="Crop Name"
                                    />
                                </div>
                                <div className="col col-3">
                                    <input
                                        type="number"
                                        value={newCrop.availableCapacity}
                                        onChange={(event) => {
                                            const temp = {...newCrop};
                                            temp.availableCapacity = event.target.value;
                                            setNewCrop(temp);
                                        }}
                                        placeholder="Available Capacity"
                                    /> kg
                                </div>
                                <div className="col col-4">
                                    <input
                                        type="number"
                                        value={newCrop.totalCapacity}
                                        onChange={(event) => {
                                            const temp = {...newCrop};
                                            temp.totalCapacity = event.target.value;
                                            setNewCrop(temp);
                                        }}
                                        placeholder="Total Capacity"
                                    /> kg
                                </div>
                                <div className="col col-5">
                                    Rs.
                                    <input
                                        type="number"
                                        value={newCrop.msp}
                                        onChange={(event) => {
                                            const temp = {...newCrop};
                                            temp.msp = event.target.value;
                                            setNewCrop(temp);
                                        }}
                                        placeholder="MSP"
                                    />
                                </div>
                                <div className="col col-6">
                                    <input
                                        type="number"
                                        value={newCrop.currentPrice}
                                        onChange={(event) => {
                                            const temp = {...newCrop};
                                            temp.currentPrice = event.target.value;
                                            setNewCrop(temp);
                                        }}
                                        placeholder="Current Price"
                                    />
                                </div>
                                <div className="col col-7"></div>
                                <div className="col col-8">
                                    <button type="submit">Add new crop</button>
                                </div>
                            </li>
                        </form>
                    </ul>

                </div>

            </div>
        </div>
    );
}