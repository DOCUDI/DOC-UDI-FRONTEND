import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CityDropdown = props => {
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
    props.onSelectCity(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, borderRadius: 2, zIndex:2000}}>
        <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={city}
          label="City"
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={"Agra"}>Agra</MenuItem>
          <MenuItem value={"Lucknow"}>Lucknow</MenuItem>
          <MenuItem value={"Kolkata"}>Kolkata</MenuItem>
          <MenuItem value={"Delhi"}>Delhi</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default CityDropdown;
