import React from "react";
import Bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const mainPage = () => (
    <div>
        <div className="container mt-5">
            <h1 className="mb-3">CYF Events Calendar</h1>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a href="/admin">Admin</a>
                </li>
                <li className="nav-item">
                    <a href="/events">Events</a>
                </li>
            </ul>
        </div>
    </div>
);

export default mainPage;
