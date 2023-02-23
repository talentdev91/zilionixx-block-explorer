import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { getBlockDetail } from '../../../../store/actions/block'
import { numberWithCommas } from '../../../../common/utils'

//material-ui
import { List, ListItem, Divider, Grid, Collapse } from '@material-ui/core'

//components
import useStyles from './blockstyle'
import Darktooltip from './Darktooltip'
import { commenthelper } from './overviewhelp'
import { StyledDarkTooltip } from '../../../../Styles'
import Spinner from '../../../../components/Spinner/Spinner'

interface BlockDetailProps {
  getBlockDetail: (blockNumber: any) => void
  block: any
  txnlength: any
  blockReward: any
  loading: any
  blockNumber: any
  lastBlockNumber: any
}

function Overview({
  getBlockDetail,
  block,
  txnlength,
  blockReward,
  loading,
  blockNumber,
  lastBlockNumber,
}: BlockDetailProps) {
  console.log(txnlength)
  React.useEffect(() => {
    getBlockDetail(blockNumber)
  }, [blockNumber, getBlockDetail])

  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const blockCreatedTime = () => {
    const date = new Date(block.timestamp * 1000)
    const year = date.getUTCFullYear()
    const month = date.toLocaleString('default', { month: 'short' })
    const day = date.getUTCDate()
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    const minuteStr = minutes < 10 ? '0' + minutes : minutes
    const seconds = date.getUTCSeconds()
    const timeformat = `(${month}-${day}-${year} ${hours}:${minuteStr}:${seconds} ${ampm} +UTC)`

    return timeformat
  }
  const pastTime = () => {
    const timestampSeconds = Math.round(new Date().getTime() / 1000)
    let differenceSeconds = timestampSeconds - block.timestamp
    differenceSeconds = Number(differenceSeconds)
    const d = Math.floor(differenceSeconds / (3600 * 24))
    const h = Math.floor((differenceSeconds % (3600 * 24)) / 3600)
    const m = Math.floor((differenceSeconds % 3600) / 60)
    const s = Math.floor(differenceSeconds % 60)

    const dDisplay = d > 0 ? d + (d === 1 ? ' day' : ' days') : ''
    const hDisplay = h > 0 ? h + (h === 1 ? ' hour' : ' hours') : ''
    const mDisplay = m > 0 ? m + (m === 1 ? ' minute' : ' minutes') : ''
    const sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : ''
    const differenceTime =
      d > 0
        ? `${dDisplay} ${hDisplay} ago`
        : h > 0
          ? `${hDisplay} ${mDisplay} ago`
          : m > 0
            ? `${mDisplay} ${sDisplay} ago`
            : `${sDisplay} ago`

    return differenceTime
  }

  return (
    <List className={classes.root}>
      {(loading && (
        <div style={{ marginLeft: '45%' }}>
          <Spinner />
        </div>
      )) || (
          <>
            <ListItem className={classes.listItem} alignItems="flex-start">
              <Grid container>
                <Grid item md={3} sm={3} xs={12}>
                  <Darktooltip title={commenthelper.block} placement="top">
                    <span className={classes.question}>
                      <i className="far fa-question-circle"></i>
                    </span>
                  </Darktooltip>
                  &nbsp; Block Height:
                </Grid>
                <Grid item md={9} sm={9} xs={12} className={classes.blockno}>
                  {block.number}
                  <StyledDarkTooltip title="View previous block" placement="top">
                    <Link
                      to={block.number !== 1 ? `/block/${block.number - 1}` : `/block/1`}
                      className={classes.leftarrow}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </Link>
                  </StyledDarkTooltip>
                  <StyledDarkTooltip title="View next block" placement="top">
                    <Link
                      to={block.number !== lastBlockNumber ? `/block/${block.number + 1}` : `/block/${lastBlockNumber}`}
                      className={classes.rightarrow}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </Link>
                  </StyledDarkTooltip>
                </Grid>
              </Grid>
            </ListItem>
            <Divider className={classes.dividers} />
            <ListItem className={classes.listItem} alignItems="flex-start">
              <Grid container>
                <Grid item md={3} sm={3} xs={12}>
                  <Darktooltip title={commenthelper.timestamp} placement="top">
                    <span className={classes.question}>
                      <i className="far fa-question-circle"></i>
                    </span>
                  </Darktooltip>
                  &nbsp;Timestamp:
                </Grid>
                <Grid item md={9} sm={9} xs={12} className={classes.items}>
                  <i className="far fa-clock"></i>
                  &nbsp;
                  {pastTime()}&nbsp;
                  {blockCreatedTime()}
                </Grid>
              </Grid>
            </ListItem>
            <Divider className={classes.dividers} />
            <ListItem className={classes.listItem} alignItems="flex-start">
              <Grid container>
                <Grid item md={3} sm={3} xs={12} style={{ alignSelf: 'center' }}>
                  <Darktooltip title={commenthelper.transaction}>
                    <span className={classes.question}>
                      <i className="far fa-question-circle"></i>
                    </span>
                  </Darktooltip>
                  &nbsp;Transactions:
                </Grid>
                <Grid item md={9} sm={9} xs={12} className={classes.items}>
                  <StyledDarkTooltip title="Click to view transactions" placement="top">
                    <span>
                      {block.transactions ? (
                        block.transactions.length === 1 ? (
                          <Link to={`/txs/${block.number}`} className={classes.transactionCnt}>
                            {block.transactions.length} transaction
                          </Link>
                        ) : block.transactions.length > 1 ? (
                          <Link to={`/txs/${block.number}`} className={classes.transactionCnt}>
                            {block.transactions.length} transactions
                          </Link>
                        ) : (
                          '0 transaction'
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </StyledDarkTooltip>
                  &nbsp;and&nbsp;
                  <StyledDarkTooltip title="Click to view Internal Transactions" placement="top">
                    <span>
                      {txnlength === 1 ? (
                        <Link to={`/txs/${block.number}`} className={classes.transactionCnt}>
                          {txnlength} contract internal transaction
                        </Link>
                      ) : txnlength > 1 ? (
                        <Link to={`/txs/${block.number}`} className={classes.transactionCnt}>
                          {txnlength} contract internal transactions
                        </Link>
                      ) : (
                        '0 contract internal transaction'
                      )}
                    </span>
                  </StyledDarkTooltip>
                  in this block
                </Grid>
              </Grid>
            </ListItem>
            <Divider className={classes.dividers} />
            <ListItem className={classes.listItem} alignItems="flex-start">
              <Grid container>
                <Grid item md={3} sm={3} xs={12}>
                  <Darktooltip title={commenthelper.blockreward}>
                    <span className={classes.question}>
                      <i className="far fa-question-circle"></i>
                    </span>
                  </Darktooltip>
                  &nbsp;Block Reward:
                </Grid>
                <Grid item md={9} sm={9} xs={12} className={classes.items}>
                  {blockReward} ZNX
                </Grid>
              </Grid>
            </ListItem>
            <Divider className={classes.dividers} />
            <ListItem className={classes.listItem} alignItems="flex-start">
              <Grid container>
                <Grid item md={3} sm={3} xs={12}>
                  <Darktooltip title={commenthelper.difficulty}>
                    <span className={classes.question}>
                      <i className="far fa-question-circle"></i>
                    </span>
                  </Darktooltip>
                  &nbsp;Difficulty:
                </Grid>
                <Grid item md={9} sm={9} xs={12} className={classes.items}>
                  {block.difficulty}
                </Grid>
              </Grid>
            </ListItem>
            <Divider className={classes.dividers} />
            <ListItem className={classes.listItem} alignItems="flex-start">
              <Grid container>
                <Grid item md={3} sm={3} xs={12}>
                  <Darktooltip title={commenthelper.totaldifficult}>
                    <span className={classes.question}>
                      <i className="far fa-question-circle"></i>
                    </span>
                  </Darktooltip>
                  &nbsp;Total Difficulty:
                </Grid>
                <Grid item md={9} sm={9} xs={12} className={classes.items}>
                  {block.totalDifficulty}
                </Grid>
              </Grid>
            </ListItem>
            <Divider className={classes.dividers} />
            <ListItem className={classes.listItem} alignItems="flex-start">
              <Grid container>
                <Grid item md={3} sm={3} xs={12}>
                  <Darktooltip title={commenthelper.size}>
                    <span className={classes.question}>
                      <i className="far fa-question-circle"></i>
                    </span>
                  </Darktooltip>
                  &nbsp;Size:
                </Grid>
                <Grid item md={9} sm={9} xs={12} className={classes.items}>
                  {numberWithCommas(block.size)} bytes
                </Grid>
              </Grid>
            </ListItem>
            <Divider className={classes.dividers} />
            <ListItem className={classes.listItem} alignItems="flex-start">
              <Grid container>
                <Grid item md={3} sm={3} xs={12}>
                  <Darktooltip title={commenthelper.gasused}>
                    <span className={classes.question}>
                      <i className="far fa-question-circle"></i>
                    </span>
                  </Darktooltip>
                  &nbsp;Gas Used:
                </Grid>
                <Grid item md={9} sm={9} xs={12} className={classes.items}>
                  {numberWithCommas(block.gasUsed)}
                </Grid>
              </Grid>
            </ListItem>
            <Divider className={classes.dividers} />
            <ListItem className={classes.listItem} alignItems="flex-start">
              <Grid container>
                <Grid item md={3} sm={3} xs={12}>
                  <Darktooltip title={commenthelper.extra}>
                    <span className={classes.question}>
                      <i className="far fa-question-circle"></i>
                    </span>
                  </Darktooltip>
                  &nbsp;Extra Data:
                </Grid>
                <Grid item md={9} sm={9} xs={12} className={classes.items}>
                  {block.extraData}
                </Grid>
              </Grid>
            </ListItem>
            <Divider className={classes.dividers} />

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <ListItem className={classes.listItem} alignItems="flex-start">
                <Grid container>
                  <Grid item md={3} sm={3} xs={12}>
                    <Darktooltip title={commenthelper.hash}>
                      <span className={classes.question}>
                        <i className="far fa-question-circle"></i>
                      </span>
                    </Darktooltip>
                    &nbsp;Hash:
                  </Grid>
                  <Grid item md={9} sm={9} xs={12} className={classes.items}>
                    {block.hash}
                  </Grid>
                </Grid>
              </ListItem>
              <Divider className={classes.dividers} />
              <ListItem className={classes.listItem} alignItems="flex-start">
                <Grid container>
                  <Grid item md={3} sm={3} xs={12}>
                    <Darktooltip title={commenthelper.parent}>
                      <span className={classes.question}>
                        <i className="far fa-question-circle"></i>
                      </span>
                    </Darktooltip>
                    &nbsp;Parent Hash:
                  </Grid>
                  <Link to={`/block/${block.parentHash}`} className={classes.link}>
                    <Grid item md={9} sm={9} xs={12} className={classes.items}>
                      {block.parentHash}
                    </Grid>
                  </Link>
                </Grid>
              </ListItem>
              <Divider className={classes.dividers} />
              <ListItem className={classes.listItem} alignItems="flex-start">
                <Grid container>
                  <Grid item md={3} sm={3} xs={12}>
                    <Darktooltip title={commenthelper.sha}>
                      <span className={classes.question}>
                        <i className="far fa-question-circle"></i>
                      </span>
                    </Darktooltip>
                    &nbsp;Sha3Uncles:
                  </Grid>
                  <Grid item md={9} sm={9} xs={12} className={classes.items}>
                    {block.sha3Uncles}
                  </Grid>
                </Grid>
              </ListItem>
              <Divider className={classes.dividers} />
              <ListItem className={classes.listItem} alignItems="flex-start">
                <Grid container>
                  <Grid item md={3} sm={3} xs={12}>
                    <Darktooltip title={commenthelper.nonce}>
                      <span className={classes.question}>
                        <i className="far fa-question-circle"></i>
                      </span>
                    </Darktooltip>
                    &nbsp;Nonce:
                  </Grid>
                  <Grid item md={9} sm={9} xs={12} className={classes.items}>
                    {block.nonce}
                  </Grid>
                </Grid>
              </ListItem>
            </Collapse>
            <ListItem
              onClick={handleExpandClick}
              aria-expanded={expanded}
              className={clsx(classes.expanlist, classes.listItem)}
            >
              <span>Click to see more </span>
              <span
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
              >
                <i className="fas fa-arrow-down"></i>
              </span>
            </ListItem>
          </>
        )}
    </List>
  )
}

const mapStateToProps = (state: AppState) => ({
  block: state.block.block,
  txnlength: state.block.txnlength,
  blockReward: state.block.blockReward,
  loading: state.block.loading,
  lastBlockNumber: state.block.lastBlockNumber,
})
export default connect(mapStateToProps, { getBlockDetail })(Overview)
