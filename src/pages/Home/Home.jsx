import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play__icon from '../../assets/play_icon.png'
import info__icon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner__img'/>
        <div className='hero__caption'>
            <img src={hero_title} alt="" className='caption__img'/>
            <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
            <div className="hero__btns">
                <button className='btn'><img src={play__icon} alt="" />Play</button>
                <button className='btn dark__btn'><img src={info__icon} alt="" />More Info</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
