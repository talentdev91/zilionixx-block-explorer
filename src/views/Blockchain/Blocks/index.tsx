import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getAllBlocks } from '../../../store/actions/block'
//components
import ViewTxnsTable from './components/Table'
import { StyledContainer } from '../../../components/StyledContainer'
import { columns } from './data'
import TableInfo from './components/TableInfo'
import { useStyles, StyledPageTitle } from './TableStyle'

interface ViewBlockProps {
  getAllBlocks: (page: any, rowsPerPage: any) => void
  blocks: any
  totalBlocksCnt: any
  blockReward: any
  loading: any
}

function ViewBlocks({ getAllBlocks, blocks, totalBlocksCnt, blockReward, loading }: ViewBlockProps) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(50)
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  React.useEffect(() => {
    getAllBlocks(page, rowsPerPage)
  }, [page, rowsPerPage, getAllBlocks])

  return (
    <StyledContainer>
      <StyledPageTitle>Blocks </StyledPageTitle>
      {
        !loading && blocks !== undefined ?
        (
          <ViewTxnsTable
            tableInfo={() => TableInfo(totalBlocksCnt, blocks, rowsPerPage, loading)}
            rowsPerPage={rowsPerPage}
            page={page}
            blockReward={blockReward}
            rows={blocks}
            columns={columns}
            totalBlocksCnt={totalBlocksCnt}
            handleChange={handleChange}
            handleChangePage={handleChangePage}
            loading={loading}
          />
        )
        :
        (
          <div className={classes.loading}> &nbsp;&nbsp;&nbsp;Loading... </div>
        )
      }
      
    </StyledContainer>
  )
}
const mapStateToProps = (state: AppState) => ({
  blocks: state.block.blocks,
  totalBlocksCnt: state.block.totalBlocksCnt,
  blockReward: state.block.blockReward,
  loading: state.block.loading,
})
export default connect(mapStateToProps, { getAllBlocks })(ViewBlocks)
