import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Domain from "../../Constants";
import KisaanContext from "../../Context"
import "./LoginForm.css"

export default function LoginForm() {
    const navigate = useNavigate();
    const { kisaan, setKisaan } = useContext(KisaanContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(event){
        event.preventDefault();
        await fetch(Domain + "/login", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(response => response.json())
            .then(jsonData => {
                if (jsonData.token) {
                    console.log("login successful")
                    localStorage.setItem("token", jsonData.token);
                    localStorage.setItem("username", jsonData.username);
                    setKisaan({ username: jsonData.username, token: jsonData.token })
                    navigate("/dashboard");
                } else {
                    console.log("login failed")
                    localStorage.removeItem("token");
                    localStorage.removeItem("username");
                    setKisaan({ username: null, token: null });
                }
            });
    }

    return (
        <div>
            <div style={{ "backgroundColor": " linearGradient(to right, #4ac29a, #bdfff3)" }}>
                <form onSubmit={handleLogin}>
                    <div className="form2">
                        <div className="title">Welcome Back !</div>
                        <div className="subtitle">Let's log in to your account!</div>
                        <div className="input-container ic1">
                            <input
                                className="input"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(event) => { setUsername(event.target.value) }}
                            />
                            {/* <div className="cut"></div> */}
                            {/* <label htmlFor="firstname" className="placeholder" >Email</label> */}
                        </div>
                        <div className="input-container ic2">
                            <input
                                className="input"
                                type="text"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                            {/* <div className="cut"></div> */}
                            {/* <label htmlFor="lastname" className="placeholder" >Password</label> */}
                        </div>
                        <button type="submit" className="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}