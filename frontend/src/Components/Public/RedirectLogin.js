import React, { Component } from 'react';
import AuthService from '../Services/AuthService';

class RedirectLogIn extends Component {

    // state = {
    //     admin: false,
    // };
    constructor(props) {
        super(props);
    }

    async UNSAFE_componentWillMount() {
        if (this.props.match.params.admin === 'true') {
            // this.setState({
            //     admin: true,
            // });
        }
        if (this.props.match.params.token) {
            await AuthService.setToken(this.props.match.params.token);
            // await window.location.reload(true);
        }
        if (AuthService.loggedIn()) this.props.history.replace('/');
    }
    render() {
        // const { notAdmin, msg } = this.state;
        return (
            <div className="sign-in">
                {/*{notAdmin && <p className="error">{msg}</p>}*/}
            </div>
        );
    }
}

export default RedirectLogIn;
