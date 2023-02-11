import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const showProducts=()=>{
        document.getElementById('allproduct').style.display='block'
        document.getElementById('hoverimg').style.display='block'
        document.getElementById('normimg').style.display='none'
    }
    const hide=()=>{
        document.getElementById('allproduct').style.display='none'
        document.getElementById('hoverimg').style.display='none'
        document.getElementById('normimg').style.display='block'
    }
  return (
    <header className='containerheader'>
        <div className="all row align-items-center justify-content-center col-lg-12">
        <div className="left col-lg-4 text-center">
            <Link  onMouseEnter={showProducts} className='productslink' to='/'>Products</Link>
            <Link to='/'>Our Story</Link>
            <Link to='/'>Ingredients</Link>
        </div>
        <div className="center col-lg-4  text-center">
            <img id='normimg' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x" alt="" />
            <img id='hoverimg' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/blue-logo_190x@2x.png?v=1654228954" alt="" />
        </div>
        <div className='right col-lg-4 text-center row'>
            <div className="rightlinks">
            <Link to='/'>Find Us</Link>
            <Link to='/'>Blog</Link>
            </div>
            <div className="icons">
            <Link to='/'><i class="fa-solid fa-magnifying-glass"></i></Link>
            <Link to='/'><i class="fa-regular fa-user"></i></Link>
            <Link to='/'><i class="fa-solid fa-dolly"></i></Link>
            </div>
        </div>
        </div>
        <div id="allproduct" onMouseLeave={hide}>
        <div id='product' className="productsmenu col-lg-12 d-flex">
            <div className="leftpmenu col-lg-3  text-left mt-3">
                <ul>
                    <li><a href="/">Best Sellers</a></li>
                    <li><a href="/">Snack Packs</a></li>
                    <li><a href="/">Gifts</a></li>
                    <li><a href="/">Loyalty Program</a></li>
                    <li><a href="/">Build Your Own</a></li>
                </ul>
            </div>
            <div className="rightpmenu col-lg-9">
                <div className="boxes col-lg-12 row">
                <div className="box col-lg-3">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w" alt="" />
                <p>VARIETY PACKS</p>
                </div>
                <div className="box col-lg-3">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w" alt="" />
                <p>COOKIES</p>
                </div>
                <div className="box col-lg-3">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w" alt="" />
                <p>BAKING MIXES</p>
                </div>
                <div className="box col-lg-3">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w" alt="" />
                <p>BREAKFAST MIXES</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header