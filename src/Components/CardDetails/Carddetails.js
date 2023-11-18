import React from 'react'
import './Carddetails.css'

const Carddeatils = () => {
  return (
    <div className='cardcontainer'>
      <h3>Card details</h3>
      <div className="seccon">
        <div className="itemsdetails">
          <div className="imgitem">
            <img src="https://images.unsplash.com/photo-1618354691321-e851c56960d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div className="itemdata">
            <div className="left">
            <div className="text">
              <p><b>Title:</b> Tshirt long selvves</p>
            </div>
            <div className="text">
              <p><b>Price:</b>₹300</p>
            </div>
            <div className="text">
              <p><b>Total:</b> ₹300 </p>
            </div>
            </div>
            <div className="right">

            <div className="text">
              <p><b>Rating:</b> <span>3.5 ★</span>  </p>
            </div>
            <div className="text">
              <p><b>Review:</b> Good</p>
            </div>

            <div className="text">
              <p><b>Quantity:</b> 1</p>
            </div>

            <div className="text">
              <p><b>Remove:</b> <i className='fas fa-trash'></i></p>
            </div>

            </div>


          </div>
        </div>

      </div>

    </div>
  )
}

export default Carddeatils