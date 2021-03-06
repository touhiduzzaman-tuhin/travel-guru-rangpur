import React, { useContext } from 'react';
import './Home.css';
import fakeData from '../../fakeData/fakeData';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Home = () => {
    // console.log(fakeData);
    // const [selectedPlace, setSelectedPlace] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleAddPlace = (place) => {
        console.log('Some One Click', place);
        const placeInfo = {...loggedInUser};
        const {placeName, Description} = place;
        placeInfo.placeName = placeName;
        placeInfo.Description = Description;
        setLoggedInUser(placeInfo);
        // const placeInfo = {...selectedPlace};
        // const {placeName, Description} = place;
        // placeInfo.placeName = placeName;
        // placeInfo.Description = Description;
        // setSelectedPlace(placeInfo);
    }
    // console.log(loggedInUser);
    // console.log(selectedPlace.length);
    // const { placeName, Description} = selectedPlace.place;
    return (
        <div className="home-page">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 col-lg-4 home-page-details">
                        <h1>{loggedInUser.placeName}</h1>
                        <p>{loggedInUser.Description?.slice(0, 157)}</p>
                        {
                            loggedInUser.placeName && 
                            <Link to='/bookings'>
                                <Button variant='warning'>
                                    Booking &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                </Button>
                            </Link>
                        }
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="row">
                            {
                                fakeData.map(place => <PlaceDetails key={place.placeId} handleAddPlace={handleAddPlace} place={place}></PlaceDetails>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;