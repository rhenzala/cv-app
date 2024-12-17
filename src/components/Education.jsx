/* eslint-disable react/prop-types */
import { useState } from "react";
import deleteIcon from "../assets/delete.svg";
import plusIcon from "../assets/plus.svg";
import xIcon from "../assets/x.svg"


function CreateForm({
    educ,
    updateEducation,
    addDescription,
    deleteDescription,
    onDelete
}) {
    const [inputValue, setInputValue] = useState('');

    function handleAdd(e) {
        e.preventDefault()
        if (inputValue.trim()) {
            addDescription('Education', educ.id, inputValue);
            setInputValue('');
        }
    }
    return (
        <div className="flex flex-row-reverse justify-between py-4">
            <button
            onClick={() => onDelete('Education', educ.id)}
            className=" mt-1 mr-1 px-2 h-8"
            >
            <img
            src={deleteIcon} 
            className="w-5 h-5"
            />
            </button>
            <div
            className="w-[85%] flex flex-col gap-3"
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor={`school-${educ.id}`}>School</label>
                    <input 
                    type="text"
                    id={`school-${educ.id}`}
                    value={educ.school}
                    onChange={e => updateEducation('Education', educ.id, 'school', e.target.value)}
                    className="rounded-md p-1"
                        />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor={`fieldStudy-${educ.id}`}>Field of Study</label>
                    <input 
                    type="text"
                    id={`fieldStudy-${educ.id}`}
                    value={educ.fieldStudy}
                    onChange={e => updateEducation('Education', educ.id, 'fieldStudy', e.target.value)}
                    className="rounded-md p-1"
                        />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor={`fromDate-${educ.id}`}>From</label>
                    <input 
                    type="month"
                    id={`fromDate-${educ.id}`}
                    value={educ.fromDate}
                    onChange={e => updateEducation('Education', educ.id, 'fromDate', e.target.value)}
                    className="rounded-md p-1"
                        />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor={`toDate-${educ.id}`}>To</label>
                    <input 
                    type="month"
                    id={`toDate-${educ.id}`}
                    value={educ.toDate}
                    onChange={e => updateEducation('Education', educ.id, 'toDate', e.target.value)}
                    className="rounded-md p-1"
                        />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor={`description-${educ.id}`}>Description</label>
                    <div className="flex gap-2">
                        <input 
                        type="text"
                        id={`description-${educ.id}`}
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
                        className="flex flex-col gap-1 mt-2"
                        >
                            {educ.descriptions.map((item, index) => (
                                <li
                                key={index}
                                className="flex justify-between p-1 rounded-md bg-dark-gray text-white text-sm font-medium"
                                >
                                <span>{item}</span>
                                <button
                                onClick={() => deleteDescription('Education', educ.id, index)}
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
export default function educ({
    education,
    updateEducation,
    addDescription,
    deleteDescription,
    addEducation,
    deleteEducation
}) { 
    function handleAddEducation(e) {
        e.preventDefault();
        addEducation('Education');
    }
    return (
        <section className="bg-light-gray p-8 rounded-lg">
            <div className="flex justify-between mb-4">
                <h1 className="font-semibold text-xl">Education</h1>
                <button>Show</button>
            </div>
            <form 
            onSubmit={e => e.preventDefault()}
            className="flex flex-col gap-4">
                {education.map((educ) => (
                    <CreateForm
                        key={educ.id}
                        educ={educ}
                        updateEducation={updateEducation}
                        addDescription={addDescription}
                        deleteDescription={deleteDescription}
                        onDelete={deleteEducation}
                    />
                ))}
                <button
                    onClick={handleAddEducation}
                    className="bg-blue text-white py-2 px-4 rounded-md w-full mt-2 hover:bg-blue/90"
                >
                    Add Education
                </button>
            </form>
        </section>
         
    )
}
