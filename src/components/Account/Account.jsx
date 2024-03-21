import {React, } from 'react';
import { Card, Button  } from 'react-bootstrap';
import './Account.css';
// import { Link } from 'react-router-dom';
import accountEllipse from '../../res/accountEllipse.svg';
import accountCopyIco from '../../res/accountCopyIco.svg';
import signIn from '../../res/signIn.svg';

const Account = (props) => {
    function onCancel() {
        // console.log('showing account');
        props.onCancel();
    }
    
    return (
        <div className='cardBody'>
            <div className='card-close-btn-container'>
                <button onClick={onCancel} className='card-close-btn'>{'>>'}</button>
            </div>
            <Card className='account-card' >
                <Card.Body >
                    {/* <Card.Title>img STV6Q...4Z7WD</Card.Title> */}
                    <div className='account-title'>
                        <Card.Subtitle className="mb-2 text-muted card-title black"> <img src={accountEllipse} className='card-title-account-img' alt='pp' /> STV6Q...4Z7WD <img src={accountCopyIco} className='card-title-account-copy' alt='copy' /> </Card.Subtitle>
                        <div className='signIn-img-div'>
                            <img src={signIn} alt="si" className='signIn-img' />
                        </div>
                    </div>
                    <div className='account-amount mt-5 mx-2 '>
                        <Card.Subtitle className="mb-2 text-muted card-title"> In your wallet </Card.Subtitle>
                        <Card.Title className='card-amount bold'>  0.129 BTC </Card.Title>
                    </div>

                    <div className='account-nfts'>
                        <Card.Subtitle className="mt-5 mx-2 text-muted card-title"> Your don't own any NFTs yet </Card.Subtitle>
                        <Button variant="secondary" className='account-nfts-buy-btn mt-5 mx-4 dark-grey'>
                            Start Shopping
                        </Button>
                    </div>

                </Card.Body>
            </Card>
        </div>

    );
};

export default Account;