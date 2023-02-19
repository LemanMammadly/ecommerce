import React from 'react'
import { Link } from 'react-router-dom'
import './Neighborhood.css'

const Neighborhood = () => {
  return (
    <section className='neighborhood'>
        <div className="all">
            <div className="textdiv d-flex justify-content-center">
                <h3>Partake in your neighborhood.</h3>
                <Link to='/'>FIND A STORE</Link>
            </div>
        </div>
    </section>
  )
}

export default Neighborhood