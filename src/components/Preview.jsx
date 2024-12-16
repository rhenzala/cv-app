
function PersonalSection({
    firstName, 
    lastName,
    cityAddress,
    phoneNum,
    email
}) {
    const fullName = firstName + ' ' + lastName;
    return (
        <section className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl font-bold">{fullName}</h1>
            <p className="flex gap-2">
                <span>{cityAddress}</span>|
                <span>{phoneNum}</span>|
                <span>{email}</span>
            </p>
        </section>
    )
}
function EducationSection({
    schoolName, 
    fieldStudy, 
    fromDate,
    toDate
}) {
    return (
        <section className="flex flex-col mt-4">
            <h1 className="text-xl font-bold">Education</h1>
            <hr className="my-2" />
            <h2 className="text-lg font-semibold">{schoolName}</h2>
            <h2>{fieldStudy}</h2>
            <p className="flex gap-2">
                <span>{fromDate}</span>-
                <span>{toDate}</span>
            </p>
        </section>
    )
}
export default function Preview({
    firstName, 
    lastName,
    cityAddress,
    phoneNum,
    email,
    schoolName, 
    fieldStudy, 
    fromDate,
    toDate
}) {
    return (
        <div className="preview text-black w-[60%] p-8">
            <section className="bg-white h-full p-10 mx-auto max-w-[600px] aspect-[1/1.414]">
                <PersonalSection
                firstName={firstName}
                lastName={lastName}
                cityAddress={cityAddress}
                phoneNum={phoneNum}
                email={email}
                />
                <EducationSection
                schoolName={schoolName}
                fieldStudy={fieldStudy}
                fromDate={fromDate}
                toDate={toDate} 
                />
            </section>
        </div>
    )
}

