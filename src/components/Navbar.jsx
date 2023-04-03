import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img src="https://www.pngitem.com/pimgs/m/136-1364593_falcon-png-download-simple-falcon-logos-transparent-png.png" alt="" width="50px" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#"><img src="https://vectorflags.s3.amazonaws.com/flags/us-square-01.png" alt="" width="20px" className="rounded-circle" /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img src="https://vectorflags.s3.amazonaws.com/flags/ca-square-01.png" alt="" width="20px" className="rounded-circle" /></a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link"><img src="https://vectorflags.s3.amazonaws.com/flags/de-square-01.png" alt="" width="20px" className="rounded-circle" /></a>
            </li>
          </ul>
          <div>
            <a href="About Us">About Us</a>
          </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar