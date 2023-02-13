import React from 'react'
import { Link } from 'react-router-dom'
import Menubar from '../Menubar/Menubar'
import './Header.css'

const Header = () => {
    const showProducts=()=>{
        document.getElementById('allproduct').style.display='block'
        document.getElementById('normimg').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/blue-logo_190x.png?v=1654228954'
        document.querySelector('.containerheader').style.backgroundColor='#fff'
        document.querySelector('.containerheader').style.transition='.5s'
    }
    const hide=()=>{
        document.getElementById('allproduct').style.display='none'
        document.getElementById('normimg').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x'
        document.querySelector('.containerheader').style.backgroundColor='#fabfa8'
        document.querySelector('.containerheader').style.transition='.5s'
    }

    
    const showStory=()=>{
        document.getElementById('allstory').style.display='block'
        document.getElementById('normimg').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/blue-logo_190x.png?v=1654228954'
        document.querySelector('.containerheader').style.backgroundColor='#fff'
        document.querySelector('.containerheader').style.transition='.5s'
    }
    const hideStory=()=>{
        document.getElementById('allstory').style.display='none'
        document.getElementById('normimg').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x'
        document.querySelector('.containerheader').style.backgroundColor='#fabfa8'
        document.querySelector('.containerheader').style.transition='.5s'
    }


    const showBlog=()=>{
        document.getElementById('allblog').style.display='block'
        document.getElementById('normimg').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/blue-logo_190x.png?v=1654228954'
        document.querySelector('.containerheader').style.backgroundColor='#fff'
        document.querySelector('.containerheader').style.transition='.5s'
    }
    const hideBlog=()=>{
        document.getElementById('allblog').style.display='none'
        document.getElementById('normimg').src='https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x'
        document.querySelector('.containerheader').style.backgroundColor='#fabfa8'
        document.querySelector('.containerheader').style.transition='.5s'
    }

    const openSearch=()=>{
        document.getElementById('allsearch').style.display='block'
        document.body.classList.add("stop-scrolling");
    }

    const closeSearch=()=>{
        document.getElementById('allsearch').style.display='none'
        document.body.classList.remove("stop-scrolling");
    }
    const hidePopup=()=>{
        document.getElementById('allsearch').style.display='none'
        document.body.classList.remove("stop-scrolling");
    }

    const openBasket=()=>{
        document.getElementById('basket').style.display='block'
        document.body.classList.add("stop-scrolling");
    }
    const closeBasket=()=>{
        document.getElementById('basket').style.display='none'
        document.body.classList.remove("stop-scrolling");
    }

    const hideBasket=()=>{
        document.getElementById('basket').style.display='none'
        document.body.classList.remove("stop-scrolling");
    }

    const openMenubar=()=>{
        document.getElementById('menubar').style.display='block'
        document.body.classList.add("stop-scrolling");
    }

  return (
    <header className='containerheader col-12'>
        <div className="all d-flex align-items-center justify-content-center col-lg-12 col-12">
        <div className="left col-lg-4 text-center col-2">
            <Link onClick={openMenubar} className='bars' to='/'><i class="fa-solid fa-bars"></i></Link>
            <Link className='search' to='/'><i onClick={openSearch} class="fa-solid fa-magnifying-glass"></i></Link>
            <Link  onMouseEnter={showProducts} onMouseLeave={hide} className='productslink' to='/'>Products</Link>
            <Link  onMouseEnter={showStory} onMouseLeave={hideStory} to='/'>Our Story</Link>
            <Link to='/'>Ingredients</Link>
        </div>
        <div className="center col-lg-4 col-6 text-center">
            <img id='normimg' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x.png?v=1654228576%201x,%20//cdn.shopify.com/s/files/1/0012/2296/7353/files/PF_Logo_White_Web-01_190x@2x.png?v=1654228576%202x" alt="" />
        </div>
        <div className='right col-lg-4 col-3 text-center row'>
            <div className="rightlinks">
            <Link to='/'>Find Us</Link>
            <Link onMouseEnter={showBlog} onMouseLeave={hideBlog} to='/'>Blog</Link>
            </div>
            <div className="icons">
            <Link className='searchNorm' to='/'><i onClick={openSearch} class="fa-solid fa-magnifying-glass"></i></Link>
            <Link className='user' to='/'><i class="fa-regular fa-user"></i></Link>
            <Link to='/'><i onClick={openBasket} class="fa-solid fa-dolly"></i></Link>
            </div>
        </div>
        </div>
        <div id="allproduct" onMouseLeave={hide} onMouseEnter={showProducts} >
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
                <br />
                <Link className='p' to='/'>VARIETY PACKS</Link>
                </div>
                <div className="box col-lg-3">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w" alt="" />
                <br />
                <Link className='p' to='/'>COOKIES</Link>
                </div>
                <div className="box col-lg-3">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w" alt="" />
                <br />
                <Link className='p' to='/'>BAKING MIXES</Link>
                </div>
                <div className="box col-lg-3">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Crunchy_Birthday_Cake_Testimonial_c0feafaf-e7e6-4f70-a7ec-3b5d4737ad13.png?v=1642494375w" alt="" />
                <br />
                <Link className='p' to='/'>BREAKFAST MIXES</Link>
                </div>
                </div>
            </div>
        </div>
        </div>
        <div id="allstory"  onMouseEnter={showStory} onMouseLeave={hideStory}>
        <div id='story' className="storymenu">
            <div className="all col-lg-12 d-flex text-center">
                <div className="box col-lg-3">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Denise_Vivi_Homepage_square.jpg?v=1642469781" alt="" />
                <br />
                <Link className='p' to='/'>ABOUT US</Link>
                </div>
                <div className="box col-lg-3">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/FAQ_556_556_1.png?v=1642470306" alt="" />
                <br />
                <Link className='p' to='/'>FAQ</Link>
                </div>
                <div className="box col-lg-3">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Ingredients_Menu_220x220_a254a351-a43f-4326-9630-6b50707c68ff.png?v=1642081962" alt="" />
                <br />
                <Link className='p' to='/'>INGREDIENTS</Link>
                </div>
                <div className="box col-lg-3">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/press_menu_750x.png?v=1642470439" alt="" />
                <br />
                <Link className='p' to='/'>PRESS</Link>
                </div>
            </div>
        </div>
        </div>
        <div id="allblog"  onMouseEnter={showBlog} onMouseLeave={hideBlog}>
        <div id='blog' className="blogmenu">
            <div className="all col-lg-12 d-flex text-center">
                <div className="box col-lg-4">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/From_the_blog_Menu_220x220_9832e985-14cf-4d41-a65e-f1d1ea2a1522.png?v=1642082421" alt="" />
                <br />
                <Link className='p' to='/'>FROM THE BLOG</Link>
                </div>
                <div className="box col-lg-4">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/From_Denise_Menu_2_220x220_b48d2c3f-45a2-403c-a5f8-dcbe9c3368e7.png?v=1642112887" alt="" />
                <br />
                <Link className='p' to='/'>FROM DENISE</Link>
                </div>
                <div className="box col-lg-4">
                <img src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Recipes_Menu_220x220_71d62ea7-69c1-4b81-a25f-e288f1e688a1.png?v=1642082702" alt="" />
                <br />
                <Link className='p' to='/'>PARTAKE RECIPES</Link>
                </div>
            </div>
        </div>
        </div>
        <div id="allsearch">
        <div className="blocker" onClick={hidePopup}></div>
        <div id="search" className='d-flex align-items-center justify-content-center col-lg-12 col-12'>
        <div className="form d-flex align-items-center col-lg-4 col-9">
            <input type="text" className='form-control shadow-none input' placeholder='Search'/>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <i onClick={closeSearch} className="fa-solid fa-xmark x ml-3"></i>
        </div>
        </div>
        <div id="basket">
            <div className="blockerBasket" onClick={hideBasket}></div>
            <div className="basket">
                <div className="header-basket row col-lg-12 align-items-center">
                <div><h3 className="header mt-4 ml-4">Your Cart</h3></div>
                <span className='mt-3 ml-2'>(0)</span>
                <div className="x">
                <i onClick={closeBasket} className="fa-solid fa-xmark x ml-3"></i>
                </div>
                </div>
                <div className="cartcontainer">
                    <div className="empty-cart">Your cart is empty</div>
                </div>
            </div>
        </div>
        <Menubar id='menubar'/>
    </header>
  )
}

export default Header