import React, { useState } from 'react'

const BookingButtonMobile = () => {

    const [showed, setShowed] = useState(false);
    
    const handleShowBooking = () =>{
        const booking = document.querySelector('.booking-form');
        booking?.classList.toggle('show-booking');
        setShowed(!showed);
    }

    let message = showed ? 'HIDE' : 'SHOW';

  return (
        <div className='content-actions booking-button-mobile'>
          <button type='button' 
                className='btn btn-book-now'
                onClick={() => handleShowBooking()}>BOOK NOW</button>
        </div>
  )
}

export default BookingButtonMobile