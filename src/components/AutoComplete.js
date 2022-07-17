/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import _ from 'lodash'

export default function AutocompleteBox(props) {
    const { options, handleSelected } = props;
 
    const handleChange = (value) => {
        const name = _.get(value, 'title', '')
        handleSelected(name)
    }
  return (
    <Autocomplete
      id="combo-box-autocomplete"
      options={options}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Name" variant="outlined" />}
      onChange={(event, values)=> handleChange(values)}
    />
  );
}

 