import React from "react";
import Event from "./Event.js";
import "../../Style/Event.css";
import Grid from '@material-ui/core/Grid';

class Events extends React.Component {

    state = {
        events: []
    };


    componentDidMount() {
        this.props.getEvents().then(
            data => {this.setState({
                events: data });
            //TODO: add a field to mark those you've volunteered for
            });
    }
    render(){
        return (
            <Grid container alignItems="center" >
                <Grid item md={2} />
                <Grid item md={8} xs={12} className="events">
                    {this.state.events.map(function(event, i) {
                        return (
                            <Event
                                key={i}
                                event={event}
                            />
                        );
                    })}
                </Grid>
                <Grid item md={2} />
            </Grid>

        );
    };
}

export default Events;
