import React from "react";
import "./LoginForm.css"

export default function LoginForm() {
    return (
       <div>
            <div style ={{ "backgroundColor": " linearGradient(to right, #4ac29a, #bdfff3)"}}>
            

                <div className="form2">
                    <div className="title">Welcome Back !</div>
                    <div className="subtitle">Let's log in to your account!</div>
                    <div className="input-container ic1">
                        <input id="firstname" className="input" type="text" placeholder="Email" />
                        {/* <div className="cut"></div> */}
                        {/* <label htmlFor="firstname" className="placeholder" >Email</label> */}
                    </div>
                    <div className="input-container ic2">
                        <input id="lastname" className="input" type="password" placeholder="Password" />
                        {/* <div className="cut"></div> */}
                        {/* <label htmlFor="lastname" className="placeholder" >Password</label> */}
                    </div>
                    <button type="text" className="submit">Submit</button>
                </div>
            </div>
        </div>
    );
}