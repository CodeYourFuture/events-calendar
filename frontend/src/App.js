import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./Components/Public/MainPage";
import Floaters from "./Components/Admin/Floaters.js";
import AdminForm from "./Components/Admin/AdminForm";
import Header from "./Components/Public/Header"
import Profile from "./Components/Public/Profile"
import RedirectLogin from "./Components/Public/RedirectLogin"
import Login from "./Components/Public/Login"


import moment from "moment";
moment.locale("en");

class App extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />

                        <Route exact path="/" component={MainPage} />

                        <Route path="/profile" render={() => <Profile />} />
                        <Route
                            exact
                            path="/admin/floaters/:id?"
                            render={(props) => <Floaters {...props} />}
                        />
                        <Route path="/admin/events/add" component={AdminForm} />
                        <Route
                            path="/admin/event/:id?"
                            component={AdminForm}
                        />
                        <Route path="/login" render={() => <Login />} />
                        <Route path="/log-in/:token/:admin?" component={RedirectLogin} />

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
