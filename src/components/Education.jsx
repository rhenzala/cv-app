
function CreateForm({
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
        <form action="" className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <label htmlFor="schoolName">School</label>
                <input 
                type="text"
                id="schoolName"
                value={schoolName}
                onChange={handleSchoolNameChange}
                className="rounded-md p-1"
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="fieldStudy">Field of Study</label>
                <input 
                type="text"
                id="fieldStudy"
                value={fieldStudy}
                onChange={handleFieldStudyChange}
                className="rounded-md p-1"
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="fromDate">From</label>
                <input 
                type="date"
                id="fromDate"
                value={fromDate}
                onChange={handleFromChange}
                className="rounded-md p-1"
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="toDate">To</label>
                <input 
                type="date"
                id="toDate"
                value={toDate}
                onChange={handleToChange}
                className="rounded-md p-1"
                    />
            </div>
        </form>
    )
}
export default function Education({
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
        <section className="bg-light-gray p-8 rounded-lg">
            <div className="flex justify-between mb-4">
                <h1 className="font-semibold text-xl">Education</h1>
                <button>Show</button>
            </div>
            <CreateForm
             schoolName={schoolName}
             handleSchoolNameChange={handleSchoolNameChange}
             fieldStudy={fieldStudy}
             handleFieldStudyChange={handleFieldStudyChange}
             fromDate={fromDate}
             handleFromChange={handleFromChange}
             toDate={toDate}
             handleToChange={handleToChange}
            />
        </section>
         
    )
}
