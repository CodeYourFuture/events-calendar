import React from "react";
import "../Style/Event.css";
import "../Style/Events.css";
import "../Style/AddButton.css";
import Popup from "reactjs-popup";
import MyForm from "./MyForm.js";


const Event = props => {
    return (
        <div className="event">
            <h1>{props.name}</h1>
            <p>Description: {props.description}</p>
            <div>Date: {props.date}</div>
            <div>Floaters: {props.floaters}</div>
            <Popup
                trigger={<button className="button4"> volunteer</button>}
                position="right center"
                modal
            >
                <MyForm />
            </Popup>
        </div>
    );
};

export { Event };
