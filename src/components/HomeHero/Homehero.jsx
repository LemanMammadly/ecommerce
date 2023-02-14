import React from 'react'
import { Link } from 'react-router-dom'
import './Homehero.css'

const Homehero = () => {
  return (
    <section className='homehero d-flex align-items-center justify-content-center'>
        <div className="all row col-lg-12 align-items-center justify-content-center">
        <div className="lefthero col-lg-5 col-12">
            <h1>Cinnamon Lovers, Rejoice</h1>
            <p>Our new Soft Baked Snickerdoodle cookies are chewy on the outside with a perfectly-balanced cinnamon sugar flavor on the inside.</p>
            <Link to='/'><button className='btn shadow-none'>SHOP NOW</button></Link>
        </div>
        <div className="righthero col-lg-6 col-12">
            <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/L2A8583-Edit_A.png?v=1675362349" alt="" />
        </div>
        </div>
    </section>
  )
}

export default Homehero