import React from "react";
import "../Style/AddButton.css";


//write function that takes event.target (the form) and returns json
const formToJson = form => {
    const data = new FormData(form).entries();
    const json = Object.assign(...Array.from(data, ([x, y]) => ({ [x]: y })));
    return json;
};

export default class MyForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const json = formToJson(event.target);

        fetch("http://localhost:3001/addingFloaters", {
            method: "POST",
            body: json
        }).then(response => {
            console.log(response);
        });
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
                <br />
                <label htmlFor="firstname">
                    Enter Your First Name{" "}
                </label>
                <input id="username" name="firstname" type="text" />

                <br />
                <label htmlFor="surname">Enter Your Surname </label>
                <input id="surname" name="surname" type="text" />

                <br />
                <label htmlFor="email">Enter your email </label>
                <input id="email" name="email" type="email" />

                <br />
                <button className="button4">Yes Volunteer!</button>
            </form>;
    }
}
