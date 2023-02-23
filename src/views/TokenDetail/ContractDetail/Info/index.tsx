import React from 'react'
import { useStyles, StyledLink } from '../../styles'
//components

export const Info: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <p className={classes.infomarket}>
        <u>Market</u>
      </p>
      <table>
        <tbody className={classes.infotable}>
          <tr>
            <td style={{ width: '150px' }}>Volume (24H)</td>
            <td style={{ width: '15px' }}>:</td>
            <td>$2,700,880,678.00</td>
          </tr>
          <tr>
            <td style={{ width: '150px' }}>Market Capitalization</td>
            <td style={{ width: '15px' }}>:</td>
            <td> $3,648,518,944.00</td>
          </tr>
          <tr>
            <td style={{ width: '150px' }}>Circulating Supply</td>
            <td style={{ width: '15px' }}>:</td>
            <td> 2,541,152,731.00 WZNX</td>
          </tr>
        </tbody>
      </table>
      <p className={classes.infodata}>
        Market Data Source: <StyledLink>Coinmarketcap</StyledLink>
      </p>
      <p className={classes.infodata1}>
        Update? Click here to <StyledLink>update</StyledLink> the token ICO / general information
      </p>
    </div>
  )
}
