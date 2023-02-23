import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { CodePaper } from './components/CodePaper'
import { StyledWrappedLink } from './styles'

export const Accounts: React.FC = () => {
  return (
    <div>
      <Box>
        <Box mb={2}>
          <Typography variant="body1">Get ZNX Balance for a single Address</Typography>
          <Box mt={2}>
            <CodePaper>
              <StyledWrappedLink
                href="http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=balance&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43"
                underline="none"
              >
                http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=balance&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43
              </StyledWrappedLink>
            </CodePaper>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box mb={2}>
          <Typography variant="body1">Get ZNX Balance for multiple Addresses in a single call</Typography>
          <Box mt={2}>
            <CodePaper>
              <StyledWrappedLink
                href="http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=balancemulti&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43,0x8734cb972d36a740cc983d5515e160c373a4a016&sort=dec"
                underline="none"
              >
                http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=balancemulti&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43,0x8734cb972d36a740cc983d5515e160c373a4a016&sort=dec
              </StyledWrappedLink>
            </CodePaper>
          </Box>
        </Box>
        <Box pt={2} mb={2}>
          <Typography variant="body2">
            Separate addresses by comma, up to a maxium of 20 accounts in a single batch
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box mb={2}>
          <Typography variant="body1">Get a list of 'Normal' Transactions By Address</Typography>
          <Box pt={2} mb={2}>
            <Typography variant="body2">
              [Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to
              retrieve results
            </Typography>
          </Box>
          <Box mt={2}>
            <CodePaper>
              <StyledWrappedLink
                href="http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=txlist&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=1&endblock=1000&sort=dec"
                underline="none"
              >
                http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=txlist&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=1&endblock=1000&sort=dec
              </StyledWrappedLink>
            </CodePaper>
          </Box>
        </Box>
        <Box pt={2} mb={2}>
          <Typography variant="body2">
            (Returned 'isError' values: 0=No Error, 1=Got Error) <br></br> (Returns up to a maximum of the last 10000
            transactions only) <br></br> <strong>or</strong>
          </Typography>
        </Box>
        <Box mt={2}>
          <CodePaper>
            <StyledWrappedLink
              href="http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=txlist&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=1&endblock=1000&sort=dec&page=1&offset=10"
              underline="none"
            >
              http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=txlist&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=1&endblock=1000&sort=dec&page=1&offset=10
            </StyledWrappedLink>
          </CodePaper>
        </Box>
        <Box pt={2} mb={2}>
          <Typography variant="body2">
            (To get paginated results use page=&lt;page number&gt; and offset=&lt;max records to return&gt;)
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box mb={2}>
          <Typography variant="body1">Get a list of "ERC-20 - Token Transfer Events" by Address</Typography>
          <Box pt={2} mb={2}>
            <Typography variant="body2">
              [Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to
              retrieve results
            </Typography>
          </Box>
          <Box mt={2}>
            <CodePaper>
              <StyledWrappedLink
                href="http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokentx&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=1&endblock=1000&sort=dec"
                underline="none"
              >
                http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokentx&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=1&endblock=1000&sort=dec
              </StyledWrappedLink>
            </CodePaper>
          </Box>
        </Box>
        <Box pt={2} mb={2}>
          <Typography variant="body2">
            (Returns up to a maximum of the last 10000 transactions only)
            <br></br> <strong>or</strong>
          </Typography>
        </Box>
        <Box mt={2}>
          <CodePaper>
            <StyledWrappedLink
              href="http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokentx&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=1&endblock=1000&sort=dec&page=1&offset=10"
              underline="none"
            >
              http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokentx&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=1&endblock=1000&sort=dec&page=1&offset=10
            </StyledWrappedLink>
          </CodePaper>
        </Box>
        <Box pt={2} mb={2}>
          <Typography variant="body2">
            (To get paginated results use page=&lt;page number&gt; and offset=&lt;max records to return&gt;)<br></br>
            <strong>or</strong>
          </Typography>
        </Box>
        <Box mt={2}>
          <CodePaper>
            <StyledWrappedLink
              href="http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokentx&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=1&endblock=1000&sort=dec&page=1&offset=10&contractAddress=0x38A11df5B03Cd50eDE80A170771b7F2fBA8B68AF"
              underline="none"
            >
              http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokentx&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=1&endblock=1000&sort=dec&page=1&offset=10&contractAddress=0x38A11df5B03Cd50eDE80A170771b7F2fBA8B68AF
            </StyledWrappedLink>
          </CodePaper>
        </Box>
        <Box pt={2} mb={2}>
          <Typography variant="body2">
            (To get transfer events for a specific token contract, include the contractaddress parameter)
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box mb={2}>
          <Typography variant="body1">Get a list of "ERC721 - Token Transfer Events" by Address</Typography>
          <Box pt={2} mb={2}>
            <Typography variant="body2">
              [Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to
              retrieve results
            </Typography>
          </Box>
          <Box mt={2}>
            <CodePaper>
              <StyledWrappedLink
                href="http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokennfttx&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=0&endblock=99999&sort=asc"
                underline="none"
              >
                http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokennfttx&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&startblock=0&endblock=99999&sort=asc
              </StyledWrappedLink>
            </CodePaper>
          </Box>
        </Box>
        <Box pt={2} mb={2}>
          <Typography variant="body2">
            (Returns up to a maximum of the last 10000 transactions only)
            <br></br> <strong>or</strong>
          </Typography>
        </Box>
        <Box mt={2}>
          <CodePaper>
            <StyledWrappedLink
              href="http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokennfttx&contractaddress=0x262ec47609d381993a67d03b5ef474d6f496538f&page=1&offset=100&sort=asc"
              underline="none"
            >
              http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokennfttx&contractaddress=0x262ec47609d381993a67d03b5ef474d6f496538f&page=1&offset=100&sort=asc
            </StyledWrappedLink>
          </CodePaper>
        </Box>
        <Box pt={2} mb={2}>
          <Typography variant="body2">
            (To get paginated results use page=&lt;page number&gt; and offset=&lt;max records to return&gt;)<br></br>
            <strong>or</strong>
          </Typography>
        </Box>
        <Box mt={2}>
          <CodePaper>
            <StyledWrappedLink
              href="http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokennfttx&contractaddress=0x262ec47609d381993a67d03b5ef474d6f496538f&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&page=1&offset=100&sort=asc"
              underline="none"
            >
              http://54.251.117.51:5000/api/api?apikey=your-apikey&module=account&action=tokennfttx&contractaddress=0x262ec47609d381993a67d03b5ef474d6f496538f&address=0xf7c913733ab38aa2b3a4a69b2bf640d5e340fc43&page=1&offset=100&sort=asc
            </StyledWrappedLink>
          </CodePaper>
        </Box>
        <Box pt={2} mb={2}>
          <Typography variant="body2">
            (To get transfer events for a specific token contract, include the contractaddress parameter)
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box mb={2}>
          <Typography variant="body1">Get list of Blocks Validated by Address</Typography>
          <Box mt={2}>
            <CodePaper>
              <StyledWrappedLink
                href="https://54.251.117.51:5000/api?module=account&action=getminedblocks&address=0x0000000000000000000000000000000000000000&blocktype=blocks&apikey=YourApiKeyToken"
                underline="none"
              >
                https://54.251.117.51:5000/api?module=account&action=getminedblocks&address=0x0000000000000000000000000000000000000000&blocktype=blocks&apikey=YourApiKeyToken
              </StyledWrappedLink>
            </CodePaper>
          </Box>
        </Box>
        <Box pt={2} mb={2}>
          <Typography variant="body2">
            <strong>or</strong>
          </Typography>
        </Box>
        <Box mt={2}>
          <CodePaper>
            <StyledWrappedLink
              href="https://54.251.117.51:5000/api?module=account&action=getminedblocks&address=0x0000000000000000000000000000000000000000&blocktype=blocks&page=1&offset=10&apikey=YourApiKeyToken"
              underline="none"
            >
              https://54.251.117.51:5000/api?module=account&action=getminedblocks&address=0x0000000000000000000000000000000000000000&blocktype=blocks&page=1&offset=10&apikey=YourApiKeyToken
            </StyledWrappedLink>
          </CodePaper>
        </Box>
        <Box pt={2} mb={0}>
          <Typography variant="body2">
            (To get paginated results use page=&lt;page number&gt; and offset=&lt;max records to return&gt;)<br></br>
            **type = <strong>block</strong> ((full blocks only))
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
