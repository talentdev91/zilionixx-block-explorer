import React, { useState } from 'react'
import { StyledPendingSearchBtn } from '../TableStyle'
// import './style.css';
import { Button, Grid, List, ListItem } from '@material-ui/core'
import { useStyles, StyledPopover } from './style'
import { Link } from 'react-router-dom'
import icon from '../../../../assets/images/tokens/1.png'
import { AppState } from '../../../../store/configureStore'
import { connect } from 'react-redux'
import { getErc20TokensKeyword } from '../../../../store/actions/token'

interface SearchBoxProps {
  getErc20TokensKeyword: (keyword: any) => void
  erc20tokensKeyword: any
}
const SearchBox: React.FC<SearchBoxProps> = ({ getErc20TokensKeyword, erc20tokensKeyword }) => {
  const classes = useStyles()
  const [queryString, setQueryString] = useState('')
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    setQueryString(e.currentTarget.value as string)
  }

  React.useEffect(() => {
    getErc20TokensKeyword(queryString)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryString])
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
              placeholder="Search for Token Name or Address"
              value={queryString}
              onChange={handleInput}
            />
            <Button
              href={`/tokens?q=${queryString}`}
              variant="contained"
              color="primary"
              className={classes.submitBtn}
              disableRipple
            >
              Find
            </Button>
          </div>
        </div>

        {erc20tokensKeyword !== undefined && erc20tokensKeyword.length > 0 ? (
          <div className={classes.listPaper}>
            <Grid container>
              <Grid item xs={12} className={classes.listHeader}>
                <div className={classes.listHeaderText}>Tokens (BEP 721)</div>
              </Grid>
              <Grid item xs={12}>
                <List className={classes.itemList}>
                  {erc20tokensKeyword.map((data: any, index: any) => (
                    <ListItem className={classes.item} key={index}>
                      <Link to={`/token/${data.address}`} className={classes.linkItem}>
                        <div>
                          <img src={icon} className={classes.tokenIcon} alt="icon"></img>
                        </div>
                        <div className={classes.tokenDescription}>
                          <div className={classes.tokenDescriptionTop}>
                            <div className={classes.textTruncate}>{data.name}</div>
                            <span className={classes.tokenBadge}>$1.00</span>
                            <i className={'fas fa-check-circle'}></i>
                          </div>
                          <span className={classes.tokenDescriptionBottom}>{data.address}</span>
                          <div className={classes.tokenDescriptionBottom}>https://www.paxos.com/busd/</div>
                        </div>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </div>
        ) : (
          <div></div>
        )}
      </StyledPopover>
    </div>
  )
}
const mapStateToProps = (state: AppState) => ({
  erc20tokensKeyword: state.token.erc20tokensKeyword,
})
export default connect(mapStateToProps, { getErc20TokensKeyword })(SearchBox)
