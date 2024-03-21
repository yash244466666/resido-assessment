import { Card } from 'react-bootstrap';
import './Artist.css';

function Artist(props) {
    return(
        <div className="artist">
        <div className="artist-pp">
            <img style={{width:"100%"}} src={props.artistPP} alt="artist" />
        </div>
        <div className="artist-dtls">
            <Card.Subtitle className='title'>Artist</Card.Subtitle>
            <Card.Title className='artist-name'>{props.artistName}</Card.Title>
        </div>

    </div>
    );
}
export default Artist;