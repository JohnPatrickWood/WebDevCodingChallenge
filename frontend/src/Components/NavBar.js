import React from "react";
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        //Navigation bar with Home button and SearchBar component
        <nav className="bg-gray-800 text-white flex h-10 items-center" >
            <a href="/" className="hover:bg-slate-300 fixed left-0 mx-1 bg-slate-500 p-1 rounded-md transition-all duration:300">
                Home
            </a>
            <div className="fixed right-0">
                <SearchBar />
            </div>
        </nav>
    );
}