import React from "react";
import ProgressBar from "../Components/table/progress/ProgressBar";
import Tableone from "../Components/table/Tableone";
import RegisterForm from "../Components/RegisterForm/RegisterForm";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
/***********************************/
//          Import components       //
/***********************************/

function Home() {
  return (
    <div style={{backgroundColor:"#F8DF8B"}}>

    {/* <ProgressBar /> */}
    <Navbar /> 
    <Tableone />
    {/* <RegisterForm /> */}
    <Footer />
    </div>
  );
}

export default Home;
