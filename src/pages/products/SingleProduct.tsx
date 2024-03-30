import React from 'react'
import { Link, useParams } from 'react-router-dom'
import productsEnglish from '../../assets/products.json';
import productHindi from '../../assets/productsHindi.json';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const SingleProduct = () => {
    let { id } = useParams<{ id: any }>();
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let product: any = {};
    if (language === 'Hindi' || language === 'Marathi') {
        if (productHindi.hasOwnProperty(id as any)) {
            product = productHindi[id - 1 as any];
        }
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
                            product?.dosage && <div>
                                <h1 className='text-xl md:text-2xl font-bold'>Dosage</h1>
                                <h1 className=''>{product?.dosage}</h1>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            product?.ingredients && <div>
                                <h1 className='text-xl md:text-2xl font-bold'>Composition</h1>
                                <h1 className=''>{product?.ingrediants}</h1>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            product?.packingSize && <div>
                                <h1 className='text-xl md:text-2xl font-bold'>Packing Size</h1>
                                <h1 className=''>{product?.packingSize}</h1>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            product?.crops &&
                            <div>
                                <h1 className='text-xl md:text-2xl font-bold'>Crops</h1>
                                <h1 className=''>{product?.crops}</h1>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            (product?.insect || product?.pest || product?.fungi) &&
                            <div>
                                <h1 className='text-xl md:text-2xl font-bold'>Insects</h1>
                                <h1 className=''>{product?.insect}</h1>
                                <h1 className=''>{product?.pest}</h1>
                                <h1 className=''>{product?.fungi}</h1>
                            </div>
                        }
                    </div>
                    <div className='flex flex-row gap-10 text-white'>
                        <button className='bg-green-600 hover:bg-green-700 border rounded-md py-2 px-4 hover:scale-105 duration-300 transition ease-in-out'>Call us</button>
                        <Link to='/enquiry' className='bg-green-600 hover:bg-green-700 border rounded-md py-2 px-4 hover:scale-105 duration-300 transition ease-in-out'>
                            <button>
                                Enquiry Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct