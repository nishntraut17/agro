import React from 'react';
import productsEnglish from '../assets/products.json';
import productHindi from '../assets/productsHindi.json';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.01 * index,
        },
    }),
}

const ProductCard2 = ({ filter }: {
    filter: string
}) => {
    let products;
    const language = useSelector((state: RootState) => state.languageReducer.language);
    if (language === 'Hindi' || language === 'Marathi') {
        products = productHindi;
    }
    else {
        products = productsEnglish;
    }

    const getText = (englishText: string, hindiText: string, marathiText: string) => {
        switch (language) {
            case 'English':
                return englishText;
            case 'Hindi':
                return hindiText;
            case 'Marathi':
                return marathiText;
            default:
                return englishText;
        }
    };

    return (
        <main className="min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:pt-12 lg:px-20 bg-green-50">
            {
                products.filter(
                    (product) => {
                        if (filter === 'none') {
                            return product;
                        }
                        return product.type === filter;
                    }
                ).map((product: any, index: number) => (
                    <motion.div
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        key={index} className='rounded-sm overflow-hidden bg-white shadow-md m-2 flex justify-center items-center hover:cursor-pointer hover:shadow-xl'>
                        <div className="overflow-hidden h-52 w-52">
                            <img src={`/products/${product.id}.png`} alt="insectiside1" width={200} height={200} className=' h-full w-full transition-transform duration-300 hover:scale-105' />
                        </div>
                        <div className="p-4 hover:opacity-80 text-green-950">
                            <h1 className="text-xl font-extrabold mb-2">{product.name}</h1>
                            <p className="text-sm mb-2">{product.ingrediants}</p>
                            <h1 className="text-l font-bold mb-2">{getText('Packing Size', 'पॅकिंग साईझ', 'पॅकिंग साईझ')}</h1>
                            <p className="text-sm mb-2">{product.packingSize}</p>
                            <h1 className="text-l font-bold mb-2">{getText('Dosage', 'खुराक', 'खुराक')}</h1>
                            <p className="text-sm">{product.dosage}</p>
                        </div>
                    </motion.div>
                ))
            }
        </main>
    );
};

export default ProductCard2;