import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

export default function Whatsapp() {

    return (
        <div className='fixed scale-75 md:scale-100 bottom-8 md:bottom-14 left-4 md:left-5 z-[1200]'>
            <Link to="https://wa.me/+918275017003" target="_blank" className="flex flex-row">
                <img src="/whatsapp.png" alt="whatsapp" width={75} height={75} />
            </Link>
        </div>
    );
}