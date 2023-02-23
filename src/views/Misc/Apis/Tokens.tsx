import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { CodePaper } from './components/CodePaper'
import { StyledWrappedLink } from './styles'

export const Tokens: React.FC = () => {
  return (
    <div>
      <Box>
        <Box mb={2}>
          <Typography variant="body1">Get ERC20-Token TotalSupply by ContractAddress</Typography>
          <Box mt={2}>
            <CodePaper>
              <StyledWrappedLink
                href="http://54.251.117.51:5000/api/api?contractaddress=0xfbdb0bf586f8a2bd6f2d79ba67add22b4ba40e87&apikey=YourApiKeyToken&module=stats&action=tokensupply"
                underline="none"
              >
                http://54.251.117.51:5000/api/api?contractaddress=0xfbdb0bf586f8a2bd6f2d79ba67add22b4ba40e87&apikey=YourApiKeyToken&module=stats&action=tokensupply
              </StyledWrappedLink>
            </CodePaper>
          </Box>
        </Box>
        <Box mb={2}>
          <Typography variant="body1">Get ERC20-Token Account Balance for TokenContractAddress</Typography>
          <Box mt={2}>
            <CodePaper>
              <StyledWrappedLink
                href="http://54.251.117.51:5000/api/api?module=account&action=tokenbalance&contractaddress=0x4913859d5d3e69a9622959a828aac5e491b7863f&address=0x3ac647211316bd1353619ebbfb1cbc70ab5f4ee5&tag=latest&apikey=YourApiKeyToken"
                underline="none"
              >
                http://54.251.117.51:5000/api/api?module=account&action=tokenbalance&contractaddress=0x4913859d5d3e69a9622959a828aac5e491b7863f&address=0x3ac647211316bd1353619ebbfb1cbc70ab5f4ee5&tag=latest&apikey=YourApiKeyToken
              </StyledWrappedLink>
            </CodePaper>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
