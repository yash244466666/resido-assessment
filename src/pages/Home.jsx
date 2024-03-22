import React from 'react';
import HeroSec from '../components/HeroSec/HeroSec';
import Collection from '../components/Collection/Collection';
import Footer from '../components/Footer/Footer';
import CollectionCardImg1 from '../res/home-card1.png'; 
import CollectionCardImg2 from '../res/home-card2.png'; 
import CollectionCardImg3 from '../res/home-card3.png'; 
import artist1 from '../res/hero-artist-ico.svg';
import artist2 from '../res/artistPP2.svg';
import artist3 from '../res/artistPP3.svg';
import './Home.css';


const Home = () => {
    return (
        <div>
            <HeroSec colType="Night sky collection" colName="With the stars" showBtn={true}/>
            <div className="collection ">
                <h2 className=''>Collections</h2>
                <div className="collection-cards">
                    <Collection className='mb-5' image={CollectionCardImg1} title='Night Sky' artistPP={artist1} artistName='Léa Jacquot' />
                    <Collection className=''  image={CollectionCardImg2} title='Future' artistPP={artist3} artistName='Julien' />
                    <Collection className=''  image={CollectionCardImg3} title='Mother nature' artistPP={artist2} artistName='Maria' />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;