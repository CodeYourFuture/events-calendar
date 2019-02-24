import React from "react";
import Popup from "reactjs-popup";
import Form from "./AdminForm";
import "../../../Style/Event.css";
import NavBar from "../../NavBar";
import AdminEvent from "./AdminEvent.js";

const Adminevents = props => {
    return (
        <div className="events">
            <NavBar>
                <h1 className="myHeader ml-5 ">Events</h1>
                <a href="/admin/newevent">
                    <button className="btn btn-outline-primary mb-2 ml-2 sideButton mr-5 ">
                        add a new event
                    </button>
                </a>
                <a href="/admin">
                    <button className="btn btn-outline-primary ml-2 mb-2 sideButton">
                        Back
                    </button>
                </a>
            </NavBar>
            {props.events.map(function(event, i) {
                return (
                    <div className="event" key={i}>
                        <AdminEvent
                            key={i}
                            name={event.name}
                            description={event.description}
                            date={event.date}
                            _id={event._id}
                            address={event.address}
                            country={event.country}
                            city={event.city}
                            syllabusUrl={event.syllabusUrl}
                            volunteers={event.volunteers}
                            numVolunteersNeeded={event.numVolunteersNeeded}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Adminevents;
