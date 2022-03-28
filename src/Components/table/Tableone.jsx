import React from "react";
import "./table.css"
import ProgressBar from "./progress/ProgressBar";
import data1 from "../Data/data";

export default function Tableone() {
    return(
        <div style={{marginBottom:"2%"}}>
        <div className="container">
            <div>
            <h4>Current Warehouse Capacity</h4>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Crop</div>
            <div className="col col-2">space alloted</div>
            <div className="col col-3">Total space</div>
            <div className="col col-4">MSP</div>
            <div className="col col-5">Pricing</div>
            <div className="col col-6">warehouse status</div>
          </li>
          
            {data1.map((i)=>{
              return(
              <li className="table-row">
              <div className="col col-1">{i.Crop}</div>
              <div className="col col-2">{i.spaceTaken}</div>
              <div className="col col-3">{i.spaceLeft}</div>
              <div className="col col-4">{i.MSP}</div>
              <div className="col col-5">{i.Pricing}</div>
              <div className="col col-6"><ProgressBar /></div>
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