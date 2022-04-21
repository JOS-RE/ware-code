import React from "react";
import RegisterForm from "../Components/RegisterForm/RegisterForm";

/***********************************/
//          Import components      //
/***********************************/

function Register() {
  return (
    <div className="register-class">
     <div style={{background:" linearGradient(to right, #4ac29a, #bdfff3)", padding : "1%"}}>
     {/* add the components here in < component name /> */}
     <RegisterForm />
    </div>

    </div>
    
  );
}

export default Register;
