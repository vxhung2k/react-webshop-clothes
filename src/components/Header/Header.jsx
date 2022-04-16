import React, { useState/*, useRef, useEffect*/ } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/Logo.png'
import { HiOutlineMenuAlt2, HiUser } from 'react-icons/hi'
import { BsSearch,  BsArrowLeftCircle } from 'react-icons/bs'
import { motion } from "framer-motion"
import { useCart } from 'react-use-cart'
import { GiShoppingCart } from 'react-icons/gi'

const listNav = [
  {
    display: "Trang chủ",
    path: '/'
  },
  {
    display: "Sản phẩm",
    path: '/catalog'
  },
  {
    display: "Phụ kiện",
    path: '/accessories'
  },
  {
    display: "Liên hệ",
    path: '/contact'
  },

]

const Header = () => {

  const {
    totalUniqueItems
  } = useCart();

  const [isShowmenu, setShowmenu] = useState(false);
  const handlechange = () => {
    setShowmenu(!isShowmenu)
  }
/*const variantsibar={
  true:{
    width: 'fit-content',
  },
  false:{
    width:'0',
    transition:{
      delay:0.6
    }

  }
}*/










  return (

    <div className="header">
      <div className="header__container">

        <div className="menu__header__left">
          <div className="menu__header__left__mobile">
            {!isShowmenu ? (
              <HiOutlineMenuAlt2 className='icons' onClick={handlechange} />
            ) : (
              <BsArrowLeftCircle className='icons' onClick={handlechange} />
            )}


          </div>
          {!isShowmenu ? (
            <div className="menu__header__tablet">
              {
                listNav.map((item, index) => {
                  return (
                    <div className="menu__header__show" key={index}>
                      <Link to={item.path} className='text-light'>
                        <span>{item.display}</span>
                      </Link>
                    </div>)
                }
                )}
            </div>

          ) : (<motion.div className="menu__header__mobile "
          
            >
            {
              listNav.map((item, index) => {
                return (
                  <div className="menu__header__show " key={index}>
                    <Link to={item.path} className='text-light'>
                      <span>{item.display}</span>
                    </Link>
                  </div>)
              }
              )}
          </motion.div>)}



        </div>
        <div className="header__logo">
          <Link to='/' >
            <img src={logo} alt="" />
          </Link>

        </div>
        <div className="menu__header__right">
          <div className="search">
            <BsSearch className='icons' />
          </div>
          <Link to='/cart'>
          {totalUniqueItems}<GiShoppingCart className='icons1' />
          </Link>
          <Link to='/login'>
            <HiUser className='icons1' />
          </Link>


        </div>
      </div>
    </div>
    
  )
}

export default Header