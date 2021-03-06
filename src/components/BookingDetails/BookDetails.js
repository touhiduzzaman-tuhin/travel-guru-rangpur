import React from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './BookDetails.css';

const BookDetails = () => {
    return (
        <div align="center" className='container mt-5 payment-area'>
            <h3>Please Pay Your Book</h3>
            <ProcessPayment></ProcessPayment>
        </div>
    );
};

export default BookDetails;