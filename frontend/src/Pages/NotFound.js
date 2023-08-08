import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <div>This page does not exsist</div>
            <Link to="/">go home?</Link>
        </>
    );
};