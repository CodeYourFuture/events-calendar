import React from "react";
import NavBar from "../../NavBar";
import moment from "moment";
import Popup from "reactjs-popup";
import FloatersOfEvents from "../Floaters/FloatersOfEvent.js";
import EditForm from "./EditEvent.js";
import Form from "./AdminForm";

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

    toDelete(id) {
        console.log("id" + id);
        fetch("/events/api/" + id, {
            method: "delete"
        }).then(response => {
            if (response.status === 500) {
                alert("Error: Failed to delete event");
            } else {
                this.props.history.push("/admin/events");
            }
        });
    }

    render() {
        return (
            <div className="events mt-2">
                <NavBar>
                    <h1 className="myHeader ml-5"> Events</h1>
                    <Popup
                        trigger={
                            <button className="btn btn-outline-primary mb-2 ml-2 sideButton mr-5 ">
                                add a new event
                            </button>
                        }
                        position="right center"
                        modal
                    >
                        <Form />
                    </Popup>
                    <a href="/admin/events">
                        <button className="btn btn-outline-primary ml-2 mb-2 sideButton">
                            Back to All Events
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
                            <p>{this.state.event.date}</p>
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
                    </div>
                    <div className="grid-item">
                        <FloatersOfEvents id={this.props.match.params.id} />
                    </div>
                    <div className="grid-item">
                        {" "}
                        <button
                            className="btn btn-danger  mr-4 mb-2 mt-4"
                            onClick={() => {
                                this.toDelete(this.state.event.event_id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                    <div className="grid-item">
                        {" "}
                        <div className="grid-item">
                            <Popup
                                trigger={
                                    <button
                                        type="button"
                                        className="btn btn btn-warning mr-4 mb-2 mt-4"
                                    >
                                        Edit
                                    </button>
                                }
                                position="right center"
                                modal
                            >
                                <EditForm
                                    name={this.state.event.name}
                                    lesson={this.state.event.name}
                                    event_date={this.state.event.date}
                                    description={this.state.event.description}
                                    id={this.state.event.event_id}
                                />
                            </Popup>
                        </div>
                    </div>
                    <div className="grid-item ">
                        <Popup
                            trigger={
                                <button
                                    type="button"
                                    className="btn btn-primary mt-4"
                                >
                                    Add Volunteers
                                </button>
                            }
                            position="right center"
                            modal
                        >
                            {/* <VolunteerForm event_id={props.event_id} /> to show volunteers name if needed again*/}
                        </Popup>
                    </div>
                </span>
            </div>
        );
    }
}
