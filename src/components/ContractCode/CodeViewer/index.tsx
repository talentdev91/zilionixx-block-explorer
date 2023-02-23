import React from 'react'
import DescriptionIcon from '@material-ui/icons/Description'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './styles'
// import DropDownMenu from '../../DropDownMenu/DropDownMenu'
import classNames from 'classnames'

export const CodeViewer: React.FC = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.inline}>
        <div className={classNames(classes.pullLeft, classes.inline)}>
          <DescriptionIcon style={{ fontSize: 15 }} />
          <Typography variant="body2">
            <strong>Contract Source Code</strong>(Solidity)
          </Typography>
        </div>
        <div className={classes.pullRight}>{/* <DropDownMenu /> */}</div>
      </div>
    </div>
  )
}
