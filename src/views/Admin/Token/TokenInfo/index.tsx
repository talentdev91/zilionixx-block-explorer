import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams,useLocation } from 'react-router'

import { AppState } from '../../../../store/configureStore'
import { StyledContainer } from '../../../../components/StyledContainer'
import Category from '../../category'
//components
import Table from './components/TokenInfoTable'
import TableInfo from './components/TableInfo'
import { getTokenInfo } from '../../../../store/actions/admin'
import { useStyles } from './TableStyle'

interface TokenInfoProps {
  getTokenInfo: (page: any, rowsPerPage: any, tokenAddress: any) => void
  tokenInfoList: any
  tokenInfoCount: number
}

function TokenInfo({ getTokenInfo, tokenInfoList, tokenInfoCount }: TokenInfoProps) {
  const columns = [ 'No', 'email', 'name', 'contract', 'official', 'logo', 'description', 'officialcon', 
    'blog', 'reddit', 'slack', 'facebook', 'twitter', 'bitcoin', 'github', 'telegram', 'whitepaper', 'ticker', 
    'comment', 'status', 'Action' ]
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  let location = useLocation();
  const tokenAddress = location.pathname.split("/")[location.pathname.split("/").length-1]
  
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }
  
  React.useEffect(() => {
    getTokenInfo(page, rowsPerPage, tokenAddress)
  }, [page, rowsPerPage, getTokenInfo])

  return (
    tokenInfoList !== undefined && (
      <div>
        <StyledContainer>
          <Category />
          <div className={classes.tablestyle}>
            <Table
              tableInfo={() => TableInfo(tokenInfoCount, tokenInfoList.length)}
              rowsPerPage={rowsPerPage}
              page={page}
              columns={columns}
              rows={tokenInfoList}
              totalCount={tokenInfoCount}
              handleChange={handleChange}
              handleChangePage={handleChangePage}
            />
          </div>
        </StyledContainer>
      </div>
    )
  )
}

const mapStateToProps = (state: AppState) => ({
  tokenInfoList: state.admin.tokenInfoList,
  tokenInfoCount: state.admin.tokenInfoCount,
})
export default connect(mapStateToProps, { getTokenInfo })(TokenInfo)
