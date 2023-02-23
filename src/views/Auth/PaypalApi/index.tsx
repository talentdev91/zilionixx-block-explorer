import React from 'react'
import { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PayPalButton } from "react-paypal-button-v2";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import axios from 'axios'
import { connect } from 'react-redux'

import { PAYPAL_CLIENT_ID } from '../../../common/consts'
import TableSpinner from '../../../components/Spinner/TableSpinner'
import { BackendURL, BackendUploadURL } from '../../../config/config'
import { useStyles } from './Style'
import { listAllApiKeys } from '../../../store/actions/user'
import { AppState } from '../../../store/configureStore'

interface PaypalApiProps {
    listAllApiKeys: (username: string) => void
    user: any
    loading: boolean
    apiKeys: any
    totalCount: any
    error: any
  }

function PaypalApi({ listAllApiKeys, user, loading, apiKeys, totalCount, error }: PaypalApiProps) {
    const classes = useStyles()
    const [valSelected, setSelect] = useState(1)
    const [verifyAmount, setVerifyAmount] = useState("0")
    const [loadingPaypal, setLoadingPaypal] = useState(true)

    useEffect(() => {
        listAllApiKeys( user.name)
    }, [])

    const OnClickSel1 = () => {
        setSelect(1)
        setVerifyAmount("0")
    }
    const OnClickSel2 = () => {
        setSelect(2)
        setVerifyAmount("199")
    }
    const OnClickSel3 = () => {
        setSelect(3)
        setVerifyAmount("299")
    }
    const OnClickSel4 = () => {
        setSelect(4)
        setVerifyAmount("399")
    }

    const paypalSuccess = async (details: any, data: any) => {
        setLoadingPaypal(false);

        window.alert("Transaction completed by " + details.payer.name.given_name);
        var orderID = data.orderID

        if(apiKeys.length === 0 || apiKeys.length === undefined)
            return;

        var BackUrl = BackendURL
        BackUrl += '/user/apikeys/paypal'
        var req = { name:user.name, type: valSelected, verifyAmount:verifyAmount, orderID:orderID }

        axios.post(BackUrl, req)
        .then(function (response) {
            const { success, data } = response.data;;
        })
        .catch(function (error) {
            alert(error);
        })
    };

    return (
        <Grid>
            <Grid className={classes.container}>
                <Grid className={classes.root}>
                    {
                        valSelected === 1 ?
                        (
                            <Grid className={classes.divselected}>
                                SELECTED
                            </Grid>
                        )
                        :
                        <div></div>
                    }
                    <Grid className={classes.divheader}>
                        <Typography className={classes.headertitle}> FREE </Typography>
                        <Typography className={classes.headermoney}> $0 </Typography>
                        <Typography className={classes.headerdescri}> 
                            Suitable for independent projects. Community driven, hassle-free plan.
                        </Typography>
                    </Grid>
                    <Grid className={classes.divbody}>
                        <ul className={classes.liststyle}>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                5 calls/second limit
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                Up to 100,000 API calls per day
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                All existing community endpoints
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                Community support
                            </li>
                        </ul>
                    </Grid>
                    <Grid className={classes.divbutton}>
                        <Button variant="contained" size="medium" className={classes.btnStyle} onClick={OnClickSel1}>
                            Select
                        </Button>
                    </Grid>
                </Grid>
                <Grid className={classes.root}>
                    {
                        valSelected === 2 ?
                        (
                            <Grid className={classes.divselected}>
                                SELECTED
                            </Grid>
                        )
                        :
                        <div></div>
                    }
                    <Grid className={classes.divheader}>
                        <Typography className={classes.headertitle}> STANDARD </Typography>
                        <Typography className={classes.headermoney}> $199/ mo </Typography>
                        <Typography className={classes.headerdescri}> 
                            Great for BSC applications. Same reliable data with better rate limit.
                        </Typography>
                    </Grid>
                    <Grid className={classes.divbody}>
                        <ul className={classes.liststyle}>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                10 calls/second limit
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                Up to 200,000 API calls per day
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                All existing community endpoints
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                Access to API Pro endpoints
                            </li>
                            <li className={classes.li_last_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                Escalated support
                            </li>
                        </ul>
                    </Grid>
                    <Grid className={classes.divbutton}>
                        <Button variant="contained" size="medium" className={classes.btnStyle} onClick={OnClickSel2}>
                            Select
                        </Button>
                    </Grid>
                </Grid>
                <Grid className={classes.root}>
                    {
                        valSelected === 3 ?
                        (
                            <Grid className={classes.divselected}>
                                SELECTED
                            </Grid>
                        )
                        :
                        <div></div>
                    }
                    <Grid className={classes.divheader}>
                        <Typography className={classes.headertitle}> ADVANCED </Typography>
                        <Typography className={classes.headermoney}> $299/ mo </Typography>
                        <Typography className={classes.headerdescri}> 
                            High rate limit, perfect for applications utilizing large amounts of BSC data.
                        </Typography>
                    </Grid>
                    <Grid className={classes.divbody}>
                        <ul className={classes.liststyle}>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                20 calls/second limit
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                Up to 500,000 API calls per day
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                All existing community endpoints
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                Access to API Pro endpoints
                            </li>
                            <li className={classes.li_last_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                Escalated support
                            </li>
                        </ul>
                    </Grid>
                    <Grid className={classes.divbutton}>
                        <Button variant="contained" size="medium" className={classes.btnStyle} onClick={OnClickSel3}>
                            Select
                        </Button>
                    </Grid>
                </Grid>
                <Grid className={classes.root}>
                    {
                        valSelected === 4 ?
                        (
                            <Grid className={classes.divselected}>
                                SELECTED
                            </Grid>
                        )
                        :
                        <div></div>
                    }
                    <Grid className={classes.divheader}>
                        <Typography className={classes.headertitle}> PROFESSIONAL </Typography>
                        <Typography className={classes.headermoney}> $399/ mo </Typography>
                        <Typography className={classes.headerdescri}> 
                            Even higher rate limits, designed for applications that require massive scale.
                        </Typography>
                    </Grid>
                    <Grid className={classes.divbody}>
                        <ul className={classes.liststyle}>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                30 calls/second limit
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                Up to 1,000,000 API calls per day
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                All existing community endpoints
                            </li>
                            <li className={classes.li_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                Access to API Pro endpoints
                            </li>
                            <li className={classes.li_last_style}>
                                <CheckIcon className={classes.icon_style} fontSize="small" />
                                Escalated support
                            </li>
                        </ul>
                    </Grid>
                    <Grid className={classes.divbutton}>
                        <Button variant="contained" size="medium" className={classes.btnStyle} onClick={OnClickSel4}>
                            Select
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.payContainer}>
                {
                    loadingPaypal ?
                    (
                        <CircularProgress className={classes.loading} />
                    )
                    :
                    (
                        <PayPalButton
                            amount={verifyAmount}
                            onSuccess={paypalSuccess}
                            catchError={(err: object) => {
                                console.log("failed");
                            }}
                            onError={(err: object) => {
                                console.log("failed");
                            }}
                            options={{
                                clientId: PAYPAL_CLIENT_ID.clientId,
                            }}
                        />
                    )
                }
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state: AppState) => ({
    loading: state.user.apiKeyLoading,
    apiKeys: state.user.apiKeySuccessResponse,
    totalCount: state.user.apiKeyTotalCount,
    error: state.user.apiKeyError,
    user: state.auth.user,
  })
  export default connect(mapStateToProps, { listAllApiKeys })(PaypalApi)
  