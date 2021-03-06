import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import roomDetails from '../../fakeData/roomFakeData';
import GoogleMap from '../GoogleMap/GoogleMap';
import RoomDetails from '../RoomDetails/RoomDetails';

const TourPlace = () => {
    // console.log(roomDetails);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className='container'>
            <div className="row">
                
                <div align='center' className="col-8 col-md-7">
                    <h2 className="my-3">Stay in {loggedInUser.placeName}</h2>
                    {
                        roomDetails.map(room => <RoomDetails key={room.roomId} room={room}></RoomDetails>)
                    }
                    <Link to='/finish'>
                        <Button className='mt-2'>
                            Finish
                        </Button>
                    </Link>
                </div>
                <div className="col-4 col-md-5">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default TourPlace;