import React from "react";
import "./RegisterForm.css"

export default function RegisterForm() {
    return (
        
        <div >
            <div className="formr"> 
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic1">
                    <input id="firstname" className="input" type="text" placeholder="Full Name " />
                    {/* <div className="cut"></div>
                    <label for="firstname" className="placeholder">Name</label> */}
                </div>
                <div className="input-container ic2">
                    <input id="lastname" className="input" type="text" placeholder="Email " />
                    {/* <div className="cut"></div>
                    <label for="lastname" className="placeholder">Email</label> */}
                </div>
                <div className="input-container ic2">
                    <input id="email" className="input" type="text" placeholder="Password " />
                    {/* <div className="cut cut-short"></div>
                    <label for="email" className="placeholder">Password</label> */}
                </div>
                <div className="input-container ic2">
                    <input id="email" className="input" type="text" placeholder="Confirm Password " />
                    {/* <div className="cut cut-short"></div>
                    <label for="email" className="placeholder">Confirm Password</label> */}
                </div>
                <button type="text" className="submit">Submit</button>
            </div>
        </div>
      
    );
}