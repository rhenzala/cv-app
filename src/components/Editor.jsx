/* eslint-disable react/prop-types */
import PersonalDetails from "./PersonalDetails"
import Education from "./Education"
import Experience from "./Experience"


export default function Editor ({
        firstName, 
        lastName, 
        handleFirstNameChange, 
        handleLastNameChange,
        cityAddress,
        phoneNum,
        email,
        handleCityChange,
        handlePhoneChange,
        handleEmailChange,
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
            firstName={firstName} 
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            cityAddress={cityAddress}
            phoneNum={phoneNum}
            email={email}
            handleCityChange={handleCityChange}
            handlePhoneChange={handlePhoneChange}
            handleEmailChange={handleEmailChange}
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