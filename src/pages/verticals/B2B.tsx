import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import arrayEnglish from './b2b-products';
import arrayHindi from './b2b-products-hindi';
import arrayMarathi from './b2b-products-marathi';

const B2B = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let b2bText = "B2B";
    let array = arrayEnglish;
    if (language === "English") {
        b2bText = "B2B";
        array = arrayEnglish;
    } else if (language === "Marathi") {
        b2bText = "व्यावसायिक दोनदारांसाठी";
        array = arrayMarathi;
    } else if (language === "Hindi") {
        b2bText = "व्यापारी दोस्तों के लिए";
        array = arrayHindi;
    } else {
        b2bText = "B2B";
        array = arrayEnglish;
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='bg-lime-50'>
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <h1 className='font-extrabold text-2xl md:text-5xl px-4'>{b2bText}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {array.map((item) => {
                    return (
                        <div className='flex flex-col items-center p-4 m-4 bg-white'>
                            <div className='h-48 w-48'>
                                <img src={`/b2b/${item.id}.jpg`} alt={item.title} className='h-full w-full' />
                            </div>
                            <h1 key={item.id}>{item.title}</h1>
                            <button className='bg-green-500 text-white p-2 rounded-md hover:scale-105 transition duration-150 ease-in-out'
                                onClick={scrollToTop}
                            ><Link to={`/b2b/${item.id}`}>
                                    {language === "English" && "Read More"}
                                    {language === "Hindi" && "और पढ़ें"}
                                    {language === "Marathi" && "अधिक वाचा"}
                                </Link></button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default B2B