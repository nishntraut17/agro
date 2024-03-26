import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/languageSlice";

const LanguageUpdater = () => {
    const dispatch = useDispatch();
    const [selectedLanguage, setSelectedLanguage] = useState("");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setSelectedLanguage(storedLanguage);
            dispatch(setLanguage(storedLanguage));
        }
    }, [dispatch]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = e.target.value;
        localStorage.setItem("language", newLanguage);
        setSelectedLanguage(newLanguage);
        dispatch(setLanguage(newLanguage));
        window.location.reload();
    };

    return (
        <div>
            <select onChange={handleChange} value={selectedLanguage}>
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Marathi">Marathi</option>
            </select>
        </div>
    );
};

export default LanguageUpdater;
