/* eslint-disable react/prop-types */

function CreateForm({
    info,
    updateInfo
}) {
    return (
        <div className="flex flex-col gap-3 py-4 w-[85%]">
            <div className="flex flex-col gap-1">
                <label htmlFor={`firstName-${info.id}`}>First Name</label>
                <input 
                type="text"
                id={`firstName-${info.id}`}
                value={info.firstName}
                onChange={e => updateInfo('Personal', info.id, 'firstName', e.target.value)}
                className="rounded-md p-1"
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor={`lastName-${info.id}`}>Last Name</label>
                <input 
                type="text"
                id={`lastName-${info.id}`}
                value={info.lastName}
                onChange={e => updateInfo('Personal', info.id, 'lastName', e.target.value)}
                className="rounded-md p-1"
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor={`cityAddress-${info.id}`}>City Address</label>
                <input 
                type="text"
                id={`cityAddress-${info.id}`}
                value={info.cityAddress}
                onChange={e => updateInfo('Personal', info.id, 'cityAddress', e.target.value)}
                className="rounded-md p-1"
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor={`phoneNum-${info.id}`}>Phone</label>
                <input 
                type="tel"
                id={`phoneNum-${info.id}`}
                value={info.phoneNum}
                onChange={e => updateInfo('Personal', info.id, 'phoneNum', e.target.value)}
                className="rounded-md p-1"
                    />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor={`emailAddress-${info.id}`}>Email</label>
                <input 
                type="email"
                id={`emailAddress-${info.id}`}
                value={info.email}
                onChange={e => updateInfo('Personal', info.id, 'email', e.target.value)}
                className="rounded-md p-1"
                    />
            </div>
        </div>
    )
}
export default function PersonalDetails({
    personalInfo,
    updateInfo,
    isActive,
    onShow
}) { 
    return (
        <section className="bg-light-gray p-8 rounded-lg">
            <h1 className="font-semibold text-xl mb-4">Personal Details</h1>
            {
            isActive? 
            <form 
            onSubmit={e => e.preventDefault()}
            className="flex flex-col gap-4">
                {personalInfo.map((info) => (
                    <CreateForm
                        key={info.id}
                        info={info}
                        updateInfo={updateInfo}
                    />
                ))}
            </form>
            : <button 
            className="dark-shadow bg-rose rounded-md text-white py-1 px-4"
            onClick={onShow}
            aria-label="Show"
            >
            Show
            </button>
            }
        </section>
         
    )
}
