import heroSlider from '../../res/hero-slider.svg';
import hero from '../../res/hero.png';
import artist1 from '../../res/hero-artist-ico.svg';
// import Artist from '../Artist/Artist';
import './HeroSec.css';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSec(props) {
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
                    <Card.Subtitle className='hero-card-sub-title'>{props.colType}</Card.Subtitle>
                    <Card.Title className='hero-card-main-title'>{props.colName}</Card.Title>
                    {/* <Artist artistPP={artist1} artistName='Léa Jacquot' /> */}
                    <div className="artist">
                        <div className="artist-pp">
                            <img style={{width:"100%"}} src={artist1} alt="artist" />
                        </div>
                        <div className="artist-dtls">
                            <Card.Subtitle className='title'>Artist</Card.Subtitle>
                            <Card.Title className='artist-name'>Léa Jacquot</Card.Title>
                        </div>

                    </div>

                    <Button variant=" rounded-pill black-txt dark-grey-bg white-txt hero-btm-btn hero-btm-btn1" >Buy</Button>
                    <Button variant=" rounded-pill rose-btn black-txt hero-btm-btn hero-btm-btn2"><Link to={'/product'}>See collection</Link></Button>
                </Card.Body>
            </Card>
        </div>
        
    </div>
  );
}
export default HeroSec;