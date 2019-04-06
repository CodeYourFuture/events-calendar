import React from "react"
import swal from "sweetalert"
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import Filter from "./Filter"
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import axios from "axios";
import AuthService from "../Services/AuthService"

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
        this.cityRef = React.createRef();
    }
    componentDidMount() {
        this.getProfileData();
    }
    setFormData = (user) => {
        this.firstNameRef.current.value = user.firstName || "";
        this.lastNameRef.current.value = user.lastName || "";
        this.emailRef.current.value = user.email || "";
        this.cityRef.current.setState({ chosenCity: user.city || "Any"});
    };
    getProfileData(){
        axios.get("/events/api/user/"+AuthService.getProfile().id)
            .then(response => {
                this.setFormData(response.data.admin);
                this.setState({_id: response.data.admin._id});
            })
            .catch(error => {
                swal("Error", "Failed to fetch profile data", "error");
                console.error(error);
            })
    }
    submitProfileData = () => {
        let body = {
            _id: this.state._id,
            adminData: {
                firstName: this.firstNameRef.current.value,
                lastName: this.lastNameRef.current.value,
                email: this.emailRef.current.value,
                city: this.cityRef.current.state.chosenCity,
            }
        };
        axios.put("/events/api/user", body,
        ).then(response => {
            this.setFormData(response.data.admin);
            swal("Success", "Profile updated successfully", "success");
        }).catch(error => {
            swal("Error", "Failed to update profile", "error");
            console.error(error);
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <Grid container>
                <Grid item md={4} xs={3}/>
                <Grid item md={4} xs={6} style={{textAlign:"left"}}>
                    <TextField required
                               inputRef={this.firstNameRef}
                               label="First Name"
                               className={classes.textInput}
                               margin="normal"
                               fullWidth
                               InputLabelProps={{
                                   shrink: true,
                               }}
                    />
                    <TextField required
                               inputRef={this.lastNameRef}
                               label="Last Name"
                               className={classes.textInput}
                               margin="normal"
                               fullWidth
                               InputLabelProps={{
                                   shrink: true,
                               }}
                    />
                    <TextField required
                               inputRef={this.emailRef}
                               label="Email"
                               className={classes.textInput}
                               margin="normal"
                               fullWidth
                               InputLabelProps={{
                                   shrink: true,
                               }}
                    />
                    <Filter ref={this.cityRef} />
                    {/*TODO add userKind*/}
                    <br/><br/>
                    <Button className="logInButton" variant="contained" color="secondary"
                    onClick={this.submitProfileData}>
                        Submit
                    </Button>
                </Grid>
                <Grid item md={4} xs={3}/>
            </Grid>
        )
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);