import React from 'react';
import { Button } from 'react-bootstrap';

const PlaceDetails = (props) => {
    // console.log(props);
    const { placeName, images } = props.place;
    const handleAddPlace = props.handleAddPlace
    return (
        <div style={{marginTop: '100px'}} className="col-6 col-sm-6 col-md-4 col-lg-4">
            <Button variant='warning' onClick={() => handleAddPlace(props.place)}>
                <img style={{ height: '250px'}} className='w-100' src={images} alt=""/>
                <h3>{placeName}</h3>
            </Button>
        </div>
    );
};

export default PlaceDetails;