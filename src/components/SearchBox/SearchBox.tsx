import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { connect } from 'react-redux'
import { getSearchreResults } from '../../store/actions/search'

import { Button, FormControl, NativeSelect } from '@material-ui/core'
import { useStyles, SearchInput, SearchSelect } from './style'

interface ViewSearchProps {
  getSearchreResults: (searchIndex: any) => void
}

function SearchBox({ getSearchreResults }: ViewSearchProps) {
  const classes = useStyles()

  const fields = ['All Filters', 'Addresses', 'Tokens', 'Name Tags', 'Labels', 'Websites']
  const [searchBy, setSearchBy] = useState('All Filters')
  const [searchIndex, setsearchIndex] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    getSearchreResults(searchIndex)
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <FormControl className={classes.selectForm}>
        <NativeSelect
          IconComponent={KeyboardArrowDownIcon}
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value as string)}
          input={<SearchSelect />}
          classes={{
            icon: classes.iconType,
          }}
        >
          {fields.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.inputForm}>
        <SearchInput
          placeholder="Search by Address / Txn Hash / Block / Token"
          value={searchIndex}
          onChange={(e) => setsearchIndex(e.target.value)}
        />
      </FormControl>
      <Button type="submit" variant="contained" className={classes.submitBtn} disableRipple>
        <i className="fa fa-search"></i>
      </Button>
    </form>
  )
}

export default connect(null, { getSearchreResults })(SearchBox)
