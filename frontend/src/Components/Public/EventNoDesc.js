import React from "react";
import moment from "moment";
import "../../Style/Event.css";
import "../../Style/Events.css";

const EventNoDesc = props => {
    return (
        <span>
            <h1>{props.name}</h1>
            <div>Date: {moment(props.date).format("Do MMMM  YYYY")}</div>
        </span>
    );
};

export default EventNoDesc;
