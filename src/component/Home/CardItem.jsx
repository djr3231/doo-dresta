import React from 'react'

const CardItem = (props) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img src="https://th.bing.com/th/id/R.e8d2d5d7a6f3030e6d03029d9a4f099a?rik=Cb8fRM52becH6A&pid=ImgRaw&r=0" alt="Album" /></figure>
      <div className="card-body ">
        <h2 className="card-title">name</h2>
        <p>****** 77 reviews</p>
        <p><label> indian</label> <span className="font-bold"> $$$</span><span >$</span> <label> city</label> </p>
        <p className='fw-bold' >ordered 3 times today</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  )
}

export default CardItem



