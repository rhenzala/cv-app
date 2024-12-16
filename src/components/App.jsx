import { useState } from 'react'
import '../styles/App.css'
import Editor from './Editor'
import Preview from './Preview'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cityAddress, setCityAddress] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [fieldStudy, setFieldStudy] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleCityChange(e) {
    setCityAddress(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhoneNum(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }
  function handleFieldStudyChange(e) {
    setFieldStudy(e.target.value);
  }
  function handleFromChange(e) {
    setFromDate(e.target.value);
  }
  function handleToChange(e) {
    setToDate(e.target.value);
  }

  return (
    <>
      <div className='flex w-full h-full'>
        <Editor
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
        schoolName={schoolName}
          handleSchoolNameChange={handleSchoolNameChange}
          fieldStudy={fieldStudy}
          handleFieldStudyChange={handleFieldStudyChange}
          fromDate={fromDate}
          handleFromChange={handleFromChange}
          toDate={toDate}
          handleToChange={handleToChange} 
        />
        <Preview 
        firstName={firstName}
        lastName={lastName}
        cityAddress={cityAddress}
        phoneNum={phoneNum}
        email={email}
        schoolName={schoolName}
        fieldStudy={fieldStudy}
        fromDate={fromDate}
        toDate={toDate} 
        />
      </div>
    </>
  )
}

export default App
