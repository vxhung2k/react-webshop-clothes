import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components'
import { SliderHome, Policy, ProductCard } from '../../components'

const HomePage = () => {

  return (


    <Layout>
      <div className='homepage'>
        <SliderHome />
        <Link to='/policy'>
          <Policy />
        </Link>

        <ProductCard />




      </div>
    </Layout>

  )
}

export default HomePage