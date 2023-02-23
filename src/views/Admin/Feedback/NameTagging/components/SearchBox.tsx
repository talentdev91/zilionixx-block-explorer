import React, { useState, useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'

// import './style.css';
import classNames from 'classnames'
import { Button, FormControl, OutlinedInput, TextField, Select, MenuItem } from '@material-ui/core'
import useStyles from './style'

const SearchBox: React.FC = () => {
  const classes = useStyles()
  const [searchText, setSearchText] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
  }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormControl className={classNames(classes.formControl, classes.search)}>
          <TextField
            className={classes.textField}
            placeholder="Search by Address / Txn Hash / Block / Token"
            variant="outlined"
            size="small"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            fullWidth
            InputProps={{
              className: classes.searchInput,
            }}
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary" className={classes.submitBtn}>
          Find
        </Button>
      </form>
    </div>
  )
}

export default SearchBox
