
function CreateForm({
    firstName, 
    lastName, 
    handleFirstNameChange,
    handleLastNameChange,
    cityAddress,
    phoneNum,
    email,
    handleCityChange,
    handlePhoneChange,
    handleEmailChange
}) {
    return (
        <form action="" className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <label htmlFor="firstName">First Name</label>
                <input 
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                className="rounded-md p-1"
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="lastName">Last Name</label>
                <input 
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                className="rounded-md p-1"
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="cityAddress">City Address</label>
                <input 
                type="text"
                id="cityAddress"
                value={cityAddress}
                onChange={handleCityChange}
                className="rounded-md p-1"
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="phoneNumber">Phone</label>
                <input 
                type="tel"
                id="phoneNumber"
                value={phoneNum}
                onChange={handlePhoneChange}
                className="rounded-md p-1"
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="emailAddress">Email</label>
                <input 
                type="email"
                id="emailAddress"
                value={email}
                onChange={handleEmailChange}
                className="rounded-md p-1"
                    />
            </div>
        </form>
    )
}
export default function PersonalDetails({
    firstName, 
    lastName, 
    handleFirstNameChange,
    handleLastNameChange,
    cityAddress,
    phoneNum,
    email,
    handleCityChange,
    handlePhoneChange,
    handleEmailChange
}) { 
    return (
        <section className="bg-light-gray p-8 rounded-lg">
            <div className="flex justify-between mb-4">
                <h1 className="font-semibold text-xl">Personal Details</h1>
                <button>Show</button>
            </div>
            <CreateForm
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
        </section>
         
    )
}
