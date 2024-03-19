import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

export default function Whatsapp() {
    // const [showHoverText, setShowHoverText] = useState(false);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setShowHoverText(true);
    //         setTimeout(() => {
    //             setShowHoverText(false);
    //         }, 5000);
    //     }, 2000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    return (
        <div className='fixed bottom-12 left-6 z-50'>
            <Link to="https://wa.me/9925275684" target="_blank" className="flex flex-row">
                <img src="/whatsapp.png" alt="whatsapp" width={75} height={75} />
                {/* {showHoverText && <span className="bg-white h-8 z-[2000px] rounded-lg">Chat on WhatsApp</span>} */}
            </Link>
        </div>
    );
}