import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./Components/Public/MainPage";
import Floaters from "./Components/Admin/Floaters.js";
import AdminForm from "./Components/Admin/AdminForm";
import Header from "./Components/Public/Header"
import Profile from "./Components/Public/Profile"
import moment from "moment";
moment.locale("en");

class App extends Component {

    componentDidMount() {
    }
    //let the child components handle the update instead of using stale props
    fetchEvents = () => {
        return fetch("/events/api/")
            .then(res => res.json())
            .then(data => {
                let sortedEvents = data.events;
                sortedEvents.sort((a, b) => {
                    return moment(b.date).diff(moment(a.date));
                });
                return sortedEvents;
            });
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />

                        <Route exact path="/" component={MainPage} />

                        <Route path="/profile" component={Profile} />
                        <Route
                            exact
                            path="/admin/floaters/:id?"
                            render={() => <Floaters />}
                        />
                        <Route path="/admin/events/add" component={AdminForm} />
                        <Route
                            path="/admin/event/:id?"
                            component={AdminForm}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
