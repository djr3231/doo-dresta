import React from 'react'

const CardItem = ({id, name, city, price, main_image, cuisine, images, description}) => {



  return (
    <div className="card bg-base-100 shadow-xl" >
      <figure><img src="https://th.bing.com/th/id/R.e8d2d5d7a6f3030e6d03029d9a4f099a?rik=Cb8fRM52becH6A&pid=ImgRaw&r=0" alt="Album" /></figure>
      <div className="card-body ">
        <h2 className="card-title"></h2>
        <p><span>******</span> <span className="font-extrabold">|</span> <span>77 reviews</span> </p>
        <p><label> indian</label> <span className="font-bold"> $$$</span><span >$</span> <label> city</label> </p>
        <p className='font-extrabold' >ordered 3 times today</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order new</button>
        </div>
      </div>
    </div>
  )
}

export default CardItem



