import React, { useState } from 'react'

//material-ui components
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Checkbox } from '@material-ui/core'
import axios from 'axios'

import { isEmptyObject } from '../../../../../../common/utils'
import { BackendURL } from '../../../../../../config/config'
import useStyles from './ModalStyle'

import { Button, InputBase } from '@material-ui/core'

interface ViewModalProps {
  id: string
  name: string
  email: string
  selectValue: string
  link: string
  nameTag: any
}

export default function ViewModal({ id, name, email, selectValue, link, nameTag }: ViewModalProps) {
  const classes = useStyles()

  var parse_data = JSON.parse(nameTag)
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(parse_data)

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)

    let temp_data = JSON.parse(nameTag)
    setData(temp_data)
  }

  const handleSave = async (e: any) => {
    var postData = {
      'id': id,
      'data': data
    }

    await axios.post(`${BackendURL}/admin/updateNameTag/`, postData)
    setOpen(false)
  }

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>, key: number) => {
    const newData = [...data]
    newData[key].isApproved = (e.target as HTMLInputElement).checked
    setData(newData)
  }
  console.log(selectValue)
  var type = ''
  if (selectValue === '1')
    type = 'Owner'
  else if (selectValue === '2')
    type = 'User'

  return (
    <div>
      <Button onClick={handleOpen} className={classes.viewBtn} disableRipple>
        <span>View</span>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
        <DialogTitle id="form-dialog-title">Name Tagging</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div className={classes.modalSubtitle}>Name :</div>
              <InputBase value={name} fullWidth readOnly className={classes.inputField} />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.modalSubtitle}>Email :</div>
              <InputBase fullWidth value={email} readOnly className={classes.inputField} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div className={classes.modalSubtitle}> Owner / User :</div>
              <InputBase value={type} fullWidth readOnly className={classes.inputField} />
            </Grid>
            <Grid item xs={6}>
              <div className={classes.modalSubtitle}> Link :</div>
              <InputBase fullWidth value={link} readOnly className={classes.inputField} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Address</TableCell>
                    <TableCell>NameTag</TableCell>
                    <TableCell>WebSite</TableCell>
                    <TableCell>CategoryLabel</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Approve</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!isEmptyObject(data) &&
                    data.map((row: any, key: any) => {
                      return (
                        <TableRow key={key}>
                          <TableCell>{row.address}</TableCell>
                          <TableCell>{row.nameTag}</TableCell>
                          <TableCell>{row.website}</TableCell>
                          <TableCell>{row.categoryLabel}</TableCell>
                          <TableCell>{row.shortDesc}</TableCell>
                          <TableCell>
                            <Checkbox
                              className={classes.checkbox}
                              checked={row.isApproved}
                              onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleChange(e, key)}
                            />
                          </TableCell>
                        </TableRow>
                      )
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} className={classes.viewBtn}>
            Save
          </Button>
          <Button onClick={handleClose} className={classes.sendBtn}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
