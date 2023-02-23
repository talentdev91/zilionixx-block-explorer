import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
//material-ui components
import { TableRow, TableCell, Typography, Paper, TableContainer } from '@material-ui/core'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined'
//style
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledLink,
  StyledTextOverflow,
  StyledIconButton,
  StyledSvgIcon,
  StyledTooltip,
  StyledEmptyRowBox,
} from '../Style'

interface CustomizedTableProps {
  transaction: any
  columns: string[]
}

function CustomizedTable({ transaction, columns }: CustomizedTableProps) {
  return (
    <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
      <StyledTable aria-label="custom pagination table">
        <StyledTableHead>
          <TableRow>
            {columns.map((column: any, key: any) => {
              return <StyledTableCell key={key}>{column}</StyledTableCell>
            })}
          </TableRow>
        </StyledTableHead>
        <StyledTableBody>
          {transaction ? (
            <TableRow>
              <StyledTableCell>call</StyledTableCell>
              <StyledTableCell>
                <StyledLink to={`/address/${transaction.from}`}>
                  <StyledTooltip title={transaction.from} arrow>
                    <StyledTextOverflow>{transaction.from}</StyledTextOverflow>
                  </StyledTooltip>
                </StyledLink>
              </StyledTableCell>
              <StyledTableCell>
                <StyledIconButton>
                  <StyledSvgIcon>
                    <ArrowRightAltOutlinedIcon />
                  </StyledSvgIcon>
                </StyledIconButton>
              </StyledTableCell>
              <StyledTableCell>
                <StyledLink to={`/address/${transaction.to}`}>
                  <StyledTooltip title={transaction.to} arrow>
                    <StyledTextOverflow>{transaction.to}</StyledTextOverflow>
                  </StyledTooltip>
                </StyledLink>
              </StyledTableCell>
              <StyledTableCell>{transaction.value / Math.pow(10, 18)} ZNX</StyledTableCell>
              <StyledTableCell style={{ color: '#77838f', fontSize: '80%' }}>{transaction.gasUsed}</StyledTableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell style={{ padding: '10px' }} colSpan={12}>
                <StyledEmptyRowBox>
                  <Typography style={{ fontSize: '14px' }}>There are no matching entries</Typography>
                </StyledEmptyRowBox>
              </TableCell>
            </TableRow>
          )}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  transaction: state.transaction.transaction,
})

export default connect(mapStateToProps)(CustomizedTable)
