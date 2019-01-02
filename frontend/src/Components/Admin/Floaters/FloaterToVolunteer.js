import React from "react";
import Message from "../../Message/Message";
import "../../../Style/Event.css";

export default class VolunteerForm extends React.Component {
    state = { allmentors: [], message: false, volunteers: [], message2: false };

    componentDidMount() {
        fetch("/api/mentors")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    allmentors: data
                });
            });
        this._fetchVolunteers();
    }

    _fetchVolunteers() {
        fetch("/api/events-floaters/event/" + this.props.event_id)
            .then(res => res.json())
            .then(data1 => {
                this.setState({
                    volunteers: data1
                });
            });
    }

    _addFloaterToEvent = floater_id => {
        fetch("/api/events-floaters/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                event_id: this.props.event_id,
                floater_id: floater_id
            })
        })
            .then(() => {
                this.setState({ message: true });
                setTimeout(
                    () =>
                        this.setState({
                            message: false
                        }),
                    1000
                );
                this._fetchVolunteers();
            })
            .catch(error => console.error(error));
    };

    _removeFloaterFromEvent = floater_id => {
        fetch("/api/events-floaters/" + floater_id, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(() => {
                this.setState({ message2: true });
                setTimeout(
                    () =>
                        this.setState({
                            message2: false
                        }),
                    1000
                );
                this._fetchVolunteers();
            })
            .catch(error => console.error(error));
    };

    render() {
        return (
            <div className="container mt-2">
                <Message
                    show={this.state.message}
                    status="success"
                    message="Floater Has Been Added"
                />
                <Message
                    show={this.state.message2}
                    status="success"
                    message="You are unvolunteered"
                />
                <ul className="container list-group mt-4 mb-4">
                    {this.state.allmentors.map(mentor => {
                        const mentorIsVolunteered = this.state.volunteers.some(
                            volunteer =>
                                volunteer.floater_id === mentor.floater_id
                        );
                        return (
                            <div>
                                <button
                                    type="button"
                                    className="list-group-item list-group-item-action"
                                    onClick={() => {
                                        console.log("onclick");

                                        if (mentorIsVolunteered) {
                                            this._removeFloaterFromEvent(
                                                mentor.floater_id
                                            );
                                        } else {
                                            this._addFloaterToEvent(
                                                mentor.floater_id
                                            );
                                        }
                                    }}
                                >
                                    {mentor.floater_fname}{" "}
                                    {mentor.floater_surname}
                                    <span className="btn float-right">
                                        {mentorIsVolunteered && "✅"}
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </ul>
                <p>
                    You not here!{" "}
                    <a href="/admin/floaters/addToList">
                        {" "}
                        <button className="btn btn-outline-primary mr-4 mb-2 ">
                            Add Yourself to CYF volunteer list{" "}
                        </button>
                    </a>
                </p>
            </div>
        );
    }
}
