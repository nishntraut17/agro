import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

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

    return (
        <div>
            <h1>{videoNews}</h1>
        </div>
    )
}

export default VideoNews