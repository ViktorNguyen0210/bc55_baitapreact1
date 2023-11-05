import React from 'react'

export default function Item() {
  return (
    <div className="card ms-3 mb-3" style={{width: '18rem'}}>
      <img src="./img/si1.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  )
}
