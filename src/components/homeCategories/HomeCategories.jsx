import React from 'react'
import { Link } from 'react-router-dom'
import './HomeCategories.css'

const HomeCategories = () => {
    const changeFirst=()=>{
        document.getElementById('img1').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Cookies_3_section_nav_hover.png?v=1642494021'
    }
    const default1=()=>{
        document.getElementById('img1').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Cookies_3_section_nav_192f868f-c8ff-4c35-afb6-90de5212800e.png?v=1642493984'
    }
    const changeSecond=()=>{
        document.getElementById('img2').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Breakfast_Mixes_3_section_nav_hover_307b1e1f-cb39-4684-9a7c-39b569637552.png?v=1642494106'
    }
    const default2=()=>{
        document.getElementById('img2').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Breakfast_Mixes_3_section_nav_0a2c96b7-42ca-4c51-9a52-5b1faf7fcc82.png?v=1642494077'
    }
    const changeThird=()=>{
        document.getElementById('img3').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Baking_Mixes_3_section_nav_hover_a41491bf-d6b4-4bd2-9515-d57cbe4e874f.png?v=1642494190'
    }
    const default3=()=>{
        document.getElementById('img3').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Baking_Mixes_3_section_nav_ad99e55f-58d3-46f2-b086-e2173be4814d.png?v=1642494158'
    }
  return (
    <section className='homeCategories'>
       <div className="all d-flex">
       <div id='left' className="leftcategory col-lg-4 col-12">
            <Link id='link1' onMouseEnter={changeFirst} onMouseLeave={default1} className='allleft' to='/'>
            <h2>Cookies</h2>
            <span className="btn1">SHOP NOW</span>
            <img id='img1' className='img' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Cookies_3_section_nav_192f868f-c8ff-4c35-afb6-90de5212800e.png?v=1642493984" alt="" />
            </Link>
        </div>
        <div className="centercategory col-lg-4 col-12">
        <Link onMouseEnter={changeSecond} onMouseLeave={default2} className='allcenter' to='/'>
            <h2>Breakfast Mixes</h2>
            <span className="btn2">SHOP NOW</span>
            <img id='img2' className='img' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Breakfast_Mixes_3_section_nav_0a2c96b7-42ca-4c51-9a52-5b1faf7fcc82.png?v=1642494077" alt="" />
        </Link>
        </div>
        <div className="rightcategory col-lg-4 col-12">
        <Link onMouseEnter={changeThird} onMouseLeave={default3} className='allright' to='/'>
            <h2>Baking Mixes</h2>
            <span className="btn3">SHOP NOW</span>
            <img id='img3' className='img' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Baking_Mixes_3_section_nav_ad99e55f-58d3-46f2-b086-e2173be4814d.png?v=1642494158" alt="" />
        </Link>
        </div>
       </div>
    </section>
  )
}

export default HomeCategories