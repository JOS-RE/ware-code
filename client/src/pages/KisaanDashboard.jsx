import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Kisaabtab from "../Components/Kisaantab/Kisaantab";

import Footer from "../Components/Footer/Footer";

/***********************************/
//          Import components       //
/***********************************/

function KisaanDashboard() {
  return (
    <div style={{backgroundColor:"#F8DF8B"}}>
     {/* add the components here in < component name /> */}
     <Navbar />
      <Kisaabtab />
      <Footer />
    </div>
  );
}

export default KisaanDashboard;
