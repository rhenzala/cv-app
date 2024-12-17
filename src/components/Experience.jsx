/* eslint-disable react/prop-types */
import { useState } from "react";
import deleteIcon from "../assets/delete.svg";
import plusIcon from "../assets/plus.svg";
import xIcon from "../assets/x.svg"


function CreateForm({
    experience,
    updateExperience,
    addDescription,
    deleteDescription,
    onDelete
}) {
    const [inputValue, setInputValue] = useState('');

    function handleAdd(e) {
        e.preventDefault()
        if (inputValue.trim()) {
            addDescription('Experience', experience.id, inputValue);
            setInputValue('');
        }
    }
    return (
        <div className="flex flex-row-reverse justify-between py-4">
            <button
            onClick={() => onDelete('Experience', experience.id)}
            className=" mt-1 mr-1 px-2 h-8"
            >
            <img
            src={deleteIcon} 
            className="w-5 h-5"
            />
            </button>
            <div className="w-[85%] flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <label htmlFor={`company-${experience.id}`}>Company</label>
                    <input 
                    type="text"
                    id={`company-${experience.id}`}
                    value={experience.company}
                    onChange={e => updateExperience('Experience', experience.id, 'company', e.target.value)}
                    className="rounded-md p-1"
                        />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor={`role-${experience.id}`}>Role</label>
                    <input 
                    type="text"
                    id={`role-${experience.id}`}
                    value={experience.role}
                    onChange={e => updateExperience('Experience', experience.id, 'role', e.target.value)}
                    className="rounded-md p-1"
                        />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor={`fromWorkDate-${experience.id}`}>From</label>
                    <input 
                    type="month"
                    id={`fromWorkDate-${experience.id}`}
                    value={experience.fromWorkDate}
                    onChange={e => updateExperience('Experience', experience.id, 'fromWorkDate', e.target.value)}
                    className="rounded-md p-1"
                        />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor={`toWorkDate-${experience.id}`}>To</label>
                    <input 
                    type="month"
                    id={`toWorkDate-${experience.id}`}
                    value={experience.toWorkDate}
                    onChange={e => updateExperience('Experience', experience.id, 'toWorkDate', e.target.value)}
                    className="rounded-md p-1"
                        />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor={`description-${experience.id}`}>Description</label>
                    <div className="flex gap-2">
                        <input 
                        type="text"
                        id={`description-${experience.id}`}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="rounded-md p-1"
                        />
                        <button
                        onClick={handleAdd}
                        className="bg-blue px-1 rounded-full"
                        >
                        <img
                        src={plusIcon}
                        className="w-6 h-6" 
                        />
                        </button>
                    </div>
                    <div>
                        <ul
                        className="flex flex-col gap-1"
                        >
                            {experience.descriptions.map((item, index) => (
                                <li
                                key={index}
                                className="flex justify-between p-1 rounded-md bg-dark-gray text-white text-sm font-medium"
                                >
                                <span>{item}</span>
                                <button
                                onClick={() => deleteDescription('Experience', experience.id, index)}
                                aria-label="Delete item"
                                >
                                <img
                                src={xIcon} 
                                className="w-[14px] h-[14px]"
                                />
                                </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default function Experience({
    experiences,
    updateExperience,
    addDescription,
    deleteDescription,
    addExperience,
    deleteExperience
}) { 
    function handleAddExperience(e) {
        e.preventDefault();
        addExperience('Experience')
    }
    return (
        <section className="bg-light-gray p-8 rounded-lg">
            <div className="flex justify-between mb-4">
                <h1 className="font-semibold text-xl">Experience</h1>
                <button>Show</button>
            </div>
            <form 
            onSubmit={e => e.preventDefault()}
            className="flex flex-col gap-4">
                {experiences.map((experience) => (
                    <CreateForm
                        key={experience.id}
                        experience={experience}
                        updateExperience={updateExperience}
                        addDescription={addDescription}
                        deleteDescription={deleteDescription}
                        onDelete={deleteExperience}
                    />
                ))}
                <button
                    onClick={handleAddExperience}
                    className="bg-blue text-white py-2 px-4 rounded-md w-full mt-2 hover:bg-blue/90"
                >
                    Add Experience
                </button>
            </form>
        </section>
         
    )
}
