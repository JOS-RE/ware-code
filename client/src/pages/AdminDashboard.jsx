import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Admintab from "../Components/Admintab/Admintab";
import Footer from "../Components/Footer/Footer";
/***********************************/
//          Import components       //
/***********************************/

function AdminDashboard() {
    return (
        <div style={{ backgroundColor: "#F8DF8B" }}>
            {/* add the components here in < component name /> */}
            < Navbar />
            Admin Dashboard
            <Admintab />
            <Footer />
        </div>
    );
}

export default AdminDashboard;