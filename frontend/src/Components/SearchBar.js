import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    //Handle input change
    function handleChange(event) {
        setQuery(event.target.value);
    }

    //Handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/sku/${query}`);
    }

    return (
        //Search form with input and submit button
        <form onSubmit={handleSubmit}>
            <input className=" text-black rounded-md mx-1 p-1" type="text" placeholder="Search an SKU..." value={query} onChange={handleChange} />
            <button className="rounded-md p-1 mx-1 bg-blue-700 text-white hover:bg-blue-500 transition-all duration-300" type="submit">
                Search
            </button>
        </form>
    );
}