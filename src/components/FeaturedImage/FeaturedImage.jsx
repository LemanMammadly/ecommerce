import React from 'react'
import { Link } from 'react-router-dom'
import './FeaturedImage.css'

const FeaturedImage = () => {
  return (
    <section className='featuredimage'>
        <div className="all d-flex">
            <div className="leftfeatured">
                <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Denise_Vivi_Homepage_750x643_171e6b49-0099-4151-b5e2-b0c8dc49246f_750x.jpg?v=1641972523" alt="" />
            </div>
            <div className="rightfeatured col-lg-6">
                <div className="allrighttext">
                <div className="textfeatured">
                <h2>Building a Bigger Table</h2>
                <p className='textp'>A portion of proceeds support families living with food insecurity.</p>
                </div>
                <div className="iconfeatured">
                <div className="fristicon d-flex"><i class="fa-solid fa-hand-holding-heart"></i><p>Championing Food Inclusivity</p></div>
                <div className="fristicon d-flex"><i class="fa-solid fa-utensils"></i><p>Fighting Food Insecurity</p></div>
                <div className="fristicon d-flex"><i class="fa-solid fa-door-open"></i><p>Creating Opportunities in CPG</p></div>
                </div>
                <Link to='/'>READ MORE</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedImage