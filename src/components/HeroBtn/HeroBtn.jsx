import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
function HeroBtn() {
    return (
        <>
            <Button variant=" rounded-pill black-txt dark-grey-bg white-txt hero-btm-btn hero-btm-btn1 " >Buy</Button>
            <Button variant=" rounded-pill rose-btn black-txt hero-btm-btn hero-btm-btn2 "><Link to={'/product'}>See collection</Link></Button>
        </>
    );
};

export default HeroBtn;