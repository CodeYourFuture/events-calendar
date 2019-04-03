import React from "react"
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class Filter extends React.Component {
    state = {
        chosenCity: "Any",
        cities: ["Any"]
    };
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };
    fetchCities(){// TODO ??
        fetch("/application-process/cities")
            .then(res => res.json())
            .then(data => {
                this.setState({volunteers: data.volunteers});
            });
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
                    <MenuItem value={"London"}>London</MenuItem>
                    <MenuItem value={"Glasgow"}>Glasgow</MenuItem>
                    <MenuItem value={"Rome"}>Rome</MenuItem>
                </Select>
            </FormControl>
        )
    }
}

export default Filter;