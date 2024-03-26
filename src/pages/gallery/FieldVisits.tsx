import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const FieldVisits = () => {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    let fieldVisits = "Field Visits";
    if (language === "English") {
        fieldVisits = "Field Visits";
    } else if (language === "Marathi") {
        fieldVisits = "फील्ड भेट";
    } else if (language === "Hindi") {
        fieldVisits = "फील्ड दौरा";
    } else {
        fieldVisits = "Field Visits";
    }

    return (
        <div>
            <h1>{fieldVisits}</h1>
        </div>
    )
}

export default FieldVisits