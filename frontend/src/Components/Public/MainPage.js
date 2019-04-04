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

    getEvents = () => {
        return axios.get('/events/api/')
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
                <Events getEvents={this.getEvents}/>
            </div>
        )
    }
}


export default MainPage;
