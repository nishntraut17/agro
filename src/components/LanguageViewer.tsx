import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Import RootState type

export default function LanguageViewer() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    console.log(language);
    return (
        <div className="flex gap border border-1 border-black p-20">
            The current language is {language}
        </div>
    );
};
