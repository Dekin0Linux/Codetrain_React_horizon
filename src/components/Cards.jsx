import React from 'react'

function Cards() {
  return (
    <div>
        <div className="container my-5">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <img src={require('../images/1.jpg')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, in porro. Natus alias voluptatem
                      </p>
                    </div>
                  </div>
            </div>

            <div className="col-md-3">
                <div className="card">
                    <img src={require('../images/2.jpg')} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, in porro. Natus alias voluptatem
                      </p>
                    </div>
                  </div>
            </div>

            <div className="col-md-3">
                <div className="card">
                    <img src={require('../images/3.jpg')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, in porro. Natus alias voluptatem
                      </p>
                    </div>
                  </div>
            </div>

            <div className="col-md-3">
                <div className="card">
                    <img src={require('../images/1.jpg')} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, in porro. Natus alias voluptatem
                      </p>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cards