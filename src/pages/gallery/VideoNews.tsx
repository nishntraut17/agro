import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import PageHeader from '../../components/extra/PageHeader';

const VideoNews = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let videoNews = "Video News";
    if (language === "English") {
        videoNews = "Video News";
    } else if (language === "Marathi") {
        videoNews = "व्हिडिओ बातम्या";
    } else if (language === "Hindi") {
        videoNews = "वीडियो समाचार";
    } else {
        videoNews = "Video News";
    }

    const srcs = [
        "https://www.youtube.com/embed/b8PH1b9DPL8?si=EEpHl50UX-Xcsm6B",
        "https://www.youtube.com/embed/Uu0fNILkVTE?si=WNRQ_c4n1u-vvxDV",
        "https://www.youtube.com/embed/ooFsa_Csqzc?si=PlU3JUYa0sv4zkNB",
        "https://www.youtube.com/embed/RPZPvTWN8dM?si=ZmBpgAwEcMpsvelp",
        "https://www.youtube.com/embed/UE7cHIvSKow?si=T3n0IABeovRaIBEz",
        "https://www.youtube.com/embed/X6rcOpAkAv0?si=JtGHKPkW0Q7N0NKj",
        "https://www.youtube.com/embed/n2NnQD37lO4?si=jWVldrL7YgZOZWFa",
        "https://www.youtube.com/embed/5Lwpy-yeCYY?si=L4zaTWkYnNOzRGw8",
        "https://www.youtube.com/embed/RJq_QgF2HdM?si=7wqzIeckJIK8ql62",
        "https://www.youtube.com/embed/tEAvcN6b5wQ?si=F5M4lm5BjlxlZba2",
        "https://www.youtube.com/embed/Ihl_gZ_g73k?si=Az3mo2rA36oRbqPu",
        "https://www.youtube.com/embed/gUXQds_GqSs?si=4HtkoRVFMYBtn7oi",
        "https://www.youtube.com/embed/zpfo_mMbi1Y?si=_nkEK37hUTRKennT",
        "https://www.youtube.com/embed/lbR8c5qpXJA?si=am2Va4LjoBFNFCec",
        "https://www.youtube.com/embed/twtK8MS6Kok?si=CmomM7ZI9KiwQ3u-",
        "https://www.youtube.com/embed/3-srB14Knik?si=A5Qf6iPXXxqNY5Zb",
        "https://www.youtube.com/embed/S3NvhLnDY6I?si=tK44NiHHB9tVkmG_",
        "https://www.youtube.com/embed/UBlHH7kHjNI?si=v9t1xdZENgXhvV1o",
        "https://www.youtube.com/embed/zVcJ2-fbSO0?si=atPiSWP2f07H6fJw",
    ]

    return (
        <div className='varela-round-regular'>
            <PageHeader title={videoNews} />
            <h1 className='text-2xl md:text-4xl font-extrabold p-4 py-8 md:px-24 '>{videoNews}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-4 md:px-24'>
                {
                    srcs.map((src, index) => {
                        return (
                            <div className=' h-44 w-[22rem] md:h-48 md:w-96 col-span-1 rounded-md overflow-hidden'>
                                <iframe className="w-full h-full" key={index} src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default VideoNews