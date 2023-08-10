import { useState } from "react"

export default function Location({locations}) {
    const [search, setSearch] = useState('')
    const [result, setResult] = useState(locations)

    const filter = (e) => {
        const keyword = e.target.value

        if (keyword !== "") {
            const results = locations.filter((location) => {
                return location.name.toLowerCase().startsWith(keyword.toLowerCase())
            });
            setResult(results)
        } else {
            setResult(locations)
        }
        setSearch(keyword)
    }

    const handleClickCopyText = (e) => {
        const copiedText = e.target.innerText    
        navigator.clipboard.writeText(copiedText)
        console.log(copiedText + ' copied!')
    }

    return (
        <>
            <div>Location</div>
            <div className="search-container">
                <input 
                    type="search"
                    value={search}
                    onChange={filter}
                    className="input"
                    placeholder="search..."
                />
            </div>

            <div className="user-list">
                {result && result.length > 0 ? (
                result.map((location) => (
                    <li key={location.id} className="user">
                    <span>{location.name}</span>
                    </li>
                ))
                ) : (
                <h1>No results found!</h1>
                )}
            </div>
    
            
            <div className="location-list">

            {locations.map((location) => (

                <div key={location.id} className="locations">
                    <div className="location-name" onClick={handleClickCopyText}><strong>{location.name}</strong> <span className="neighborhood"><em>- {location.neighborhood} </em></span></div>
                    
                    <div className="location-type"><em>{location.type}</em></div>
                    <div className="location-coords">location: {location.lat} - {location.long}</div>
                    <div className="location-visited">visited: {String(location.visited) === "true" ? "✓" : "false"}</div>
                 
                </div>
            ))}

            </div>
        </>
    )
}

