import React, { useState } from 'react'
import {FaShoppingCart} from "react-icons/fa";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Jewerly</span>

            <ul className='nav'>
            <li>About us</li>
            <li>Contacts</li>
            <li>Cabinet</li>
            </ul>
            <FaShoppingCart className = 'shop-cart-button' />
            </div>
            <div className='presentation'></div>
             </header>
  )
  }
