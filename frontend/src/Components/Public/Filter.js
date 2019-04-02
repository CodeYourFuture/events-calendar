
import React from "react"
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

class Filter extends React.Component{
    state = {
        city: "Any",
    };
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <Grid container alignItems="center">
                <Grid item xs={7} />
                <Grid item xs={4} style={{textAlign: "center"}} >
                    <FormControl>
                        <InputLabel htmlFor="age-simple">City</InputLabel>
                        <Select
                            value={this.state.city}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'city',
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
                </Grid>
            </Grid>
        )
    }
}
export default Filter;