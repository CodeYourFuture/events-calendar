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
            <p>3.time: {props.time}</p>
            <p>4.address; {props.address}</p>
            <p>5.Country: {props.country}</p>
            <p>6.City: {props.city}</p>
            <p>7.syllabusUrl: {props.syllabusUrl}</p>
            <p>8.volunteers: {props.volunteers}</p>
            <p>9.numVolunteersNeeded: {props.numVolunteersNeeded}</p>
        </span>
    );
};

export default Event;
