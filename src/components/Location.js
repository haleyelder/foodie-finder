export default function Location({locations}) {
    return (
        <>
            <div className="location-list">
            <div>Location</div>

            {locations.map((location) => (

                <div key={location.id} className="locations">
                    <span className="location-name">Name: {location.name}</span>
                    
                    <span className="location-coords">location: {location.lat} - {location.long}</span>
                    <span className="location-type">Type: {location.type}</span>
                    <span className="location-visited">visited: {String(location.visited) === "true" ? "✓" : "false"}</span>
                 
                </div>
            ))}

            </div>
        </>
    )
}

