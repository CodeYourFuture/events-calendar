import React from "react"
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import swal from "sweetalert"
import axios from "axios"

class Filter extends React.Component {
    state = {
        chosenCity: localStorage.getItem('city') || "Any",
        cities: []
    };
    handleChange = event => {
        this.setState({chosenCity: event.target.value},
            () => {
                if(this.props.updateEvents)
                    this.props.updateEvents(event.target.value);
            }
        );
    };
    componentDidMount(){
        this.fetchCities();
    }
    fetchCities(){
        axios.get("/events/api/cities")
            .then(response => {
                this.setState({cities: response.data.cities});
            })
            .catch(error => {
                swal("Error", "Could not fetch cities", "error");
                console.error(error);
            })
    }

    render() {
        return (
            <FormControl style={{minWidth: "5em"}}>
                <InputLabel htmlFor="cityFilter">City</InputLabel>
                <Select
                    value={this.state.chosenCity}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'chosenCity',
                        id: 'cityFilter',
                    }}
                >
                    <MenuItem value="Any">
                        <em>Any</em>
                    </MenuItem>
                    {this.state.cities.map(city =>
                        <MenuItem key={city.name} value={city.name}>{city.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
        )
    }
}

export default Filter;