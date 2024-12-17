/* eslint-disable react/prop-types */
import PersonalDetails from "./PersonalDetails"
import Education from "./Education"
import Experience from "./Experience"
import printIcon from "../assets/print.svg"
import { useState } from "react"


export default function Editor ({
        personalInfo,
        education,
        experiences,
        updateArray,
        addDescription,
        deleteDescription,
        addForm,
        deleteForm
    }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="editor p-8 text-black bg-black w-[40%] flex flex-col gap-4 overflow-y-auto">
            <header className="w-full text-white flex justify-between items-center">
                <div className="logo">
                    <h1 className="font-bold text-5xl">CV Generator</h1>
                </div>
                <div className="download-document mr-4">
                    <button className="rounded-md bg-rose py-2 px-4 hover:scale-105 transition ease-in delay-150">
                        <img
                        src={printIcon}
                        className="w-8 h-8" 
                        />
                    </button>
                </div>
            </header>
            <PersonalDetails
            personalInfo={personalInfo}
            updateInfo={updateArray}
            isActive={activeIndex === 0}
            onShow={() => setActiveIndex(0)}
            />
            <Education
            education={education}
            updateEducation={updateArray}
            addDescription={addDescription}
            deleteDescription={deleteDescription}
            addEducation={addForm}
            deleteEducation={deleteForm}
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
            />
            <Experience 
            experiences={experiences}
            updateExperience={updateArray}
            addDescription={addDescription}
            deleteDescription={deleteDescription}
            addExperience={addForm}
            deleteExperience={deleteForm}
            isActive={activeIndex === 2}
            onShow={() => setActiveIndex(2)}
            />
        </div>
    )
}