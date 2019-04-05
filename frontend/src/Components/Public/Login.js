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
    root: {
        marginTop: '2em',
    },
    githubLogin: {
        backgroundColor: "#bfbfbf",
    }
});
class Login extends React.Component {

    constructor(props){
        super(props);
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.emailRef = React.createRef();
    }
    render() {
        const {classes} = this.props;
        return (
            <Grid container>
                <Grid items md={4} xs={3}/>
                <Grid items md={4} xs={6} style={{textAlign:"left"}}>
                    <Button className={classes.githubLogin} variant="contained" color="primary"
                            href="http://54.36.182.56:3001/auth/github-events">
                        Log in with GitHub
                    </Button>
                </Grid>
                <Grid items md={4} xs={3}/>
            </Grid>
        )
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);