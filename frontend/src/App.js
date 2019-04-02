import React, { Component } from "react";
import "./Style/App.css";
import Events from "./Components/Public/Events.js";
import Form from "./Components/Admin/Events/AdminForm.js";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin.js";
import AdminEvents from "./Components/Admin/Events/AdminEvents.js";
import FloaterForm from "./Components/Admin/Floaters/FloaterForm";
import MainPage from "./Components/Public/MainPage";
import Floaters from "./Components/Admin/Floaters/Floaters.js";
import AdminForm from "./Components/Admin/Events/AdminForm";
import AdminSingleEvent from "./Components/Admin/Events/AdminSingleEvent";
import AddToVolunteerList from "./Components/Public/AddToVolunteerList.js";
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
                        <Route exact path="/" component={MainPage} />

                        <Route path="/admin/events/add" component={Form} />
                        <Route
                            path="/admin/floaters/add"
                            component={FloaterForm}
                        />
                        <Route
                            path="/admin/floaters/addToList"
                            component={AddToVolunteerList}
                        />
                        <Route
                            exact
                            path="/admin/events"
                            render={() => (
                                <AdminEvents
                                    // deleteEvent={this.toDelete}
                                    fetchEvents={this.fetchEvents}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/admin/floaters"
                            render={() => <Floaters />}
                        />
                        { <Route
                            path="/admin/event/:id"
                            component={AdminForm}
                        /> }
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
