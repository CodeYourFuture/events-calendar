import React from "react";
import Event from "./Event.js";
import "../../Style/Event.css";
import NavBar from "../NavBar";
import "../../Style/Events.css";

class Events extends React.Component {

    state = {
        events: []
    };
    componentDidMount() {
        this.props.fetchEvents().then(
            data => {this.setState({
                events: data });
            });
    }
    render(){
        return (
            <div className="events">
                <NavBar>
                    <h1 className="myHeader ml-5 ">Events</h1>
                </NavBar>
                {this.state.events.map(function(event, i) {
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
}

export default Events;
