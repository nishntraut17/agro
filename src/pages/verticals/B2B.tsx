import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const B2B = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let b2bText = "B2B";
    if (language === "English") {
        b2bText = "B2B";
    } else if (language === "Marathi") {
        b2bText = "व्यावसायिक दोनदारांसाठी";
    } else if (language === "Hindi") {
        b2bText = "व्यापारी दोस्तों के लिए";
    } else {
        b2bText = "B2B";
    }

    return (
        <div>
            <h1>{b2bText}</h1>
        </div>
    )
}

export default B2B