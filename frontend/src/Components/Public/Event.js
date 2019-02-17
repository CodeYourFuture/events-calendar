import React from "react";
import moment from "moment";
import "../../Style/Event.css";
import "../../Style/Events.css";

const Event = props => {
    return (
        <span>
            <h1>{props.name}</h1>
            <p>Description: {props.description}</p>
            <div>Date: {moment(props.date).format("Do MMMM  YYYY")}</div>
            <p>{props.time}</p>

        </span>
    );
};

export default Event;
