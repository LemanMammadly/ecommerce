import React from 'react'
import styles from './FreeShipping.module.css'

const FreeShipping = () => {
  return (
    <div className={`${styles.freeshipping} d-flex align-items-center justify-content-center`} >
        <p className='m-0'>Free Shipping on Orders $29.99+</p>
        <i className={`fa-solid fa-arrow-right-long ml-3 ${styles.arrow}`}></i>
    </div>
  )
}

export default FreeShipping