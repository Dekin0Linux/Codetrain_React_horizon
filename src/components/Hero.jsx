import React from 'react'

function Hero() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('../images/1.jpg')} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={require('../images/2.jpg')} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={require('../images/3.jpg')} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
    </div>
    </div>
  )
}

export default Hero