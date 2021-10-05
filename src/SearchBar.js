import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'

import React from 'react'

const SearchBar = props => {
    return (
        <Autocomplete
                id="roller-coaster-search"
                options={props.list}
                getOptionLabel = {(option => option.rollerCoasterName)}
                style= {{ width : 300}}
                renderInput={(params) => (<TextField {...params} label="Combo box" variant="outlined" />
                )}
            />
    )
}

export default SearchBar
