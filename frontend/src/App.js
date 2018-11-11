import React, { Component } from "react";
import "./Style/App.css";
import Events from "./Components/Events.js";
import Form from "./Components/Admin/Admin-form.js";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./Components/Admin/admin.js";
import AdminEvents from "./Components/Admin/Admin_events.js";
import FloaterForm from "./Components/Floaters/FloaterForm";
import mainPage from "./Components/MainPage";
import Navigation from "./Components/Navigation";

class App extends Component {
    state = {
        events: [],
        mentors: []
    };

    componentDidMount() {
        fetch("/events")
            .then(res => res.json())
            .then(data => {
                this.setState({ events: data });
            });

        fetch("/mentors")
            .then(res => res.json())
            .then(data => {
                this.setState({ mentors: data });
            });
    }

    render() {
        return (
            <div>
                <Navigation />
                <BrowserRouter>
                    <div>
                        <Route
                            exact
                            path="/events"
                            render={() => <Events events={this.state.events} />}
                        />
                        <Route exact path="/" component={mainPage} />
                        <Route path="/event/:id" component={Events} />
                        <Route exact path="/admin" component={Admin} />
                        <Route path="/admin/events/add" component={Form} />
                        <Route
                            path="/admin/floaters/add"
                            component={FloaterForm}
                        />
                        <Route
                            exact
                            path="/admin/events"
                            render={() => (
                                <AdminEvents events={this.state.events} />
                            )}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
