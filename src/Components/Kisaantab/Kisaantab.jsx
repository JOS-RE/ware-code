import React from "react";
import "./Kisaantab.scss"
// import ProgressBar from "./progress/3ProgressBar";
// import data1 from "../Data/data";
import data2 from "../Data/kdata";

export default function Kisaabtab() {
  return (
    <div style={{ marginBottom: "2%" }}>
      <div className="containerktab">
        <div>
          <h4 className="ktabHeading">Your Warehouse allotment details</h4>
          <ul className="responsive-tablek">
            <li className="table-header">
              <div className="col col-1">Crop</div>
              <div className="col col-2">Space Taken</div>
              <div className="col col-3">Space Left</div>
              <div className="col col-4">MSP</div>
              <div className="col col-5">Pricing</div>
              {/* <div className="col col-6">warehouse status</div> */}
            </li>

            {data2.map((i) => {
              return (
                <li className="table-row">
                  <div className="col col-1">{i.Crop}</div>
                  <div className="col col-2">{i.spaceTaken}</div>
                  <div className="col col-3">{i.spaceLeft}</div>
                  <div className="col col-4">{i.MSP}</div>
                  <div className="col col-5">{i.Pricing} Rs.</div>
                  {/* <div className="col col-6"><ProgressBar /></div> */}
                </li>
              );
            })}

            

          </ul>

        </div>

      </div>
    </div>
  );
}