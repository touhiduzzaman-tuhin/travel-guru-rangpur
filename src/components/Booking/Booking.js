import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Bookings.css';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Booking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDateChange = (date) => {
        const newBookings = { ...selectedDate }
        newBookings.checkIn = date;
        setSelectedDate(newBookings);
    }

    const handleCheckOutDateChange = (date) => {
        const newBookings = { ...selectedDate }
        newBookings.checkOut = date;
        setSelectedDate(newBookings);
    };

    const handleBlur = (event) => {
        const bookingsInfo = { ...selectedDate };
        bookingsInfo.origin = event.target.value;
        setSelectedDate(bookingsInfo);
    }

    console.log(selectedDate);

    return (
        <div className='booking-page-area'>
            {/* <Header></Header> */}
            <div className='container'>
                <div className="row">
                    <div align="center" className="col-6 col-md-6 booking-area">
                        <label className='mt-2' htmlFor="">Your Origin Place</label>
                        <input type="text" className="form-control" name="originName" id="" placeholder="Enter Your Pick Up Location" onBlur={handleBlur} required />

                        <label className='mt-2' htmlFor="">Your Destination Place</label>
                        <input type="text" className="form-control" name="originName" id="" defaultValue={loggedInUser.placeName} required />

                        <div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="From"
                                        value={selectedDate.checkIn}
                                        onChange={handleCheckInDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                    <KeyboardDatePicker
                                        disableToolbar
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="To"
                                        format="MM/dd/yyyy"
                                        value={selectedDate.checkOut}
                                        onChange={handleCheckOutDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>

                        <Link to="/bookingDetails">
                            <Button variant='warning' className='my-3'>
                                Start Booking
                        </Button>
                        </Link>
                    </div>

                    <div className="col-6 col-md-6 booking-area-details">
                        <h1>{loggedInUser.placeName}</h1>
                        <p>{loggedInUser.Description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;