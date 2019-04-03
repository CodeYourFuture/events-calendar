import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import Hidden from '@material-ui/core/Hidden';

class Header extends React.Component {

    render() {
        return (
                <div className="appHeader">
                    <Grid container alignItems="center">
                        <Grid item md={1} />
                        <Grid item md={2} xs={4} style={{textAlign: "center"}}>
                            <Grid item xs={12}>
                                <Button component={Link} to={"/admin/floaters"}
                                        variant="contained" color="secondary">
                                    <Hidden mdDown>Dashboard</Hidden> &nbsp;
                                    <SettingsIcon/>
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item md={2} />
                        <Grid item md={2} xs={4} style={{textAlign: "center"}}>
                            <Link to="/" style={{textDecoration: "none", textAlign: "center"}}>
                                <h1 className="logo">Events</h1>
                            </Link>
                        </Grid>
                        <Grid item md={2} />
                        <Grid item md={2} xs={4} style={{textAlign: "center"}}>
                            <Button className="logInButton" variant="contained" color="primary">
                                Log In
                            </Button>
                        </Grid>
                    </Grid>
                </div>
        )
    }
}

export default Header;