import React from "react";
import "../../Style/MainPage.css";
import "../../Style/Header.css";

import moment from "moment/moment";
import Events from "./Events"
import Header from "./Header"
import Filter from "./Filter"

class MainPage extends React.Component {


    fetchEvents = () => {
        return fetch("/events/api/")
            .then(res => res.json())
            .then(data => {
                let sortedEvents = data.events;
                sortedEvents.sort((a, b) => {
                    return moment(b.date).diff(moment(a.date));
                });
                return sortedEvents;
            });
    };

    render() {
        return (
            <div className=" ">
                <Header />

                <Filter />
                <Events fetchEvents={this.fetchEvents}/>

            </div>
        )
    }
}


export default MainPage;
