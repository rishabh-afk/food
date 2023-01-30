import React from 'react'
import BannerImg from '../../assets/images/banner.jpg';

const Banner = () => {
  return (
    <section className='h-screen'>
    <div>
      <img src={BannerImg} alt="" />
    </div>
    </section>
  )
}

export default Banner