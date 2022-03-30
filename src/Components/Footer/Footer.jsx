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
        <span>Follow us</span>
        <div className="containerfooter">
            <a href="https://facebook.com"><i className="fab fa-facebook-f" ></i></a>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-github"></i>
        </div>
    </div>
    <br />
    </section>
    </div>
  )
}

export default Footer
