import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <section id="footer" style={{"backgroundColor": "#F8DF8B"}}>
      <div  className="footer_t">
          Managed and presented by Team Ware-Code
      </div>
       <div className="btn_wrap">
        <span>Explore more</span>
        <div className="containerfooter">
            <a href="https://www.enam.gov.in/web/"><i className="fa fa-balance-scale" ></i></a>
            <i href="https://farmer.gov.in/" className="fa fa-building"></i>
            <i href="https://agmarknet.gov.in/" className="fa fa-globe"></i>
            <i href="https://github.com/guptasajal411/ware-code" className="fab fa-github"></i>
        </div>
    </div>
    <br />
    </section>
    </div>
  )
}

export default Footer
