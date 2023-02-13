import React from 'react'
import { Link } from 'react-router-dom'
import './Manubar.css'

const Menubar = () => {
    const drop1=()=>{
        if(document.querySelector('.dropdown1').style.display==='none'){
            document.querySelector('.dropdown1').style.display='block'
            document.getElementById('icon1').className='fa-solid fa-caret-up'
            document.getElementById('iconss').style.top='0'
        }else{
            document.querySelector('.dropdown1').style.display='none'
            document.getElementById('icon1').className='fa-solid fa-caret-down'
            document.getElementById('iconss').style.top='240px'
        }
        
    }
    const drop2=()=>{
        if(document.querySelector('.dropdown2').style.display==='none'){
            document.querySelector('.dropdown2').style.display='block'
            document.getElementById('icon2').className='fa-solid fa-caret-up'
        }else{
            document.querySelector('.dropdown2').style.display='none'
            document.getElementById('icon2').className='fa-solid fa-caret-down'
        }

    }
    const drop3=()=>{
        if(document.querySelector('.dropdown3').style.display==='none'){
            document.querySelector('.dropdown3').style.display='block'
            document.getElementById('icon3').className='fa-solid fa-caret-up'
        }else{
            document.querySelector('.dropdown3').style.display='none'
            document.getElementById('icon3').className='fa-solid fa-caret-down'
        }
    }

    const closeMenubar=()=>{
        document.getElementById('menubar').style.display='none'
    }
  return (
    <div id='menubar'>
        <i onClick={closeMenubar} className="fa-solid fa-xmark x ml-3 x"></i>
        <ul> 
            <li onClick={drop1} className='main'>PRODUCTS <span><i id='icon1' className="fa-solid fa-caret-down"></i></span></li>
            <ul style={{display:"none"}} className='dropdown dropdown1'>
                <Link to='/'><li>Best Sellers</li></Link>
                <Link to='/'><li>Snack Packs</li></Link>
                <Link to='/'><li>Gifts</li></Link>
                <Link to='/'><li>Loyalty Program</li></Link>
                <Link to='/'><li>Build Your Own</li></Link>
                <Link to='/'><li>Variety Packs</li></Link>
                <Link to='/'><li>Cookies</li></Link>
                <Link to='/'><li>Baking Mixes</li></Link>
                <Link to='/'><li>Breakfast Mixes</li></Link>
            </ul>
            <hr />
            <li onClick={drop2} className='main'>OUR STORY <span><i id='icon2' className="fa-solid fa-caret-down"></i></span></li>
            <ul style={{display:"none"}} className='dropdown dropdown2'>
                <Link to='/'><li>About Us</li></Link>
                <Link to='/'><li>FAQ</li></Link>
                <Link to='/'><li>Ingredients</li></Link>
                <Link to='/'><li>Press</li></Link>
            </ul>
            <hr />
            <Link to='/'><li className='main'>INGREDIENTS</li></Link>
            <hr />
            <Link to='/'><li className='main'>FIND US</li></Link>
            <hr />
            <li onClick={drop3} className='main'>BLOG <span><i id='icon3' class="fa-solid fa-caret-down"></i></span></li>
            <ul style={{display:"none"}} className='dropdown dropdown3'>
                <Link to='/'><li>From the Blog</li></Link>
                <Link to='/'><li>From Denise</li></Link>
                <Link to='/'><li>Partake Recipes</li></Link>
            </ul>
            <hr />
            <ul className='icons iconstop' id='iconss'>
                <Link to='/'><li><i class="fa-brands fa-facebook"></i></li></Link>
                <Link to='/'><li><i class="fa-brands fa-square-instagram"></i></li></Link>
                <Link to='/'><li><i class="fa-brands fa-square-twitter"></i></li></Link>
                <Link to='/'><li><i class="fa-brands fa-pinterest"></i></li></Link>
                <Link to='/'><li><i class="fa-brands fa-tiktok"></i></li></Link>
            </ul>
        </ul>
    </div>
  )
}

export default Menubar
