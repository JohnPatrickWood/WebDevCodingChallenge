import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/sku/${query}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className=" text-black rounded-md mx-1" type="text" placeholder="Search an SKU..." value={query} onChange={handleChange} />
            <button className="rounded-md mx-1 bg-blue-700 text-white hover:bg-blue-500 transition-all duration-300" type="submit">
                Search
            </button>
        </form>
    )
}