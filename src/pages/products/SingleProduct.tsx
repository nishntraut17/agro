import React from 'react'
import { Link, useParams } from 'react-router-dom'
import productsEnglish from '../../assets/products.json';
import productHindi from '../../assets/productsHindi.json';
import productMarathi from '../../assets/productsMarathi.json';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { FaBug } from "react-icons/fa";
import { PiPlantBold } from "react-icons/pi";
import { FiPackage } from "react-icons/fi";
import { GiFertilizerBag } from "react-icons/gi";


const SingleProduct = () => {

    let { id } = useParams<{ id: any }>();
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let product: any = {};
    let callUs = "Call us";
    let enquiryNow = "Enquiry Now";
    if (language === 'Hindi') {
        if (productHindi.hasOwnProperty(id as any)) {
            product = productHindi[id - 1 as any];
        }
        callUs = "हमें कॉल करें";
        enquiryNow = "अब पूछताछ करें";
    }
    else if (language === 'Marathi') {
        if (productMarathi.hasOwnProperty(id as any)) {
            product = productMarathi[id - 1 as any];
        }
        callUs = "आमच्याशी संपर्क साधा";
        enquiryNow = "आता पूछताछ करा";
    }
    else {
        product = productsEnglish[id - 1 as any];
    }

    return (
        <div>
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className='flex flex-col md:flex-row p-4 md:p-8'>
                <div className='h-72 w-full md:h-[32rem] md:w-1/3 flex flex-row justify-center'>
                    <img src={`/products/${id}.png`} alt="product" className='h-full' />
                </div>
                <div className='md:w-2/3 flex flex-col gap-4 p-4 md:px-20 md:py-4 bg-slate-100'>
                    <h1 className='text-2xl md:text-4xl font-extrabold'>{product.name}</h1>
                    <h1 className=''>{product?.feature}</h1>
                    <div>
                        {
                            product?.dosage && <div className='flex flex-row gap-2'>
                                <h1 className='text-lg md:text-xl'><GiFertilizerBag /></h1>
                                <h1 className='text-lg md:text-xl'>{product?.dosage}</h1>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            product?.ingredients && <div className='flex flex-row gap-2'>
                                <h1 className='text-lg md:text-xl '>Composition:</h1>
                                <h1 className='text-lg md:text-xl '>{product?.ingrediants}</h1>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            product?.packingSize && <div className='flex flex-row gap-2'>
                                <h1 className='text-lg md:text-xl '><FiPackage /></h1>
                                <h1 className='text-lg md:text-xl '>{product?.packingSize}</h1>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            product?.crops &&
                            <div className='flex flex-row gap-2'>
                                <h1 className='text-lg md:text-xl'><PiPlantBold /></h1>
                                <h1 className='text-lg md:text-xl'>{product?.crops}</h1>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            (product?.pests) &&
                            <div className='flex flex-row gap-4'>
                                <h1 className='text-lg md:text-xl'><FaBug className='' /></h1>
                                <h1 className='text-lg md:text-xl'>{product?.pests}</h1>
                            </div>
                        }
                    </div>
                    <div className='flex flex-row gap-10 text-white'>
                        <a href="tel:+919699375115">
                            <button className='bg-green-600 hover:bg-green-700 border rounded-md py-2 px-4 hover:scale-105 duration-300 transition ease-in-out'>{callUs}</button>
                        </a>
                        <Link to='/enquiry' className='bg-green-600 hover:bg-green-700 border rounded-md py-2 px-4 hover:scale-105 duration-300 transition ease-in-out'>
                            <button>
                                {enquiryNow}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct