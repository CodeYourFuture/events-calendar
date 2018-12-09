import React from "react";
import "../../Style/MainPage.css";
const mainPage = () => (
    <div className="contain container">
        <div className="row justify-content-md-center title">
            <div className="col-md-auto">
                <h1 className="event-title">Events Calendar</h1>
            </div>
        </div>
        <div>
            <ul className="nav flex-column">
                <h2>
                    <a href="/admin">
                        <li className="nav-item text-center shadow-lg p-3 mb-5 rounded">
                            Admin
                        </li>
                    </a>
                </h2>

                <h2>
                    <a href="/events">
                        <li className="nav-item text-center shadow-lg p-3 mb-5  rounded">
                            Events
                        </li>
                    </a>
                </h2>
            </ul>


        </div>
    </div>
);

export default mainPage;
