import React from "react";
import moment from "moment";
import "../../Style/Event.css";
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Hidden from '@material-ui/core/Hidden'
import {Link} from 'react-router-dom'
import AuthService from "../Services/AuthService"

import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import swal from "sweetalert";
import axios from "axios/index";

const styles = theme => ({
    gridItem: {
        textAlign: "center",
    }
});

class Event extends React.Component {

    state = {
        numVolunteersNeeded: this.props.event.numVolunteersNeeded,
        volunteersCount: this.props.event.volunteersCount,
        isVolunteering: this.props.event.isVolunteering || false,
    };

    constructor(props) {
        super(props);
    }

    volunteerSlotsLeft(){
        return Math.max(0,this.state.numVolunteersNeeded - this.state.volunteersCount);
    }

    getVolunteerCount() {
        axios.get("/events/api/get-volunteer-count/" + this.props.event._id)
            .then(response => {
                this.setState({
                    volunteersCount: response.data.count,
                })
            })
            .catch(error => {
                swal("Error", "Failed to get volunteers count", "error");
                console.error(error);
            })
    }

    submitVolunteer(event) {
        event.stopPropagation();
        if (this.state.isVolunteering) {
            axios.delete("/events/api/remove-volunteer/" + this.props.event._id,
                        {data: {userId: AuthService.getProfile().id}}
                        )
                .then(response => {
                    this.getVolunteerCount();
                    this.setState({isVolunteering: false})
                })
                .catch(error => {
                    swal("Error", "Could not remove volunteer", "error");
                    console.error(error);
                });
        }
        else {
            axios.post("/events/api/add-volunteer/" + this.props.event._id,
                {userId: AuthService.getProfile().id}
            )
                .then(response => {
                    this.getVolunteerCount();
                    this.setState({isVolunteering: true})
                })
                .catch(error => {
                    swal("Error", "Could not remove volunteer", "error");
                    console.error(error);
                });
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <ExpansionPanel style={{marginBottom: "1em"}}>

                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Grid container alignItems="center" spacing={24}>
                        <Grid item xs={3} className={classes.gridItem}>
                            <h5 className="mt-2">
                                {moment(this.props.event.date).format("Do MMMM  YYYY")}
                            </h5>
                        </Grid>
                        <Grid item xs={6} className={classes.gridItem}>
                            <h2 className="font-weight-bold">{this.props.event.name}</h2>
                            <p className="mt-2">
                                <strong>{this.volunteerSlotsLeft()}</strong> more volunteers
                                needed
                            </p>
                        </Grid>

                        <Grid item xs={3} className=" ">
                            {!AuthService.loggedIn() ? null : !this.state.isVolunteering ?
                                <Button variant="contained" color="primary"
                                        onClick={e => this.submitVolunteer(e)}>
                                    <Hidden mdDown>Volunteer &nbsp;</Hidden>
                                    <AddIcon/>
                                </Button> :
                                <Button variant="contained" color="primary"
                                        onClick={e => this.submitVolunteer(e)}>
                                    <Hidden mdDown>Withdraw &nbsp; &nbsp;</Hidden>
                                    <RemoveIcon/>
                                </Button>}
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <Grid container alignItems="center" spacing={24}>
                        <Grid item xs={3} className={classes.gridItem}>
                            <p>Time: {this.props.event.time} </p>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={3} className={classes.gridItem}>
                            {/*<p style={{marginBottom: "0"}}>Address: </p>*/}
                            <a href={"https://www.google.com/maps/search/?api=1&query=" +
                            encodeURI(this.props.event.city + ", " + this.props.event.address)
                            } target="_blank"> {this.props.event.city + ", " + this.props.event.address}</a>
                        </Grid>
                        <Grid item xs={1}/>

                        <Grid item xs={3} className={classes.gridItem}>
                            <a
                                href={this.props.event.syllabusUrl} target="_blank">Syllabus
                            </a>
                        </Grid>
                        <Grid item xs={12} style={{textAlign: "justify"}}>
                            {this.props.event.description ?
                                <p className="eventDescription">{this.props.event.description}</p>
                                : <p> No description provided </p>}
                        </Grid>
                        {AuthService.loggedIn() && AuthService.isAdmin() ?
                            <Grid item xs={12} className={classes.gridItem}>
                                <Button component={Link} to={"/admin/event/" + this.props.event._id}
                                        variant="contained" color="secondary">
                                    Details &nbsp;
                                    <EditIcon/>
                                </Button>
                            </Grid> : null}
                        {AuthService.loggedIn() && AuthService.isAdmin() ?
                            <Grid item xs={12} className={classes.gridItem}>
                                <Button component={Link} to={"/admin/floaters/" + this.props.event._id}
                                        variant="contained" color="secondary">
                                    Volunteers &nbsp;
                                    <EditIcon/>
                                </Button>
                            </Grid> : null}
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

Event.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Event);