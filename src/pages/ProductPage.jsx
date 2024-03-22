import './ProductPage.css';
import HeroSec from '../components/HeroSec/HeroSec';
import CollectionNFT from '../components/CollectionNFT/CollectionNFT';
import Footer from '../components/Footer/Footer';
import CollectionCardImg1 from '../res/home-card1.png'; 
import CollectionCardImg2 from '../res/NFT-card-2.png'; 
import CollectionCardImg3 from '../res/NFT-card-3.png';
import CollectionCardImg4 from '../res/NFT-card-4.png';
import CollectionCardImg5 from '../res/NFT-card-5.png';
import CollectionCardImg6 from '../res/NFT-card-6.png';
import artist1 from '../res/hero-artist-ico.svg';
import artist2 from '../res/artistPP2.svg';
import artist3 from '../res/artistPP3.svg';

function ProductPage() {
    return (
        <>
            <HeroSec colType="Collection" colName="Night Sky" colDes={'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo'} showBtn={false}/>

            <div className="collection ">
                <h2 className=''>NFTs</h2>
                <div className="collection-cardsNFT parent">
                    <CollectionNFT className='mb-5 div1' image={CollectionCardImg1} title='Night is coming' artistPP={artist1} artistName='Léa Jacquot' />
                    <CollectionNFT className='div2'  image={CollectionCardImg2} title='With the stars' artistPP={artist3} artistName='Julien' />
                    <CollectionNFT className='div3'  image={CollectionCardImg3} title='Summer' artistPP={artist2} artistName='Maria' />
                    <CollectionNFT className='div4'  image={CollectionCardImg4} title='Quiet' artistPP={artist2} artistName='Maria' />
                    <CollectionNFT className='div5'  image={CollectionCardImg5} title='Travel' artistPP={artist2} artistName='Maria' />
                    <CollectionNFT className='div6'  image={CollectionCardImg6} title='The rain' artistPP={artist2} artistName='Maria' />
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProductPage;