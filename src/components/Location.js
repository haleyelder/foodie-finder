export default function Location({locations}) {
    return (
        <>
            <div>Location</div>
            <div className="location">

            {locations.map((location) => (
                <div key={location.id}>
                    Name: {location.name}
                    <br></br>
                    location:
                    {location.lat} - {location.long}
                    <br></br>
                    Type: {location.type}
                </div>
            ))}

            </div>
        </>
    )
}

