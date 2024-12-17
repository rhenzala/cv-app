import { useState } from 'react'
import '../styles/App.css'
import Editor from './Editor'
import Preview from './Preview'


function App() {
  const [personalInfo, setPersonalInfo] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      cityAddress: 'London, UK',
      phoneNum: '123456789',
      email: 'johndoe.fake@email.com'
    }
  ])

  const [education, setEducation] = useState([
    {
      id: 1,
      school: 'Somewhere College',
      fieldStudy: 'BS Computer Science',
      fromDate: '2014-08',
      toDate: '2018-09',
      descriptions: [
        'Best in innovative technological solution awardee',
        'Relevant coursework: Software Development 101, Data Structures & Algorithm'
      ]
    }
  ])
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      company: 'This Company, Inc.',
      role: 'Software Engineer',
      fromWorkDate: '2018-03',
      toWorkDate: '2022-09',
      descriptions: ['Managed a team of 4 people in delivering project bla bla bla']
    }
  ])
  const updateArray = (sec, id, field, value) => {
    if (sec === 'Personal') {
      setPersonalInfo(prevInfo => 
        prevInfo.map(info => 
          info.id === id ? {...info, [field]:value}: info
        ))
    }
    if (sec === 'Experience') {
      setExperiences(prevExperiences => 
        prevExperiences.map(exp => 
          exp.id === id ? {...exp, [field]:value}: exp
        ))
    }
    if (sec === 'Education') {
      setEducation(prevEducation => 
        prevEducation.map(edu => 
          edu.id === id ? {...edu, [field]:value}: edu
        ))
    }
    
  }
  const addDescription = (sec, experienceId, description) => {
    if (sec === 'Experience') {
      setExperiences(prevExperiences => 
        prevExperiences.map(exp => 
          exp.id === experienceId ? {...exp, descriptions: [...exp.descriptions, description]}: exp
        ));
    }
    if (sec === 'Education') {
      setEducation(prevEducation => 
        prevEducation.map(edu => 
          edu.id === experienceId ? {...edu, descriptions: [...edu.descriptions, description]}: edu
        ));
    }
    
  }
  const deleteDescription = (sec, experienceId, descriptionIndex) => {
    if (sec === 'Experience') {
      setExperiences(prevExperiences => 
        prevExperiences.map(exp => 
          exp.id === experienceId ? 
          {
            ...exp, 
            descriptions: exp.descriptions.filter((_, i) => i !== descriptionIndex)
          } 
          : exp
        ))
    }
    if (sec === 'Education') {
      setEducation(prevEducation => 
        prevEducation.map(edu => 
          edu.id === experienceId ? 
          {
            ...edu, 
            descriptions: edu.descriptions.filter((_, i) => i !== descriptionIndex)
          } 
          : edu
        ))
    }
    
  }
  const addForm = (sec) => {
    if (sec === 'Experience') {
      // Math.max() is used to avoid duplication of id when deleting and then adding experience
      const newId = experiences.length > 0 ?
      Math.max(...experiences.map(exp => exp.id), 0) + 1
      : 1;
      const newExperience = {
        id: newId,
        company: '',
        role: '',
        fromWorkDate: '',
        toWorkDate: '',
        descriptions: []
      };

      setExperiences(prevExperiences => [...prevExperiences, newExperience]);
    }
    if (sec === 'Education') {
      // Math.max() is used to avoid duplication of id when deleting and then adding experience
      const newId = education.length > 0 ?
      Math.max(...education.map(edu => edu.id), 0) + 1
      : 1;
      const newEducation = {
        id: newId,
        school: '',
        fieldStudy: '',
        fromDate: '',
        toDate: '',
        descriptions: []
      };

      setEducation(prevEducation => [...prevEducation, newEducation]);
    }
    
  }
  const deleteForm = (sec, id) => {
    if (sec === 'Experience') {
      setExperiences(prevExperiences => 
        prevExperiences.filter(exp => exp.id !== id)
      )
    }
    if (sec === 'Education') {
      setEducation(prevEducation => 
        prevEducation.filter(edu => edu.id !== id)
      )
    }
  }
  

  return (
    <>
      <div className='flex w-full h-full'>
        <Editor
        personalInfo={personalInfo}
        education={education}
        experiences={experiences}
        updateArray={updateArray}
        addDescription={addDescription}
        deleteDescription={deleteDescription}
        addForm={addForm}
        deleteForm={deleteForm}
        />
        <Preview 
        personalInfo={personalInfo}
        education={education}
        experiences={experiences}
        />
      </div>
    </>
  )
}

export default App
