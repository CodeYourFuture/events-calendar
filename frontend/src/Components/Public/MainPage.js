import React from "react";
import "../../Style/Header.css";

import moment from "moment/moment";
import Events from "./Events"
import Header from "./Header"
import Filter from "./Filter"
import Grid from '@material-ui/core/Grid';

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
            <div>
                <Grid container>
                    <Grid item md={8} xs={9}/>
                    <Grid item xs={2} style={{textAlign: "right"}}>
                        <Filter/>
                    </Grid>
                </Grid>
                <Events fetchEvents={this.fetchEvents}/>
            </div>
        )
    }
}


export default MainPage;
