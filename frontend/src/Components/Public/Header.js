import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Hidden from '@material-ui/core/Hidden';
import { withRouter } from 'react-router'
import AuthService from '../Services/AuthService'

class Header extends React.Component {

    forwardLogout(){
        AuthService.logout();
        window.location.reload();
    }

    render() {
        return (
                <div className="appHeader">
                    <Grid container alignItems="center">
                        <Grid item md={1} />
                        <Grid item md={2} xs={3} style={{textAlign: "center"}}>
                                { AuthService.loggedIn() ?
                                    <Button component={Link} to={"/admin/floaters"}
                                        variant="contained" color="secondary">
                                    <Hidden mdDown>Dashboard &nbsp;</Hidden>
                                    <SettingsIcon/>
                                    </Button> : null}
                        </Grid>
                        <Grid item md={2} xs={3}>
                            { AuthService.loggedIn() ?
                                <Button className="logInButton" variant="contained" color="primary"
                                        component={Link} to="/profile">
                                    <Hidden mdDown>Profile &nbsp;</Hidden>
                                    <AccountCircleIcon/>
                                </Button>
                                : null}
                        </Grid>
                        <Grid item md={2} xs={3} style={{textAlign: "center"}}>
                            <Link to="/" style={{textDecoration: "none", textAlign: "center"}}>
                                <h1 className="logo">Events</h1>
                            </Link>
                        </Grid>
                        <Grid item md={2} />
                        <Grid item md={2} xs={3} style={{textAlign: "center"}}>
                            {!AuthService.loggedIn() ?
                                <Button className="logInButton" variant="contained" color="primary"
                                    component={Link} to="/login">
                                    <Hidden mdDown>Log In &nbsp;</Hidden>
                                    <LockOpenIcon/>
                                </Button>
                                : <Button variant="contained" color="primary"
                                          onClick={this.forwardLogout}>
                                    <Hidden mdDown>Log Out &nbsp;</Hidden>
                                    <PowerSettingsNewIcon/>
                                </Button> }
                        </Grid>
                    </Grid>
                </div>
        )
    }
}

export default withRouter(Header);