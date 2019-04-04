import React from "react"
import swal from "sweetalert"
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import Filter from "./Filter"
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    textInput: {
        display:"block",
        marginBottom: '2em',
    },
});
class Profile extends React.Component {

    constructor(props){
        super(props);
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.emailRef = React.createRef();
    }
    submitProfile(){
        
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container>
                <Grid items md={4} xs={3}/>
                <Grid items md={4} xs={6} style={{textAlign:"left"}}>
                    <TextField required
                               ref={this.firstNameRef}
                               label="First Name"
                               className={classes.textInput}
                               margin="normal"
                               fullWidth
                               InputLabelProps={{
                                   shrink: true,
                               }}
                    />
                    <TextField required
                               ref={this.lastNameRef}
                               label="Last Name"
                               className={classes.textInput}
                               margin="normal"
                               fullWidth
                               InputLabelProps={{
                                   shrink: true,
                               }}
                    />
                    <TextField required
                               ref={this.emailRef}
                               label="Email"
                               className={classes.textInput}
                               margin="normal"
                               fullWidth
                               InputLabelProps={{
                                   shrink: true,
                               }}
                    />
                    <Filter />
                    <br/><br/>
                    <Button className="logInButton" variant="contained" color="secondary"
                    onClick={this.submitProfileData}>
                        Submit
                    </Button>
                </Grid>
                <Grid items md={4} xs={3}/>
            </Grid>
        )
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);