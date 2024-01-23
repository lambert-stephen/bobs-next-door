import React from "react"

function Search({search, setSearch}) {
    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    );
}

export default Search;