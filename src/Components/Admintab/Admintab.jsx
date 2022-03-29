import React from "react";
import "./Admintab.scss"
// import ProgressBar from "./progress/3ProgressBar";
import data3 from "../Data/adata";

export default function Kisaabtab() {
  return (
    <div style={{ marginBottom: "2%" }}>
      <div className="containerad">
        <div>
          <h4 className="ktabHeading">Customer Details</h4>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">S.no</div>
              <div className="col col-2">Name</div>
              <div className="col col-3">Wheat</div>
              <div className="col col-4">Barley</div>
              <div className="col col-5">Daal</div>
              <div className="col col-6">Capacity Used</div>
              <div className="col col-7">Total Price</div>
              <div className="col col-8">Contact</div>
              
              {/* <div className="col col-6">warehouse status</div> */}
            </li>

            {data3.map((i) => {
              return (
                <li className="table-rowad">
                  <div className="col col-1">{i.Sno}</div>
                  <div className="col col-2">{i.Name}</div>
                  <div className="col col-3">{i.Wheat}</div>
                  <div className="col col-4">{i.Barley}</div>
                  <div className="col col-5">{i.Daal}</div>
                  <div className="col col-6"><strong>{i.Capacity}</strong> Tn.</div>
                  <div className="col col-7">{i.Price} Rs.</div>
                  <div className="col col-8">{i.Contact}</div>
                </li>
              );
            })}

          </ul>

        </div>

      </div>
    </div>
  );
}