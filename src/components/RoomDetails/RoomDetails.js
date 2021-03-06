import React from 'react';
import './RoomDetails.css';

const RoomDetails = (props) => {
    console.log(props);
    const {details1, details2, roomName, price, rating, roomImage, totalPrice, totalRoom} = props.room;
    return (
        <div align='left' className="row">
            <div className="col-md-5">
                <img className="w-75 mt-2" src={roomImage} alt=""/>
            </div>
            <div className="col-md-7 details-area">
                <h5>{roomName}</h5>
                <p>{totalRoom}</p>
                <p>{details1}</p>
                <p>{details2}</p>
                <div className='d-flex details-footer'>
                    <p>{rating}</p>
                    <h5 style={{paddingLeft: '15px', lineHeight: '18px'}}>{price}<span>night</span> </h5>
                    <p style={{color: 'lightGray', paddingLeft : '15px'}}>{totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;