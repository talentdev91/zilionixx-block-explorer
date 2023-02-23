import React from 'react'
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import MuiOutlinedInput from '@material-ui/core/OutlinedInput'
import MuiButton from '@material-ui/core/Button'
import { FormControl, Box } from '@material-ui/core'
import axios from 'axios'
import { useParams } from 'react-router'
import Web3 from 'web3'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%',
    },
    error: {
      color: 'red',
    },
  }),
)

const OutlinedInput = withStyles({
  root: {
    borderWidth: 0,
  },
  input: {
    padding: '.5rem .5rem',
  },
})(MuiOutlinedInput)

const Button = withStyles({
  root: {
    borderWidth: 0,
    padding: '.375rem .75rem',
    border: `${localStorage.appTheme === 'darkTheme' ? 'none' : '1px solid grey !important'}`,
    borderRadius: '.25rem',
    background: `${localStorage.appTheme === 'darkTheme' ? '#27343d' : '#f8f9fa'}`,
    '&:hover': {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#3498db' : '#e2e6ea'}`,
    },
  },
})(MuiButton)

interface QueryFormProps {
  queryInputForms: {
    id: string
    label: string
    placeholder: string
  }[]
  apiUrl: string
  panelTitle: string
  type: string
  abi: any
  metamaskAddress: any
}

export const ContractQueryForm: React.FC<QueryFormProps> = ({
  queryInputForms,
  apiUrl,
  panelTitle,
  type,
  abi,
  metamaskAddress,
}) => {
  const { address } = useParams<any>()

  const classes = useStyles()
  var initQuerys = {}
  for (let i = 0; i < queryInputForms.length; i++) {
    initQuerys[queryInputForms[i].label] = ''
  }
  const [error, setError] = React.useState('')

  const [querys, setQuerys] = React.useState(initQuerys)
  const [queryResult, setQueryResult] = React.useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    var countError = 0
    var totalCount = 0
    for (const property in querys) {
      if (querys[property] === undefined || querys[property] === '') {
        countError += 1
      }
      totalCount += 1
    }
    if (countError > 0) {
      let msg =
        'Error: Invalid number of parameters for ' +
        panelTitle +
        '. Got ' +
        (totalCount - countError).toString() +
        ' expected ' +
        totalCount.toString() +
        '!'
      setError(msg)
    } else {
      var query
      if (type === 'read') {
        setError('')
        query = { method_name: panelTitle }
        for (const k in querys) {
          let type = k.split(' ')[0]
          query[type] = querys[k]
        }

        axios
          .post(apiUrl, { query: query })
          .then(function (response) {
            if (response.data.success && 'result' in response.data) {
              let result = JSON.stringify(JSON.parse(response.data.result))
              setQueryResult(result)
            }
          })
          .catch(function (error) { })
      } else if (type === 'write') {
        setError('')
        query = { method_name: panelTitle }
        for (const k in querys) {
          let type = k.split(' ')[0]
          query[type] = querys[k]
        }
        var web3 = new Web3(window.ethereum)
        var newContract = new web3.eth.Contract(abi, address)

        for (let i = 0; i < abi.length; i++) {
          var abi_item = abi[i]
          if (!('name' in abi_item)) {
            continue
          } else {
          }

          var queryParams = []
          if (abi_item['name'] === query['method_name']) {
            var queryMethodString = abi_item['name'] + '('
            for (let j = 0; j < abi_item['inputs'].length; j++) {
              if (abi_item['inputs'].length === j + 1) {
                queryMethodString += abi_item['inputs'][j]['type']
              } else {
                queryMethodString += abi_item['inputs'][j]['type'] + ','
              }
              queryParams.push(query[abi_item['inputs'][j]['name']])
            }
            queryMethodString += ')'
            await newContract.methods[queryMethodString]
              .apply(this, queryParams)
              .send({ from: metamaskAddress })
              .on('receipt', function (receipt: any) {
                setQueryResult('Transaction success! Tranaction hash is: ' + receipt.transactionHash)
              })
              .on('error', function (error, receipt) {
                setError(JSON.stringify(error))
              })
          }
        }
      }
    }
  }
  const handleChange = (e: any, label: string) => {
    let tmpQuerys = querys
    tmpQuerys[label] = e.target.value
    setQuerys(tmpQuerys)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        {queryInputForms.map((input) => {
          return (
            <div key={input.id}>
              <p>{input.label}</p>
              <FormControl fullWidth>
                <OutlinedInput onChange={(e) => handleChange(e, input.label)} placeholder={input.placeholder} />
              </FormControl>
            </div>
          )
        })}
        <Box mt={1} mb={1}>
          <Button type="submit">
            <span>Query</span>
          </Button>
        </Box>
        &nbsp;<span className={classes.error}>{error}</span>
        <br></br>
        &nbsp;<span>{queryResult}</span>
        <br></br>
      </form>
    </div>
  )
}
