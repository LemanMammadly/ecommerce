import React from 'react'
import './Safe.css'
import {GiCoconuts, GiCoffeeBeans, GiJellyBeans, GiJellyfish, GiSesame, GiWheat} from 'react-icons/gi'
import {BsFillEggFill} from 'react-icons/bs'
import {TbBottle} from 'react-icons/tb'
import {FaFish} from 'react-icons/fa'

const Safe = () => {
  return (
    <section className='safe'>
        <div className="all">
            <div className="topsafe">
                <h2>Safe to Share</h2>
                <p>All Partake products are free of the top 9 allergens.</p>
            </div>
            <div className="bottomsafe d-flex align-items-center justify-content-center">
                <div><GiJellyBeans className='icondiv'/><p>Peanuts</p></div>
                <div><BsFillEggFill className='icondiv'/><p>Eggs</p></div>
                <div><TbBottle className='icondiv'/><p>Dairy</p></div>
                <div><GiCoffeeBeans className='icondiv'/><p>Soy</p></div>
                <div><GiCoconuts className='icondiv'/><p>Tree Nuts</p></div>
                <div><GiSesame className='icondiv'/><p>Seasame</p></div>
                <div><FaFish className='icondiv'/><p>Fish</p></div>
                <div><GiWheat className='icondiv'/><p>Wheat</p></div>
                <div><GiJellyfish className='icondiv'/><p>Shellfish</p></div>
            </div>
        </div>
    </section>
  )
}

export default Safe