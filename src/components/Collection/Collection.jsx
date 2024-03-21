import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
import Artist from '../Artist/Artist';
import './Collection.css';
// import artist1 from '../../res/hero-artist-ico.svg';

const Collection = (props) => {
    return (
        <div>
            <div className="card round-border col-card-cont shadow ">
                <div className="collection-card-img">
                    <div className="collection-card-img-hover">
                        <Button className='card-buy-btn rounded-pill danger'><Link to={'/'}>{"Go Collection ->"}</Link></Button>
                    </div>
                    <img src={props.image} className="card-img-top" alt="card" />
                </div>
                <div className="card-body">
                    <div className="collection-title">
                        <h5 className="collection-card-title">{props.title}</h5>
                        <Button variant="outline-secondary rounded-pill btn-bg collection-btn">120 NFT</Button>
                    </div>
                    <Card.Subtitle className='priceRange'>Price Range : 0.12BTC - 0.18BTC</Card.Subtitle>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...</p>
                    <div className="artist">
                        <Artist artistPP={props.artistPP} artistName={props.artistName} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Collection;