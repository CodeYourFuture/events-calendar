import React from "react";
import Message from "../../Message/Message";

export default class EditFloater extends React.Component {
    state = {
        floater_fname: "",
        floater_surname: "",
        floater_email: "",
        message: false
    };
    constructor(props) {
        super(props);
        this.floater_fnameRef = React.createRef();
        this.floater_surnameRef = React.createRef();
        this.floater_emailRef = React.createRef();
    }

    onSubmit = event => {
        event.preventDefault();
        const body = {
            floater_fname: this.floater_fnameRef.current.value,
            floater_surname: this.floater_surnameRef.current.value,
            floater_email: this.floater_emailRef.current.value
        };
     
        fetch("/api/mentors/" + this.props.floater_id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "put",
            body: JSON.stringify(body)
        })
            .then(() => {
                this.floater_fnameRef.current.value = "";
                this.floater_surnameRef.current.value = "";
                this.floater_emailRef.current.value = "";
                this.setState({ message: true });
                this.props.history.push("/api/mentors");
                console.log(this.props);
            })
            .catch(error => console.error(error));
    };

    render() {
        return (
            <div className="container mt-2">
                <Message
                    show={this.state.message}
                    status="success"
                    message="Floater Has Been Edited"
                />
                <h1 className="text-center mb-3 text-dark">
                    Editing this Floater's Details
                </h1>
                <form>
                    <div className="form-group">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <br />
                                    <label
                                        className="font-weight-bold text-dark"
                                        htmlFor="event name"
                                    >
                                        First Name
                                    </label>

                                    <input
                                        className="input form-control form-control-lg"
                                        defaultValue={this.props.floater_fname}
                                        ref={this.floater_fnameRef}
                                    />
                                    <br />
                                    <label
                                        className="font-weight-bold text-dark"
                                        htmlFor="event date"
                                    >
                                        Surname
                                    </label>
                                    <input
                                        className="input form-control form-control-lg"
                                        defaultValue={
                                            this.props.floater_surname
                                        }
                                        ref={this.floater_surnameRef}
                                    />
                                    <br />
                                    <label
                                        className="font-weight-bold text-dark"
                                        htmlFor="event description"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="textarea form-control form-control-lg"
                                        defaultValue={this.props.floater_email}
                                        ref={this.floater_emailRef}
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
                                            href="/admin/floaters"
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
