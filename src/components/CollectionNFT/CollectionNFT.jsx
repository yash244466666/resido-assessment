import React from 'react';
import { Link } from 'react-router-dom';
import {Button,} from 'react-bootstrap';
// import Artist from '../Artist/Artist';
import './CollectionNFT.css';
// import artist1 from '../../res/hero-artist-ico.svg';

const CollectionNFT = (props) => {
    return (
        <div>
            <div className="card col-card-contNFT shadow ">
                <div className="collection-card-imgNFT">
                    <div className="collection-card-imgNFT-hover">
                    <Link to={'/product'}className='card-buy-btnNFT rounded-pill danger'>{'Buy -> '}</Link>
                    </div>
                    <img src={props.image} className="card-img-top" alt="card" />
                </div>
                <div className="card-body">
                    <div className="collection-title">
                        <h5 className="collection-card-titleNFT">{props.title}</h5>
                        <Button variant="outline-secondary rounded-pill btn-bg collection-btnNFT">120 NFT</Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CollectionNFT;