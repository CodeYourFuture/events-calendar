import React from "react";
import Popup from "reactjs-popup";
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
    root:{
        marginTop: '1em',
    },
    head:{
        // backgroundColor: "#e1f4ef",
        color: "#FFFFFF",
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#e5ffff",
        }
    },
});

class Floaters extends React.Component {
    state = {
        volunteers: [],
        eventId : undefined,
    };

    getMentors = () => {
        if(!this.state.eventId) {// no event selected, show general list
            fetch("/events/api/volunteers")
                .then(res => res.json())
                .then(data => {
                    this.setState({volunteers: data.volunteers});
                });
        }
        else{// show list for event
            fetch("/events/api/volunteers/"+this.state.eventId)
                .then(res => res.json())
                .then(data => {
                    this.setState({volunteers: data.volunteers});
                });
        }
    };

    componentDidMount() {
        if(this.props.match && this.props.match.params.id)
            this.setState({eventId: this.props.match.params.id})
        this.getMentors();
    }

    removeFloater = id => {
        fetch("/events/api/volunteers/" + id, {
            method: "delete"
        })
            .then(response => {
                this.getMentors();
            })
            .catch(error => console.error(error));
    };

    render() {
        const {classes} = this.props;
        return (
            <Grid container className={classes.root}>
                <Grid item md={1}/>
                <Grid item md={10} xs={12}>
                    <Table>
                        <TableHead>
                            <TableRow className={classes.head}>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Email</TableCell>
                                {/*<TableCell> </TableCell>
                                <TableCell> </TableCell>*/}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.volunteers.map(vol => (
                                <TableRow key={vol._id} className={classes.row}>
                                    <TableCell>{vol.firstName}</TableCell>
                                    <TableCell>{vol.lastName}</TableCell>
                                    <TableCell>{vol.email}</TableCell>
                                    {/*<TableCell>
                                        <Button variant="contained" color="primary">
                                            <EditIcon/>
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary"
                                         onClick={() => this.removeFloater(vol._id)}>
                                            <CancelIcon/>
                                        </Button>
                                    </TableCell>*/}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
                <Grid item md={1}/>
            </Grid>
        )
    }
}
Floaters.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Floaters);