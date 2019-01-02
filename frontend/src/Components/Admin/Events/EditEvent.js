import React from "react";
import Message from "../../Message/Message";

export default class EditForm extends React.Component {
    state = {
        lesson: "",
        event_date: "",
        description: "",
        message: false
    };
    constructor(props) {
        super(props);
        this.lessonRef = React.createRef();
        this.event_dateRef = React.createRef();
        this.descriptionRef = React.createRef();
    }

    onSubmit = event => {
        event.preventDefault();
        const body = {
            lesson: this.lessonRef.current.value,
            event_date: this.event_dateRef.current.value,
            description: this.descriptionRef.current.value
        };
        fetch("/api/events/" + this.props.id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "put",
            body: JSON.stringify(body)
        })
            .then(() => {
                this.lessonRef.current.value = "";
                this.event_dateRef.current.value = "";
                this.descriptionRef.current.value = "";
                this.setState({ message: true });
                this.props.history || [].push("/api/events");
            })
            .catch(error => console.error(error));
    };

    render() {
        return (
            <div className="container mt-2">
                <Message
                    show={this.state.message}
                    status="success"
                    message="Event Has Been Edited"
                />
                <h1 className="text-center mb-3">Editing this Event</h1>
                <form>
                    <div className="form-group">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <br />
                                    <label
                                        className="font-weight-bold"
                                        htmlFor="event name"
                                    >
                                        Event Name
                                    </label>

                                    <input
                                        className="input form-control form-control-lg"
                                        defaultValue={this.props.lesson}
                                        ref={this.lessonRef}
                                    />
                                    <br />
                                    <label
                                        className="font-weight-bold"
                                        htmlFor="event date"
                                    >
                                        Events Date
                                    </label>
                                    <input
                                        className="input form-control form-control-lg"
                                        defaultValue={this.props.event_date}
                                        ref={this.event_dateRef}
                                    />
                                    <br />
                                    <label
                                        className="font-weight-bold"
                                        htmlFor="event description"
                                    >
                                        Events Description
                                    </label>
                                    <textarea
                                        className="textarea form-control form-control-lg"
                                        defaultValue={this.props.description}
                                        ref={this.descriptionRef}
                                        rows="8"
                                    />
                                    <br />
                                    <div
                                        className="btn-toolbar justify-content-between"
                                        role="toolbar"
                                    >
                                        <button
                                            className="btn btn-primary"
                                            onClick={e => this.onSubmit(e)}
                                        >
                                            Submit
                                        </button>

                                        <a
                                            className="btn btn-primary "
                                            href="/admin/events"
                                        >
                                            Back
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
