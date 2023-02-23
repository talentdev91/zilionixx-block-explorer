import React from 'react'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { CodePaper } from './components/CodePaper'
import { StyledWrappedLink } from './styles'

const contractCode = `
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider());
var version = web3.version.api;
        
$.getJSON('https://54.251.117.51:5000/api?module=contract&action=getabi&address=0x80AA7cb0006d5DDD91cce684229Ac6e398864606&apikey=YourApiKeyToken', function (data) {
var contractABI = "";
    contractABI = JSON.parse(data.result);
    if (contractABI != ''){
        var MyContract = web3.eth.contract(contractABI);
        var myContractInstance = MyContract.at("0x80AA7cb0006d5DDD91cce684229Ac6e398864606");
        var result = myContractInstance.memberId("0xfe8ad7dd2f564a877cc23feea6c0a9cc2e783715");
        console.log("result1 : " + result);
        var result = myContractInstance.members(1);
        console.log("result2 : " + result);
    } else {
        console.log("Error" );
    }
});
`

export const Contracts: React.FC = () => {
  return (
    <div>
      <Box>
        <Box mb={2}>
          <Typography variant="body1">
            <span>Get Contract ABI for</span>
            <span>
              <Link href="/contractsVerified" underline="none">
                Verified Contract Source Codes
              </Link>
            </span>
          </Typography>
          <Box mt={2} mb={2}>
            <CodePaper>
              <StyledWrappedLink
                href="http://54.251.117.51:5000/api/api?apikey=your-apikey&module=contract&action=getabi&address=0x827f5388892e4b7ea0e610a2812e8afab0d4cada"
                underline="none"
              >
                http://54.251.117.51:5000/api/api?apikey=your-apikey&module=contract&action=getabi&address=0x827f5388892e4b7ea0e610a2812e8afab0d4cada
              </StyledWrappedLink>
            </CodePaper>
          </Box>
        </Box>

        <Box>
          <Typography variant="body2">
            A simple sample for retrieving the contractABI using Web3.js and Jquery to interact with a contract
          </Typography>
          <Box mt={2}>
            <CodePaper>
              <pre style={{ overflow: 'auto' }}>{contractCode}</pre>
            </CodePaper>
          </Box>
        </Box>

        <Box mt={2} mb={2}>
          <Typography variant="body1">Get Contract Source Code for Verified Contract Source Codes</Typography>
          <Box mt={2} mb={2}>
            <CodePaper>
              <Typography variant="body2">
                {' '}
                1.&nbsp;
                <StyledWrappedLink
                  href="https://54.251.117.51:5000/api?module=contract&action=getsourcecode&address=0x80AA7cb0006d5DDD91cce684229Ac6e398864606&apikey=YourApiKeyToken"
                  underline="none"
                >
                  https://54.251.117.51:5000/api?module=contract&action=getsourcecode&address=0x80AA7cb0006d5DDD91cce684229Ac6e398864606&apikey=YourApiKeyToken
                </StyledWrappedLink>
                &nbsp;(replace the address parameter with the actual contract address)
              </Typography>
              <Typography variant="body2" style={{ marginTop: '1rem' }}>
                {' '}
                2. Terms of usage: Please see the&nbsp;
                <StyledWrappedLink href="https://znxscan.com/source-code-usage-terms" underline="none">
                  usage terms policy
                </StyledWrappedLink>
                &nbsp;(replace the address parameter with the actual contract address)
              </Typography>
            </CodePaper>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
