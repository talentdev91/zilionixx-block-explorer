import React, { useState } from 'react'
import { StyledPendingSearchBtn } from './style'
// import './style.css';
import { Button } from '@material-ui/core'
import { useStyles, StyledPopover } from './style'
import { useParams } from 'react-router'
interface SearchBoxProps {
  placeholder: any
}
const SearchBox: React.FC<SearchBoxProps> = ({ placeholder }) => {
  const classes = useStyles()
  const { tokenAddress } = useParams<{ tokenAddress?: string }>()
  const [queryString, setQueryString] = useState('')
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    setQueryString(e.target.value)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  return (
    <div className={classes.root}>
      <StyledPendingSearchBtn aria-describedby={id} variant="contained" onClick={handleClick} disableRipple>
        <i className="fa fa-search" style={{ fontSize: 12, color: 'white' }}></i>
      </StyledPendingSearchBtn>
      <StyledPopover
        elevation={0}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className={classes.paper}>
          <div className={classes.form}>
            <input
              className={classes.textField}
              placeholder={placeholder}
              value={queryString}
              onChange={handleInput}
            />
            <Button
              href={`/token/${tokenAddress}?a=${queryString}`}
              variant="contained"
              color="primary"
              className={classes.submitBtn}
              disableRipple
            >
              Find
            </Button>
          </div>
        </div>
      </StyledPopover>
    </div>
  )
}
export default SearchBox
