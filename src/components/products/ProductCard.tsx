import React from 'react';
import productsEnglish from '../../assets/products.json';
import productHindi from '../../assets/productsHindi.json';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function ProductCard() {
    let products;
    const language = useSelector((state: RootState) => state.languageReducer.language);
    if (language === 'Hindi' || language === 'Marathi') {
        products = productHindi;
    }
    else {
        products = productsEnglish;
    }

    return (
        <main className="min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12">
            {
                products.slice(0, 6).map((product, index) => (
                    <Link to={`/products/${index + 1}`}>
                        <div className="rounded-sm overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:cursor-pointer hover:shadow-md border border-gray-200">
                            <div className="overflow-hidden flex flex-row justify-center">
                                <img
                                    src={`/products/${index + 1}.png`}
                                    alt="insectiside1"
                                    width={160}
                                    height={160}
                                    className="transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-4 hover:opacity-80">
                                <h1 className="text-xl font-bold mb-2">{product.name}</h1>
                                <p className="text-sm mb-2">{product.ingrediants}</p>
                                {/* <h1 className="text-xl font-bold mb-2">{getText('Packing Size', 'पॅकिंग साईझ', 'पॅकिंग साईझ')}</h1> */}
                                <p className="text-sm mb-2">{product.packingSize}</p>
                                {/* <h1 className="text-xl font-bold mb-2">{getText('Dosage', 'खुराक', 'खुराक')}</h1> */}
                                <p className="text-sm">{product.dosage}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </main>
    );
}
