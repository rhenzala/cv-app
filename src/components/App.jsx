import { useState } from 'react'
import '../styles/App.css'
import Editor from './Editor'
import Preview from './Preview'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  function handleFirstNameChange(e) {
      setFirstName(e.target.value);
  }
  
  function handleLastNameChange(e) {
      setLastName(e.target.value);
  }
  return (
    <>
      <div className='flex w-full h-full'>
        <Editor
        firstName={firstName}
        lastName={lastName} 
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        />
        <Preview 
        firstName={firstName}
        lastName={lastName}
        />
      </div>
    </>
  )
}

export default App
