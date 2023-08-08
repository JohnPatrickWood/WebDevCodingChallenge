import React from "react";
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <nav className="bg-gray-800 text-white flex h-10 items-center" >
            <a href="/" className="hover:text-gray-300 fixed left-0 mx-1">
                Home
            </a>
            <div className="fixed right-0">
                <SearchBar />
            </div>
        </nav>
    )
}