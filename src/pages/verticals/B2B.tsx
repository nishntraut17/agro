import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import arrayEnglish from './b2b-products';
import arrayHindi from './b2b-products-hindi';
import arrayMarathi from './b2b-products-marathi';
import PageHeader from '../../components/extra/PageHeader';
const B2B = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let b2bText = "Business to Business";
    let array = arrayEnglish;
    if (language === "English") {
        b2bText = "Business to Business";
        array = arrayEnglish;
    } else if (language === "Marathi") {
        b2bText = "व्यावसायिक दोनदारांसाठी";
        array = arrayMarathi;
    } else if (language === "Hindi") {
        b2bText = "व्यापारी दोस्तों के लिए";
        array = arrayHindi;
    } else {
        b2bText = "Business to Business";
        array = arrayEnglish;
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='bg-green-50 varela-round-regular'>
            <PageHeader title={b2bText} />
            <div className="text-4xl font-extrabold py-4 px-8 lg:px-24">{b2bText}</div>
            <div className='"min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:px-20 bg-green-50"'>
                {array.map((item) => {
                    return (
                        <div className='flex flex-col z-30 shadow-sm hover:shadow-lg items-center p-4 m-4 bg-white'>
                            <div className='h-48 w-48 overflow-hidden'>
                                <img src={`/b2b/${item.id}.jpg`} alt={item.title} className='h-full w-full hover:scale-105 duration-200 ease-in-out' />
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