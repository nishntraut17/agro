import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Career() {
    const language = useSelector((state: RootState) => state.languageReducer.language);
    const translatedText = getTranslatedText(language);

    return (
        <div className="mb-20">
            <div className="md:h-[300px] overflow-hidden">
                <img src='/aboutbackground.jpg' alt='about-banner' className="w-full" />
            </div>
            <div className='flex flex-col md:flex-row'>
                <form action="" method="" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div>
                        <div className='text-3xl font-extrabold py-4'>{translatedText.enquiry}</div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                {translatedText.firstName}
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                {translatedText.lastName}
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
                                {translatedText.address}
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    {translatedText.email}
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                                    {translatedText.phone}
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="date-of-birth" className="block text-sm font-semibold leading-6 text-gray-900">
                                    {translatedText.dateOfBirth}
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="date"
                                        name="date-of-birth"
                                        id="date-of-birth"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="linkedin-profile-link" className="block text-sm font-semibold leading-6 text-gray-900">
                                    {translatedText.linkedinProfileLink}
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="url"
                                        name="linkedin-profile-link"
                                        id="linkedin-profile-link"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="post-applying-for" className="block text-sm font-semibold leading-6 text-gray-900">
                                    {translatedText.postApplyingFor}
                                </label>
                                <div className="relative mt-2.5">
                                    <input
                                        type="text"
                                        name="post-applying-for"
                                        id="post-applying-for"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="available-start-date" className="block text-sm font-semibold leading-6 text-gray-900">
                                    {translatedText.availableStartDate}
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="date"
                                        name="available-start-date"
                                        id="available-start-date"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="upload-resume" className="block text-sm font-semibold leading-6 text-gray-900">
                                    {translatedText.uploadResume}
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="file"
                                        name="upload-resume"
                                        id="upload-resume"
                                        className="block w-full px-3.5 py-2 pl-20 "
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    {translatedText.coverLetter}
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="my-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-green-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950"
                            >
                                Sent message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


function getTranslatedText(language: string) {
    switch (language) {
        case "English":
            return {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                phone: "Phone Number",
                address: "Address",
                dateOfBirth: "Date of Birth",
                linkedinProfileLink: "Linkedin Profile Link",
                postApplyingFor: "Post Applying For",
                availableStartDate: "Available Start Date",
                uploadResume: "Upload Resume",
                coverLetter: "Cover Letter",
                phoneNumber: "Phone Number",
                enquiry: "Enquiry",
            };
        case "Marathi":
            return {
                firstName: "पहिले नाव",
                lastName: "आडनाव",
                email: "ईमेल",
                phone: "फोन नंबर",
                address: "पत्ता",
                dateOfBirth: "जन्म तारीख",
                linkedinProfileLink: "लिंक्डइन प्रोफाइल लिंक",
                postApplyingFor: "पद लागू असलेला",
                availableStartDate: "उपलब्ध सुरुवात तारीख",
                uploadResume: "रिझ्यूम अपलोड करा",
                coverLetter: "कव्हर पत्र",
                phoneNumber: "फोन नंबर",
                enquiry: "विचारांविषयी",
            };
        case "Hindi":
            return {
                firstName: "पहला नाम",
                lastName: "उपनाम",
                email: "ईमेल",
                phone: "फोन नंबर",
                address: "पता",
                dateOfBirth: "जन्म तिथि",
                linkedinProfileLink: "लिंक्डइन प्रोफाइल लिंक",
                postApplyingFor: "पद के लिए आवेदन",
                availableStartDate: "उपलब्ध स्टार्ट डेट",
                uploadResume: "रिज्यूम अपलोड करें",
                coverLetter: "कवर पत्र",
                phoneNumber: "फोन नंबर",
                enquiry: "पूछताछ",
            };
        default:
            return {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                phone: "Phone Number",
                address: "Address",
                dateOfBirth: "Date of Birth",
                linkedinProfileLink: "Linkedin Profile Link",
                postApplyingFor: "Post Applying For",
                availableStartDate: "Available Start Date",
                uploadResume: "Upload Resume",
                coverLetter: "Cover Letter",
                phoneNumber: "Phone Number",
                enquiry: "Enquiry",
            };
    }
}
