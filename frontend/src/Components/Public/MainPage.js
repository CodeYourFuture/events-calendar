import React from "react";
import "../../Style/Header.css";

import moment from "moment/moment";
import Events from "./Events"
import Header from "./Header"
import Filter from "./Filter"
import swal from "sweetalert"
import axios from "axios"
import Grid from '@material-ui/core/Grid';

class MainPage extends React.Component {

    constructor(props){
        super(props);
        this.cityRef = React.createRef();
        this.eventsRef = React.createRef();
    }

    triggerEventsUpdate = () => {
        if(this.eventsRef.current)
            this.eventsRef.current.updateEvents();
    };

    getEvents = () => {
        console.log("Fetching events for "+this.cityRef.current.state.chosenCity);
        return axios.get('/events/api/get-all/'+this.cityRef.current.state.chosenCity)
            .then(response => {
                let sortedEvents = response.data.events;
                sortedEvents.sort((a, b) => {
                    return moment(b.date).diff(moment(a.date));
                });
                return sortedEvents;
            })
            .catch(function (error) {
                swal("Error","Could not fetch events list", "error");
                console.error(error);
                return [];
            })
    };

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item md={8} xs={9}/>
                    <Grid item xs={2} style={{textAlign: "right"}}>
                        <Filter ref={this.cityRef} updateEvents={this.triggerEventsUpdate} />
                    </Grid>
                </Grid>
                <Events ref={this.eventsRef} getEvents={this.getEvents}/>
            </div>
        )
    }
}


export default MainPage;
