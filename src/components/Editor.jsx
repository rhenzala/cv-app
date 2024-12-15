


function PersonalForm({
    firstName, 
    lastName, 
    handleFirstNameChange,
    handleLastNameChange
}) { 
    return (
        <section className="bg-light-gray p-8 rounded-md">
            <div className="flex justify-between mb-4">
                <h1 className="font-semibold text-xl">Personal Details</h1>
                <button>Show</button>
            </div>
            <form action="">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                     />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={handleLastNameChange}
                     />
                </div>
            </form>
        </section>
         
    )
}

export default function Editor ({firstName, lastName, handleFirstNameChange, handleLastNameChange}) {
    return (
        <div className="editor p-8 text-black w-[40%] flex flex-col gap-3">
            <PersonalForm
            firstName={firstName} 
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            />
        </div>
    )
}