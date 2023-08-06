export default function Location({locations}) {
    return (
        <>
            <div className="location-list">
            <div>Location</div>

            {locations.map((location) => (

                <div key={location.id} className="locations">
                    <div className="location-name">Name: {location.name}</div>
                    
                    <div className="location-coords">location: {location.lat} - {location.long}</div>
                    <div className="location-type">Type: {location.type}</div>
                    <div className="location-visited">visited: {String(location.visited) === "true" ? "✓" : "false"}</div>
                 
                </div>
            ))}

            </div>
        </>
    )
}

