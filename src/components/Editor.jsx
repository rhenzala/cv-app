/* eslint-disable react/prop-types */
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import printIcon from "../assets/print.svg";
import { useState } from "react";

export default function Editor({
  personalInfo,
  education,
  experiences,
  skills,
  updateArray,
  addDescription,
  deleteDescription,
  addForm,
  deleteForm,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  function handlePrintBtn() {
    window.print();
  }
  return (
    <div className="editor p-8 text-black bg-black w-[40%] flex flex-col gap-4 overflow-y-auto custom-md:w-full">
      <header className="w-full mb-4 text-white flex justify-between items-center flex-1 custom-md:flex-col custom-md:gap-4">
        <div className="logo">
          <h1 className="font-bold text-5xl custom-sm:text-[36px]">
            CV Generator
          </h1>
        </div>
        <div className="download-document">
          <button
            onClick={handlePrintBtn}
            className="rounded-md bg-rose py-2 px-4 hover:scale-105 transition ease-in delay-150"
            aria-label="Print Button"
          >
            <img src={printIcon} className="w-8 h-8" />
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
      <Skill
        skills={skills}
        updateSkill={updateArray}
        addSkillSet={addDescription}
        deleteSkillSet={deleteDescription}
        addSkill={addForm}
        deleteSkill={deleteForm}
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
      />
    </div>
  );
}
