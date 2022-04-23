import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Domain from "../../Constants";
import KisaanContext from "../../Context"
import "./RegisterForm.css"

export default function RegisterForm() {
    const navigate = useNavigate();
    const { kisaan, setKisaan } = useContext(KisaanContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    async function handleRegister(event) {
        event.preventDefault();
        await fetch(Domain + "/register", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                username,
                name,
                password
            })
        })
            .then(response => response.json())
            .then(jsonData => {
                if (jsonData.status === "ok") {
                    console.log("register successful")
                    setTimeout(() => {
                        navigate("/login");
                    }, 800);
                } else if (jsonData.status === "error") {
                    console.log("register failed");
                    navigate("/register")
                }
            });
    }
    return (
        <div>
            <form onSubmit={handleRegister}>
                <div className="formr">
                    <div className="title">Welcome</div>
                    <div className="subtitle">Already a user ? <Link to="/login">Log in</Link> here</div>
                    <div className="input-container ic1">
                        <input id="firstname" className="input" type="text" placeholder="Full Name " value={name} onChange={(e) => setName(e.target.value)} />
                        {/* <div className="cut"></div>
                        <label for="firstname" className="placeholder">Name</label> */}
                    </div>
                    <div className="input-container ic2">
                        <input id="lastname" className="input" type="text" placeholder="Username " value={username} onChange={(e) => setUsername(e.target.value)} />
                        {/* <div className="cut"></div>
                        <label for="lastname" className="placeholder">Email</label> */}
                    </div>
                    <div className="input-container ic2">
                        <input id="email" className="input" type="password" placeholder="Password " value={password} onChange={(e) => setPassword(e.target.value)} />
                        {/* <div className="cut cut-short"></div>
                        <label for="email" className="placeholder">Password</label> */}
                    </div>
                    <button type="submit" className="submit">Submit</button>
                </div>
            </form>
        </div>

    );
}