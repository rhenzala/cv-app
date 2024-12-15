
function PersonalSection({firstName, lastName}) {
    const fullName = firstName + ' ' + lastName;
    return (
        <section>
            <h1>{fullName}</h1>
            <p>This, City | 123456789 | skibidi@toilet.com </p>
            <p>linkedin/in/skibidi | github.com/skibidi</p>
        </section>
    )
}
export default function Preview({firstName, lastName}) {
    return (
        <div className="preview text-black w-[60%] p-8">
            <section className="bg-white h-full p-10 mx-auto max-w-[600px] aspect-[1/1.414]">
                <PersonalSection
                firstName={firstName}
                lastName={lastName}
                />
            </section>
        </div>
    )
}

