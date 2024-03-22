import React from 'react';
import heroSlider from '../../res/hero-slider.svg';
import hero from '../../res/hero.png';
import artist1 from '../../res/hero-artist-ico.svg';
import Artist from '../Artist/Artist';
import HeroBtn from '../HeroBtn/HeroBtn';
import './HeroSec.css';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSec({showBtn, colType, colName, colDes}) {
  return (
    <div className="hero-sec-container">
        <div className="hero-slider">
            <img src={heroSlider} alt="hero-slider" className="hero-slider-img" />
        </div>
        <div className="hero-sec-content">
        <Link to={'/product'}><Button className="hero-sec-top-btn rounded-pill rose-btn black-txt">Trending Now</Button></Link>         

            <Card style={{ width: '95vw', margin: '0 auto' }} className='border-0 hero-card'>
                <div className="hero-img-container">
                    <Card.Img style={{ width: '100%', margin: '0 auto' }} variant="top hero-img" src={hero} />
                </div>
                <Card.Body className='card-text'>
                    <Card.Subtitle className='hero-card-sub-title'>{colType}</Card.Subtitle>
                    <Card.Title className='hero-card-main-title'>{colName}</Card.Title>
                    <Card.Text className='hero-card-text'>{colDes}</Card.Text>
                    <Artist artistPP={artist1} artistName='Léa Jacquot' />
                    {showBtn && <HeroBtn />}
                    {/* <HeroBtn /> */}
                </Card.Body>
            </Card>
        </div>
        
    </div>
  );
}
export default HeroSec;