export default function Location({locations}) {
    return (
        <>
            <div className="location-list">
            <div>Location</div>

            {locations.map((location) => (

                <div key={location.id} className="locations">
                    <div className="location-name"><strong>{location.name}</strong> <span className="neighborhood"><em>- {location.neighborhood} </em></span></div>
                    
                    <div className="location-type"><em>{location.type}</em></div>
                    <div className="location-coords">location: {location.lat} - {location.long}</div>
                    <div className="location-visited">visited: {String(location.visited) === "true" ? "✓" : "false"}</div>
                 
                </div>
            ))}

            </div>
        </>
    )
}

