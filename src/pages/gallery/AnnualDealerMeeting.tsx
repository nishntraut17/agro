import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const AnnualDealerMeeting = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let annualDealerMeeting = "Annual Dealer Meeting";
    let meetings = [
        {
            id: 2,
            path: "goa",
            headingEnglish: "TOP SELLLERS MEET 2022 AT GOA",
            headingMarathi: "गोवा येथे टॉप सेलर्स मीट २०२२",
            headingHindi: "गोवा में शीर्ष विक्रेताओं की मीट 2022",
            size: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        {
            id: 3,
            path: "kerala",
            headingEnglish: "TOP SELLERS MEET 2014 AT KERALA ",
            headingMarathi: "केरळ येथे टॉप सेलर्स मीट २०१४",
            headingHindi: "केरला में शीर्ष विक्रेताओं की मीट 2014",
            size: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
            id: 4,
            path: "sambhajinagar",
            headingEnglish: "Annual Dealers meeting 2023 at Chtrapati Sambhajinagar",
            headingMarathi: "छत्रपती संभाजीनगर येथे वार्षिक डीलर्स सभा २०२३",
            headingHindi: "छत्रपति संभाजीनगर में वार्षिक डीलर सम्मेलन 2023",
            size: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
            id: 5,
            path: "sambhajinagar2",
            headingEnglish: "Annual Dealers meeting 2022 AT Chtrapati Sambhajinagar",
            headingMarathi: "छत्रपती संभाजीनगर येथे वार्षिक डीलर्स सभा २०२२",
            headingHindi: "छत्रपति संभाजीनगर में वार्षिक डीलर सम्मेलन 2022",
            size: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
            id: 7,
            path: "wardha",
            headingEnglish: "ANNUAL DEALERS MEETING 2017 AT WARDHA",
            headingMarathi: "वार्षिक डीलर सभा २०१७ वर्धा",
            headingHindi: "वार्षिक डीलर सम्मेलन 2017 वर्धा",
            size: [1, 2, 3, 4]
        },
        {
            id: 8,
            path: "wardha2",
            headingEnglish: "ANNUAL DEALER MEET 2014 AT WARDHA",
            headingMarathi: "वार्षिक डीलर सभा २०१४ वर्धा",
            headingHindi: "वार्षिक डीलर सम्मेलन 2014 वर्धा",
            size: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
    ]

    if (language === "English") {
        annualDealerMeeting = "Annual Dealer Meeting";
    } else if (language === "Marathi") {
        annualDealerMeeting = "वार्षिक डीलर सभा";
    } else if (language === "Hindi") {
        annualDealerMeeting = "वार्षिक डीलर सम्मेलन";
    } else {
        annualDealerMeeting = "Annual Dealer Meeting";
    }


    return (
        <div className=''>
            <div className="overflow-hidden">
                <img src='/banner2.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className='p-2 md:px-20 md:py-8'>
                <h1 className='text-4xl p-2 md:px-10 font-extrabold'>{annualDealerMeeting}</h1>
                <div>
                    {
                        meetings.map((meeting: any, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex flex-col gap-8 bg-slate-100 z-30 shadow-md rounded m-2 md:m-8 p-4 md:p-8'>
                                    <div className='text-2xl font-bold'>{
                                        language === "English" ? meeting.headingEnglish :
                                            language === "Marathi" ? meeting.headingMarathi :
                                                meeting.headingHindi
                                    }</div>
                                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10'>
                                        {
                                            meeting.size.map((item: number, index: number) => {
                                                return (
                                                    <div
                                                        key={index} className='col-span-1 h-[200px] w-[330px] md:w-[280px] rounded overflow-hidden border'>
                                                        <img src={`/meetings/${meeting.path}/${item}.jpg`} alt='meeting' className='w-full h-full hover:scale-105 transition duration-150 ease-in-out' />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AnnualDealerMeeting