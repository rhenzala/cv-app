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
        <div className="editor p-8 text-black w-[40%] flex flex-col gap-3">
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