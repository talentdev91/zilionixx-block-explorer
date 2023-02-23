import React from 'react'
import { Typography, Box } from '@material-ui/core'

const TableSearchInfo = (totalTokens: any, page: any, rowsPerPage: any) => {
    return (
        <Box display="flex" flexDirection="column">
            <Typography style={{ color: '#6c757e', fontSize: '14px' }}>
                A total of 15 {totalTokens} Contracts found
            </Typography>
        </Box>
    )
}

export default TableSearchInfo
