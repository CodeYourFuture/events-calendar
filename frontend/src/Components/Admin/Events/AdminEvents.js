import React from "react";
import Event from "../../Public/Event.js";
import Popup from "reactjs-popup";
import Form from "./AdminForm";
import "../../../Style/Event.css";
import EditForm from "./EditEvent.js";
import FloatersOfEvents from "../Floaters/FloatersOfEvent.js";
import VolunteerForm from "../Floaters/FloaterToVolunteer";

const Adminevents = props => {
    return (
        <div className="events">
            <div className="dummyDiv" />
            <div className="fixed-top card headerEvents  mt=0 pt-3 pb-3">
                <h1 className="myHeader ml-5 ">Events</h1>
                <Popup
                    trigger={
                        <button className="btn btn-outline-primary mb-2 ml-2 sideButton mr-5 ">
                            add a new event
                        </button>
                    }
                    position="right center"
                    modal
                >
                    <Form name={props.name} />
                </Popup>
                <a href="/admin">
                    <button className="btn btn-outline-primary ml-2 mb-2 sideButton">
                        Back
                    </button>
                </a>
            </div>
            {props.events.map(function (event, i) {
                return (
                    <div className="event" key={i}>
                        <Event
                            key={i}
                            name={event.lesson}
                            description={event.description}
                            date={event.date}
                            event_id={event.event_id}
                        />
                        <FloatersOfEvents id={event.event_id} />
                        <Popup
                            trigger={
                                <button
                                    type="button"
                                    className="btn btn-outline-primary mr-4 mb-2 mt-4"
                                >
                                    volunteer
                                </button>
                            }
                            position="right center"
                            modal
                        >
                            <VolunteerForm event_id={event.event_id} />
                        </Popup>
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
                                name={props.name}
                                lesson={event.lesson}
                                event_date={event.date}
                                description={event.description}
                                id={event.event_id}
                            />
                        </Popup>
                        <button
                            className="btn btn-danger  mr-4 mb-2 mt-4"
                            onClick={function () {
                                props.deleteEvent(event.event_id);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Adminevents;
