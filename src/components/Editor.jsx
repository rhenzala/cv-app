import PersonalDetails from "./PersonalDetails"
import Education from "./Education"


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
        schoolName, 
        handleSchoolNameChange,
        fieldStudy, 
        handleFieldStudyChange,
        fromDate,
        handleFromChange,
        toDate,
        handleToChange
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
            schoolName={schoolName}
            handleSchoolNameChange={handleSchoolNameChange}
            fieldStudy={fieldStudy}
            handleFieldStudyChange={handleFieldStudyChange}
            fromDate={fromDate}
            handleFromChange={handleFromChange}
            toDate={toDate}
            handleToChange={handleToChange} 
            />
        </div>
    )
}