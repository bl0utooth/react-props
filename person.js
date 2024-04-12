function person({ name, age, hobbies }) {
    const displayName = name.length > 8 ? name.substring(0, 6) : name;

    return (
        <div>
            <p>more about this person</p>
            <h1>{displayName}</h1>
            <h3>{age >= 18 ? 'please vote!' : 'must be 18 or older'}</h3>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}></li>
                ))}
            </ul>
        </div>
    )
}

export default person;

