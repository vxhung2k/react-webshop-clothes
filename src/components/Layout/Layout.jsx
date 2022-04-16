import React from 'react'
import { Header, Footer } from '../../components'

import '../../App.css';


function Layout (props) {
  return (
    
        <div className='Layout'>
          <Header/>
          <div className=" container__layout">
            {props.children}
          </div>
          <Footer />
        </div>
      )

     
  
}

export default Layout