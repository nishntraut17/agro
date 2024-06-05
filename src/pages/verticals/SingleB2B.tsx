import React from 'react'
import { useParams } from 'react-router-dom'
import arrayEnglish from './b2b-products';
import arrayHindi from './b2b-products-hindi';
import arrayMarathi from './b2b-products-marathi';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import PageHeader from '../../components/extra/PageHeader';

import { Link } from 'react-router-dom';
const SingleB2B = () => {
    const { id } = useParams<{ id: any }>();
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let array = arrayEnglish;
    let enquiry = "Enquiry Now";
    let call = "Call Us";
    let content = "Content: ";
    let dosage = "Dosage: ";
    let packagingSize = "Packaging Size: ";

    if (language === "English") {
        array = arrayEnglish;
        enquiry = "Enquiry Now";
        call = 'Call Us';
        content = "Content: ";
        dosage = "Dosage: ";
        packagingSize = "Packaging Size: ";
    } else if (language === "Marathi") {
        array = arrayMarathi;
        call = "ताकद घ्या";
        enquiry = "ताकद घ्या";
        content = "आशय: ";
        dosage = "मात्रा: ";
        packagingSize = "पॅकिंग साईझ: ";
    } else if (language === "Hindi") {
        array = arrayHindi;
        call = "हमें कॉल करें";
        enquiry = "पूछताछ करें";
        content = "सामग्री: ";
        dosage = "मात्रा: ";
        packagingSize = "पैकेज साइज: ";
    } else {
        array = arrayEnglish;
        call = "Call Us";
        enquiry = "Enquiry Now";
        content = "Content: ";
        dosage = "Dosage: ";
        packagingSize = "Packaging Size: ";
    }

    return (
        <>
            <PageHeader title={array[id].title} />
            <div className='flex flex-col md:flex-row gap-4 p-4 md:p-20 varela-round-regular'>
                <div className='h-64 w-full md:h-[360px] md:w-1/3'>
                    <img src={`/b2b/${id}.jpg`} alt={array[id].title} className='w-full h-full' />
                </div>
                <div className='md:w-2/3 flex flex-col gap-6 p-4 bg-slate-100 z-30 shadow-md rounded'>
                    <div className='text-4xl font-extrabold'>{array[id].title}</div>
                    <div className='text-lg'><span>{content} </span>{array[id].content}</div>
                    <div className='text-lg'>{array[id].description}</div>
                    <div className='text-lg'><span>{dosage} </span> {array[id].dosage}</div>
                    <div className='text-lg'><span>{packagingSize} </span>{array[id].package}</div>
                    <div className='flex flex-row gap-10 text-white'>
                        <a href='tel:+919699375115'>
                            <button className='bg-green-600 hover:bg-green-700 border rounded-md py-2 px-4 hover:scale-105 duration-300 transition ease-in-out'>{call}</button>
                        </a>
                        <Link to='/enquiry' className='bg-green-600 hover:bg-green-700 border rounded-md py-2 px-4 hover:scale-105 duration-300 transition ease-in-out'>
                            <button>
                                {enquiry}
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SingleB2B