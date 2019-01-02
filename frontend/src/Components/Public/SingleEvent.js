import React from "react";
import Event from "./Event";
import FloatersOfEvents from "../Admin/Floaters/FloatersOfEvent.js";
import NavBar from "../NavBar";

export default class SingleEvent extends React.Component {
    state = {
        event: []
    };
    componentDidMount() {
        fetch(`/api/events/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ event: data });
            });
    }

    render() {
        return (
            <div className="events mt-2">
                <NavBar>
                    <h1 className="myHeader ml-5"> Events</h1>
                </NavBar>
                <div className="event">
                    <Event
                        name={this.state.event.lesson}
                        description={this.state.event.description}
                        date={this.state.event.date}
                    />
                    <FloatersOfEvents id={this.props.match.params.id} />
                    <a className="btn btn-primary " href="/events">
                        Back
                    </a>
                </div>
            </div>
        );
    }
}
