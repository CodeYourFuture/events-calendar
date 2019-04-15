import React from "react";
import Event from "./Event.js";
import "../../Style/Event.css";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

class Events extends React.Component {

    state = {
        events: [],
        loading: true,
    };

    updateEvents() {
        this.setState({loading: true});
        this.props.getEvents().then(
            data => {
                this.setState({
                        events: data,
                        loading: false
                    });
            });
    }

    componentDidMount() {
        this.updateEvents();
    }

    render() {
        return (
            <Grid container alignItems="center">
                <Grid item md={2}/>
                <Grid item md={8} xs={12} className="events">
                    {this.state.events.map(function (event, i) {
                        return (
                            <Event
                                key={i}
                                event={event}
                            />
                        );
                    })}
                    {this.state.loading ?
                        <h2 style={{textAlign: "center"}}>Loading...</h2>
                        // <CircularProgress/>
                        : null}
                    {!this.state.loading && this.state.events.length === 0 ?
                        <h2 style={{textAlign: "center"}}>No events found</h2>
                        : null}
                </Grid>
                <Grid item md={2}/>
            </Grid>

        );
    };
}

export default Events;
