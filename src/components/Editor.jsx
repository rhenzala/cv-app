/* eslint-disable react/prop-types */
import PersonalDetails from "./PersonalDetails"
import Education from "./Education"
import Experience from "./Experience"


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
    return (
        <div className="editor p-8 text-black bg-black w-[40%] flex flex-col gap-3">
            <header className="w-full text-white flex justify-between items-center">
                <div className="logo">
                    <h1 className="font-bold text-5xl">CV Generator</h1>
                </div>
                <div className="download-document mr-4">
                    <button className="download-button">Download</button>
                </div>
            </header>
            <PersonalDetails
            personalInfo={personalInfo}
            updateInfo={updateArray}
            />
            <Education
            education={education}
            updateEducation={updateArray}
            addDescription={addDescription}
            deleteDescription={deleteDescription}
            addEducation={addForm}
            deleteEducation={deleteForm}
            />
            <Experience 
            experiences={experiences}
            updateExperience={updateArray}
            addDescription={addDescription}
            deleteDescription={deleteDescription}
            addExperience={addForm}
            deleteExperience={deleteForm}
            />
        </div>
    )
}