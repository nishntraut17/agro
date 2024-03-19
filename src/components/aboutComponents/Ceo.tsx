import React from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const Ceo = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let info = '';
    let aboutCeo = '';

    if (language === 'English') {
        aboutCeo = 'About CEO';
        info = `Mr. Arun Murlidhar Kotame, the CEO of Enjo-Chem Agrochemical
        Industries, has an extensive professional journey. Beginning as a
        Field officer at Nashik, he ventured into entrepreneurship in
        2011.`;
    } else if (language === 'Hindi') {
        aboutCeo = 'मुख्य कार्यकारी अधिकारी के बारे में';
        info = `एन्जो-केम एग्रोकेमिकल इंडस्ट्रीज के सीईओ मिस्टर अरुण मुरलीधर कोटमे का एक व्यापक पेशेवर यात्रा है। नाशिक में फील्ड अधिकारी के रूप में शुरू होकर, उन्होंने 2011 में उद्यमिता में कदम रखा।`;
    } else if (language === 'Marathi') {
        aboutCeo = 'मुख्य कार्यकारी अधिकारी बद्दल';
        info = `एन्जो-केम अॅग्रोकेमिकल इंडस्ट्रीजचे सीईओ मिस्टर अरुण मुरलीधर कोटमे यांचा एक व्यापक पेशेवर अभियांत्रिकी आहे. नाशिकमध्ये फील्ड अधिकारी म्हणून सुरुवात करून, त्यांनी 2011 मध्ये उद्योजकतेत पाय पडले.`;
    }

    return (
        <div className="">
            <div className="flex flex-col items-center gap-10 md:flex-row md:h-[400px]">
                <div className="md:w-1/3 h-[350px]">
                    <img src="/ceo.png" alt="ceo" className="rounded-md h-full" />
                </div>
                <div className='md:w-2/3 md:p-10'>
                    <h2 className="text-3xl font-extrabold mb-4">{aboutCeo}</h2>
                    <p>{info}</p>
                </div>
            </div>
        </div>
    )
}

export default Ceo