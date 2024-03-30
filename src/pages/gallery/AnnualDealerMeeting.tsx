import React from 'react'
// import { motion } from 'framer-motion';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../redux/store';

// const fadeInAnimationVariants = {
//     initial: {
//         opacity: 0,
//         y: 100,
//     },
//     animate: (index: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: 0.02 * index,
//         },
//     }),
// }

const AnnualDealerMeeting = () => {
    // const language = useSelector((state: RootState) => state.languageReducer.language);
    let annualDealerMeeting = "Annual Dealer Meeting";
    let meetings = [
        {
            id: 2,
            path: "goa",
            heading: "TOP SELLLERS MEET 2022 AT GOA",
            size: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        {
            id: 3,
            path: "kerala",
            heading: "TOP SELLERS MEET 2014 AT KERALA ",
            size: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
            id: 4,
            path: "sambhajinagar",
            heading: "Annual Dealers meeting 2023 at Chtrapati Sambhajinagar",
            size: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
            id: 5,
            path: "sambhajinagar2",
            heading: "Annual Dealers meeting 2022 AT Chtrapati Sambhajinagar",
            size: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
            id: 7,
            path: "wardha",
            heading: "ANNUAL DEALERS MEETING 2017 AT WARDHA",
            size: [1, 2, 3, 4]
        },
        {
            id: 8,
            path: "wardha2",
            heading: "ANNUAL DEALER MEET 2014 AT WARDHA",
            size: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
    ]

    // if (language === "English") {
    //     annualDealerMeeting = "Annual Dealer Meeting";
    //     meetings = ["Meeting 1", "Meeting 2", "Meeting 3", "Meeting 4"];
    // } else if (language === "Marathi") {
    //     annualDealerMeeting = "वार्षिक डीलर सभा";
    // } else if (language === "Hindi") {
    //     annualDealerMeeting = "वार्षिक डीलर सम्मेलन";
    // } else {
    //     annualDealerMeeting = "Annual Dealer Meeting";
    // }


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
                                    <div className='text-2xl font-bold'>{meeting.heading}</div>
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