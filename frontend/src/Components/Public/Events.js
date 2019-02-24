import React from "react";
import Event from "./Event.js";
import "../../Style/Event.css";
import NavBar from "../NavBar";
import "../../Style/Events.css";

const Events = props => {

    return (
        <div className="events">
            <NavBar>
                <h1 className="myHeader ml-5 ">Events</h1>
            </NavBar>
            {props.events.map(function(event, i) {
                return (
                    <Event
                        key={i}
                        _id={event._id}
                        name={event.name}
                        event={event}
                        date={event.date}
                        address={event.address}
                        country={event.country}
                        city={event.city}
                        syllabusUrl={event.syllabusUrl}
                        numVolunteersNeeded={event.numVolunteersNeeded}
                    />
                );
            })}
        </div>
    );
};

export default Events;
