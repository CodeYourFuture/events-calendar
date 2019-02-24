import React from "react";
import NavBar from "../NavBar";
import moment from "moment";
import Popup from "reactjs-popup";

export default class SingleEvent extends React.Component {
    state = {
        event: []
    };
    componentDidMount() {
        fetch(`/events/api/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => {
                if (!data.event.syllabusUrl.includes("http"))
                    data.event.syllabusUrl = "http://" + data.event.syllabusUrl;
                this.setState({ event: data.event });
            });
    }

    render() {
        return (
            <div className="events mt-2">
                <NavBar>
                    <h1 className="myHeader ml-5"> Events</h1>
                    <a href="/events">
                        <button className="btn btn-outline-primary mb-2 ml-2 sideButton mr-5 ">
                            Back to results
                        </button>
                    </a>
                </NavBar>

                <span className="event-grid-container">
                    <div className="grid-item">
                        <h4 className="mt-2">
                            {moment(this.state.event.date).format(
                                "Do MMMM  YYYY"
                            )}
                        </h4>
                        <small>
                            <p>12pm-6pm</p>
                        </small>
                    </div>
                    <div className="grid-item">
                        <h1 className="font-weight-bold">
                            {this.state.event.name}
                        </h1>
                    </div>
                    <div className="grid-item ">
                        <p className="mt-2">
                            <strong>
                                {this.state.event.numVolunteersNeeded}
                            </strong>{" "}
                            more volunteers needed
                        </p>
                    </div>
                    <div className="grid-item ">
                        <p className="a-address ">
                            <a href="">{this.state.event.address}</a>
                        </p>
                    </div>

                    <div className="grid-item text-left">
                        <p>
                            {this.state.event.description}
                            <br />
                            <a
                                href={this.state.event.syllabusUrl}
                                target="_blank"
                            >
                                For Syllabus Click here
                            </a>
                        </p>

                        <div className="text-center">
                            <Popup
                                trigger={
                                    <button
                                        type="button"
                                        className="btn btn-primary mt-4"
                                    >
                                        Volunteer
                                    </button>
                                }
                                position="right center"
                                modal
                            >
                                {/* <VolunteerForm event_id={props.event_id} /> to show volunteers name if needed again*/}
                            </Popup>
                        </div>
                    </div>
                </span>
            </div>
        );
    }
}
