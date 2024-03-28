import React from 'react'
import { useParams } from 'react-router-dom'
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
            product = productHindi[id as any];
        }
    }
    else {
        product = productsEnglish[id as any];
    }

    return (
        <div className='flex flex-col md:flex-row p-4 md:p-20'>
            <div>
                <img src={`/products/${id}.png`} alt="product" />
            </div>
            <div>
                <h1 className='text-2xl md:text-4xl font-extrabold'>{product.name}</h1>
                <h1 className=''>{product?.feature}</h1>
                <h1 className=''>{product?.dosage}</h1>
                <h1 className=''>{product?.ingrediants}</h1>
                <h1 className=''>{product?.packingSize}</h1>
            </div>
        </div>
    )
}

export default SingleProduct