import React, { useEffect } from 'react'
import clsx from 'clsx'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import Dropdown from './popper'
import copy from 'copy-text-to-clipboard'
//material-ui
import {
  Grid,
  Typography,
  Divider,
  ListItem,
  Collapse,
  Box,
  TextareaAutosize,
  Button,
  TableContainer,
  TableBody,
  TableRow,
  TableHead,
  Table,
} from '@material-ui/core'
import { isEmptyObject } from '../../../common/utils'
//components
import { StyledDarkTooltip, StyledLink } from '../../../Styles'
import { IconTooltip } from '../../Resource/TopStatistics/components/ViewPanel/PanelBody/PanelItem'
import { useStyles, StyledTableCell } from '../Style'
import { StyledRibbon } from '../../Home/components/style'
import { getOneTxnNote, createTxnNote, deleteTxnNote, editTxnNote } from '../../../store/actions/user'

const LeftContent: React.FC<{ title: any; tooltipContent: any }> = ({ title, tooltipContent }) => {
  const classes = useStyles()
  return (
    <>
      <StyledDarkTooltip title={tooltipContent} arrow placement="top">
        <i className={classnames(classes.helpIcon, 'far fa-question-circle')} style={{ marginRight: '4px' }} />
      </StyledDarkTooltip>
      <Typography className={classes.transactionStyle}>{title}</Typography>
    </>
  )
}

interface OverviewProps {
  transaction: any
  txBlockConfirmation: any
  txTimestamp: any
  isAuthenticated: any
  txnNote: any
  txnStatus: any
  txnError: any
  user: any
  getOneTxnNote: (username: any, txnHash: any) => void
  createTxnNote: (username: any, txnHash: any, txnNote: any) => void
  deleteTxnNote: (username: string, txnHash: string) => void
  editTxnNote: (username: string, txnHash: string, txnNote: string) => void
}

function Overview({
  transaction,
  txBlockConfirmation,
  txTimestamp,
  isAuthenticated,
  txnNote,
  txnStatus,
  getOneTxnNote,
  createTxnNote,
  deleteTxnNote,
  editTxnNote,
  user,
}: OverviewProps) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const pastTime = (timestamp: any) => {
    const timestampSeconds = Math.round(new Date().getTime() / 1000)
    let differenceSeconds = timestampSeconds - timestamp
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

  const [copyAddress, setcopyAddress] = React.useState(true)
  const [copyFromAddress, setcopyFromAddress] = React.useState(true)
  const [copyToAddress, setcopyToAddress] = React.useState(true)

  // const [txnNote, setTxnNote] = React.useState('')

  const handleCopyAddress = () => {
    copy(transaction.hash)
    setcopyAddress(!copyAddress)
  }

  const handleCopyFromAddress = () => {
    copy(transaction.from)
    setcopyFromAddress(!copyFromAddress)
  }

  const handleCopyToAddress = () => {
    copy(transaction.to)
    setcopyToAddress(!copyToAddress)
  }

  // handle decode input data
  const [decodeShow, setDecodeShow] = React.useState(true)
  const handleDecodeInputData = () => {
    const visible = !decodeShow
    setDecodeShow(visible)
  }

  //handle input value as
  const [inputValue, setInputValue] = React.useState(0)
  const handleMenuClick = (value: any) => {
    setInputValue(value)
  }
  const message = {
    init: 'Tip: A private note (up to 100 characters) can be saved and is useful for transaction tracking. Please DO NOT store any passwords or private keys here.',
    successRemove: 'The Private note was successfully removed.',
    successUpdate: 'Your private Note has been successfully updated.',
  }
  const handleChangeTxnNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault()
      const txn = txnNote.txn
      if (event.target.value === txnNote.note) {
      } else if (event.target.value !== '' && txn === undefined) {
        createTxnNote(user.name, transaction.hash, event.target.value)
      } else if (event.target.value === '' && txn !== undefined) {
        deleteTxnNote(user.name, transaction.hash)
      } else if (event.target.value !== '' && txn !== undefined) {
        editTxnNote(user.name, transaction.hash, event.target.value)
      }
    }
  }
  let txnMessage = <span>{message.init}</span>
  if (txnStatus === 1 || txnStatus === 2) {
    txnMessage = (
      <span className={classes.txnMessageUpdate}>
        <i className={'fa fa-check'} />
        {message.successUpdate}
      </span>
    )
  } else if (txnStatus === 3) {
    txnMessage = (
      <span className={classes.txnMessageRemove}>
        <i className={'fa fa-exclamation-circle'} />
        {message.successRemove}
      </span>
    )
  }
  useEffect(() => {
    if (isAuthenticated && transaction) {
      getOneTxnNote(user.name, transaction.hash)
    }
    const timer = setTimeout(() => {
      setcopyAddress(true)
      setcopyFromAddress(true)
      setcopyToAddress(true)
    }, 1000)
    return () => clearTimeout(timer)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [copyAddress, copyFromAddress, copyToAddress])
  return (
    <Grid container>
      <Grid item xs={12} sm={3} className={classes.gridStyle}>
        <LeftContent
          title="Transaction Hash:"
          tooltipContent="A TxHash or transaction hash is a unique 66 characters identifier that is generated whenever a transaction is executed."
        />
      </Grid>
      <Grid item xs={12} sm={9} className={classes.gridStyle}>
        <Typography className={classes.transactionStyle} style={{ marginRight: '4px' }}>
          {transaction.hash}
        </Typography>
        <IconTooltip title="Copy address to clipboard">
          <span className={classes.copyIcon} onClick={handleCopyAddress}>
            {(copyAddress && <i className="far fa-copy"></i>) || (
              <span>
                <i className="fa fa-check-circle mr-1"></i>&nbsp;copied
              </span>
            )}
          </span>
        </IconTooltip>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.gridStyle}>
        <LeftContent title="Status:" tooltipContent="The status of transaction" />
      </Grid>
      <Grid item xs={12} sm={9} className={classes.gridStyle}>
        <StyledDarkTooltip
          arrow
          placement="top"
          title="A Status code indicating if the top-level call succeeded or failed (applicable for Post BYZANTIUM blocks only)"
        >
          {transaction.status ? (
            <Typography className={classnames(classes.transactionStyle, classes.successButton)}>
              <i className="fas fa-check-circle" style={{ marginRight: '4px' }} />
              Success
            </Typography>
          ) : (
            <Typography className={classnames(classes.transactionStyle, classes.failButton)}>
              <i className="fas fa-times-circle"></i>
              Fail
            </Typography>
          )}
        </StyledDarkTooltip>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.gridStyle}>
        <LeftContent
          title="Block:"
          tooltipContent="The number of tthe block in which the transaction was recorded. Block confirmation indicate how many blocks since the transaction is validated."
        />
      </Grid>
      <Grid item xs={12} sm={9} className={classes.gridStyle}>
        <Typography className={classes.transactionStyle}>
          <StyledLink to={`/block/${transaction.blockNumber}`}>{transaction.blockNumber}</StyledLink>
          &nbsp;&nbsp;&nbsp;
          <StyledDarkTooltip arrow placement="top" title="Number of blocks validated since">
            <StyledRibbon>{txBlockConfirmation} Block Confirmations</StyledRibbon>
          </StyledDarkTooltip>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.gridStyle}>
        <LeftContent title="Time Stamp:" tooltipContent="The date and time at which a transaction is validated" />
      </Grid>
      <Grid item xs={12} sm={9} className={classes.gridStyle}>
        <span className={classes.clock}>
          <i className="far fa-clock small mr-1" />
        </span>
        <Typography className={classes.transactionStyle}>{pastTime(txTimestamp)}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.gridStyle}>
        <LeftContent
          title="From:"
          tooltipContent="The sending party of the transaction(could be from a contract address)."
        />
      </Grid>
      <Grid item xs={12} sm={9} className={classes.gridStyle}>
        <Typography className={classes.transactionStyle}>
          <StyledLink to={`/address/${transaction.from}`} style={{ marginRight: '4px' }}>
            {transaction.from}
          </StyledLink>
        </Typography>
        <StyledDarkTooltip arrow placement="top" title="Copy From address to clipboard">
          <span className={classes.copyIcon} onClick={handleCopyFromAddress}>
            {(copyFromAddress && <i className="far fa-copy"></i>) || (
              <span>
                <i className="fa fa-check-circle mr-1"></i>copied
              </span>
            )}
          </span>
        </StyledDarkTooltip>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.gridStyle}>
        <LeftContent title="To:" tooltipContent="The receiving part of the transaction(could be a contract address)." />
      </Grid>
      <Grid item xs={12} sm={9} className={classes.gridStyle}>
        <Typography className={classes.transactionStyle}>
          Contract
          <StyledLink to={`/address/${transaction.to}`} style={{ margin: '0 4px' }}>
            {transaction.to}
          </StyledLink>
          {transaction.status ? (
            <i className="fas fa-check-circle" style={{ color: '#00c9a7', margin: '0 4px' }} />
          ) : (
            <StyledDarkTooltip arrow placement="right" title="Error occured during contract execution">
              <i className="fas fa-exclamation-triangle" style={{ color: '#de4437', margin: '0 4px' }}></i>
            </StyledDarkTooltip>
          )}
          <StyledDarkTooltip arrow placement="top" title="Copy To address to clipboard">
            <span className={classes.copyIcon} onClick={handleCopyToAddress}>
              {(copyToAddress && <i className="far fa-copy"></i>) || (
                <span>
                  <i className="fa fa-check-circle mr-1"></i>copied
                </span>
              )}
            </span>
          </StyledDarkTooltip>
          <span className={classes.toerror}>
            {transaction.status || (
              <span style={{ margin: '0' }}>
                <br></br>
                <img src="/images/Common/Lshape.svg" alt="price" style={{ width: '8px' }} />
                &nbsp; Warning! Error encountered during contract execution <b>[Reverted]</b>
                <i className="far fa-frown"></i>
              </span>
            )}
          </span>
        </Typography>
      </Grid>
      {!isEmptyObject(transaction.token) ? (
        <>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.gridStyle}>
            <LeftContent
              title="Tokens Transferred:
              "
              tooltipContent="List of token transfered in the transaction"
            />
          </Grid>
          {transaction.token.tokenTransfers.map((row: any, key: any) => {
            return (
              <Grid key={key} item xs={12} sm={9} className={classes.gridStyle}>
                <Typography className={classes.transactionStyle}>
                  From
                  <StyledDarkTooltip arrow placement="top" title="Copy To address to clipboard">
                    <StyledLink to={`/address/${row.from}`} style={{ margin: '0 4px' }}>
                      {row.from}
                    </StyledLink>
                  </StyledDarkTooltip>
                </Typography>
                <Typography className={classes.transactionStyle}>
                  To
                  <StyledDarkTooltip arrow placement="top" title="Copy To address to clipboard">
                    <StyledLink to={`/address/${row.to}`} style={{ margin: '0 4px' }}>
                      {row.to}
                    </StyledLink>
                  </StyledDarkTooltip>
                </Typography>
                <Typography className={classes.transactionStyle}>
                  For <span>{row.value / Math.pow(10, 18)}</span>
                </Typography>
              </Grid>
            )
          })}
        </>
      ) : (
        ''
      )}
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.gridStyle}>
        <LeftContent
          title="Value:"
          tooltipContent="The value being transacted in ZNX and flat value. Note: You can click the flat value(if available) to see historical value at the time of transaction"
        />
      </Grid>
      <Grid item xs={12} sm={9} className={classes.gridStyle}>
        <StyledDarkTooltip
          arrow
          placement="top"
          title="The amount of ZNX to be transferred to the recipient with transaction"
        >
          <Typography className={classes.valueButton} style={{ marginRight: '4px' }}>
            {transaction.value / Math.pow(10, 18)} ZNX
          </Typography>
        </StyledDarkTooltip>
        <Typography className={classes.transactionStyle}>($ 0.00)</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.gridStyle}>
        <LeftContent
          title="Transaction Fee:"
          tooltipContent="Amount paid to the miner for processing the transaction."
        />
      </Grid>
      <Grid item xs={12} sm={9} className={classes.gridStyle}>
        <StyledDarkTooltip arrow placement="top" title="Gas Price * Gas Used by Transaction">
          <Typography className={classnames(classes.transactionStyle)} style={{ marginRight: '4px' }}>
            {transaction.gasUsed
              ? (transaction.gasUsed * transaction.gasPrice) / Math.pow(10, 18)
              : (transaction.gas * transaction.gasPrice) / Math.pow(10, 18)}{' '}
            ZNX ($0.00)
          </Typography>
        </StyledDarkTooltip>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit style={{ width: '100%' }}>
        <Grid container>
          <Grid item xs={12} sm={3} className={classes.gridStyle}>
            <LeftContent
              title="Gas Limit:"
              tooltipContent="Maximum amount of gas provided for the transaction. For normal ZNX transfers, the value is 21,000. for contract this value is higher and bound by block gas limit."
            />
          </Grid>
          <Grid item xs={12} sm={9} className={classes.gridStyle}>
            <StyledDarkTooltip arrow placement="top" title="The amount of Gas supplied for this transaction to happen">
              <Typography className={classnames(classes.transactionStyle)} style={{ marginRight: '4px' }}>
                {transaction.gas}
              </Typography>
            </StyledDarkTooltip>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={3} className={classes.gridStyle}>
            <LeftContent
              title="Gas Used by Transaction:"
              tooltipContent="The exact units of gas thah was used for the transaction."
            />
          </Grid>
          <Grid item xs={12} sm={9} className={classes.gridStyle}>
            <StyledDarkTooltip arrow placement="top" title="The amount of Gas used by this specific transaction alone">
              <Typography className={classnames(classes.transactionStyle)} style={{ marginRight: '4px' }}>
                {transaction.gasUsed
                  ? `${transaction.gasUsed}(${(transaction.gasUsed / transaction.gas) * 100}%)`
                  : `${transaction.gasPrice}(${(transaction.gasPrice / transaction.gas) * 100}%)`}
              </Typography>
            </StyledDarkTooltip>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Box display="flex">
          <Grid item xs={12} sm={3} className={classes.gridStyle}>
            <LeftContent
              title="Gas Price:"
              tooltipContent="Cost per unit of gas specified for the transaction, in ZNX and Gwei. The higher the gas price the higher chance of getting included in a block."
            />
          </Grid>
          <Grid item xs={12} sm={9} className={classes.gridStyle}>
            <StyledDarkTooltip
              arrow
              placement="top"
              title="The price offered to the miner of purchase this amount of gas ( per Gas )"
            >
              <Typography className={classnames(classes.transactionStyle)} style={{ marginRight: '4px' }}>
                {transaction.gasPrice / Math.pow(10, 18)} ZNX ({transaction.gasPrice / Math.pow(10, 9)}Gwei)
              </Typography>
            </StyledDarkTooltip>
          </Grid>
        </Box>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Box display="flex">
          <Grid item xs={12} sm={3} className={classes.gridStyle}>
            <LeftContent
              title="Nonce:"
              tooltipContent="Sequential running number fo an address, beginning with 0 for the first transaction. For example, if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address."
            />
          </Grid>
          <Grid item xs={12} sm={9} className={classes.gridStyle}>
            <StyledDarkTooltip arrow placement="top" title="Transaction Nonce">
              <Typography className={classnames(classes.transactionStyle)} style={{ marginRight: '4px' }}>
                {transaction.nonce}
              </Typography>
            </StyledDarkTooltip>
          </Grid>
        </Box>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        {decodeShow === true ? (
          <>
            <Grid container>
              <Grid item xs={12} sm={3} className={classes.gridStyle}>
                <LeftContent
                  title="Input Data:"
                  tooltipContent="Additional information that is required for the transaction."
                />
              </Grid>

              {!isEmptyObject(transaction.decodeMethod) ? (
                <Grid item xs={12} sm={9} className={classes.gridStyle1}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <StyledDarkTooltip
                      arrow
                      placement="top"
                      title="The binary data that formed the input to the transaction, either the input data if it was a message call or the contract intialisation if it was a contract creation"
                    >
                      {inputValue === 0 ? (
                        <TextareaAutosize
                          maxRows={4}
                          aria-label="maximum height"
                          placeholder="Maximum 4 rows"
                          value={!isEmptyObject(transaction) && transaction.decodeMethod.default.data}
                          className={classes.txtarea}
                          readOnly
                        ></TextareaAutosize>
                      ) : inputValue === 1 ? (
                        <TextareaAutosize
                          maxRows={4}
                          aria-label="maximum height"
                          placeholder="Maximum 4 rows"
                          value={!isEmptyObject(transaction) && transaction.decodeMethod.utf8}
                          className={classes.txtarea}
                          readOnly
                        />
                      ) : (
                        <TextareaAutosize
                          maxRows={4}
                          aria-label="maximum height"
                          placeholder="Maximum 4 rows"
                          value={!isEmptyObject(transaction) && transaction.decodeMethod.original}
                          className={classes.txtarea}
                          readOnly
                        />
                      )}
                    </StyledDarkTooltip>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{ display: 'flex' }}>
                      {/* <Button className={classes.decodebtn} variant="contained">
                                  View Input As &nbsp;<i className="fas fa-angle-down"></i>
                                </Button> */}
                      <Dropdown handleMenuClick={handleMenuClick} />
                      <Button className={classes.decodebtn} onClick={handleDecodeInputData} variant="contained">
                        <i className="fas fa-cubes"></i>&nbsp;Decode Input Data
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <Grid item xs={12} sm={9} className={classes.gridStyle1}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <StyledDarkTooltip
                      arrow
                      placement="top"
                      title="The binary data that formed the input to the transaction, either the input data if it was a message call or the contract intialisation if it was a contract creation"
                    >
                      <TextareaAutosize
                        maxRows={4}
                        minRows={1}
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        value={'0x'}
                        className={classes.txtarea}
                        readOnly
                      />
                    </StyledDarkTooltip>
                  </Grid>
                </Grid>
              )}

              {/* <Grid item xs={12} sm={12} className={classes.gridStyle}></Grid> */}
            </Grid>
          </>
        ) : (
          <>
            <Grid container>
              <Grid item xs={12} sm={3} className={classes.gridStyle}>
                <LeftContent
                  title="Input Data:"
                  tooltipContent="Additional information that is required for the transaction."
                />
              </Grid>
              <Grid item xs={12} sm={9} className={classes.gridStyle1}>
                <TableContainer style={{ boxShadow: 'none', marginBottom: '3px' }}>
                  <Table aria-label="custom pagination table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>#</StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Type</StyledTableCell>
                        <StyledTableCell>Data</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {transaction.decodeMethod.decodeData.map((column: any, key: any) => (
                        <TableRow key={key}>
                          <StyledTableCell>{key + 1}</StyledTableCell>
                          <StyledTableCell>{column.name}</StyledTableCell>
                          <StyledTableCell>{column.type}</StyledTableCell>
                          <StyledTableCell>{column.data}</StyledTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Button className={classes.decodebtn} onClick={handleDecodeInputData} variant="contained">
                  <i className="fa fa-undo txhash-icon"></i>&nbsp;Switch Back
                </Button>
              </Grid>
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
      </Collapse>
      <ListItem onClick={handleExpandClick} aria-expanded={expanded} className={classes.expanlist}>
        <span>Click to see more </span>
        <span
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
        >
          <i className="fas fa-arrow-down"></i>
        </span>
      </ListItem>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.gridStyle}>
        <LeftContent
          title="Private Note:"
          tooltipContent="Private note to keep track of the transaction. Only viewable to ZnxScan's user who assign them."
        />
      </Grid>
      {isAuthenticated ? (
        <Grid item xs={12} sm={9} className={classes.txnInput}>
          <TextareaAutosize
            className={classes.textField}
            minRows={1}
            maxRows={10}
            defaultValue={txnNote.note}
            onKeyDown={handleChangeTxnNote}
            required
          />
          {txnMessage}
        </Grid>
      ) : (
        <Grid item xs={12} sm={9} className={classes.gridStyle}>
          <Typography className={classes.transactionStyle}>
            To access the Private Note feature, you must be
            <StyledLink to={`/login?returntx=${transaction.hash}`} style={{ margin: '0 4px' }}>
              Logged In
            </StyledLink>
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}

const mapStateToProps = (state: AppState) => ({
  transaction: state.transaction.transaction,
  txBlockConfirmation: state.transaction.txBlockConfirmation,
  txTimestamp: state.transaction.txTimestamp,
  txnNote: state.user.txnNote,
  txnStatus: state.user.txnNoteChangeCode,
  txnError: state.user.txnNoteError,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
})

export default connect(mapStateToProps, { getOneTxnNote, createTxnNote, editTxnNote, deleteTxnNote })(Overview)
