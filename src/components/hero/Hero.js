import React from 'react';
import HeroButton from '../hero-button';
import style from './style.scss';
import '../../global.css';
import logo from '../../assets/hoc_logo.png';

/**
 * @render react
 * @name Hero
 * @description Netflix's Hero banner, shows our featured content.
 * 
 * @example
 * <Hero
 *   title="Season 66 will be available soon!"
 *   description="Lorem ipsum dolor sit amet hey! id quam sapiente unde voluptatum alias vero debitis, magnam quis quod."
 * />
 */
const Hero = (props) => (
  <div
    className={style.Hero}
    style={{ backgroundImage: 'url(https://images3.alphacoders.com/696/696653.jpg)' }}
  >
    <div className={style.content}>
      <img
        className={style.logo}
        src={logo}
        alt="background"
      />
      <h2>{props.slider.title}</h2>
      <p>{props.slider.description}</p>
      <div className={style['button-wrapper']}>
        <HeroButton primary text="Watch now" />
        <HeroButton primary={false} text="+ My list" />
      </div>
    </div>
    <div className={style.overlay}></div>
  </div>
);



export default Hero;
