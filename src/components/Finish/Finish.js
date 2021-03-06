import React from 'react';
import gif from '../../images/Image/thank-you.gif';
import './Finish.css';

const Finish = () => {
    return (
        <div align='center'>
            <img className='my-3 image-style' src={gif} alt=""/>
        </div>
    );
};

export default Finish;