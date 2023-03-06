import React from 'react';

function CartWidget(){
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(255,255,255, 1.0)" className="bi bi-bag-fill" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
            </svg>
            <span className="position-absolute top-25 start-80 translate-middle badge rounded-pill bg-danger">
                4
            <span className="visually-hidden">unread messages</span>
            </span>
        </div>
    )
}

export default CartWidget;