import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        error: {
            color: 'red',
            marginLeft: 0,
        },
        dialog: {
            '& .MuiDialog-paper': {
                width: '100%',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.primary,
            },
            '& .MuiTypography-root': {
                fontSize: '.875rem'
            },
            '& .MuiDialogTitle-root': {
                borderBottom: `1px solid ${theme.palette.secondary.light}`
            },
            '& .MuiDialogActions-root': {
                borderTop: `1px solid ${theme.palette.secondary.light}`
            },
        },
        smallTitle: {
            color: theme.palette.text.primary,
            fontSize: '.75rem',
        },
        deleteAddress: {
            color: theme.palette.text.primary,
            fontSize: '.875rem',
        },
        modalSubtitle: {
            color: theme.palette.text.primary,
            fontSize: '.875rem',
            marginLeft: '10px',
        },
        tokenInfoField: {
            marginTop: '10px',
        },
        inputField: {
            marginTop: '5px',
            width: '100%',
            height: '36',
            padding: '5px 5px 5px 10px',
            borderRadius: '5px',
            color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
            backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
            border: `1px solid ${theme.palette.secondary.light}`,
            '&.Mui-focused': {
                boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
                border: `1px solid ${theme.palette.info.light}`,
                outline: 'none',
            },
        },
        textField: {
            minWidth: '100%',
            borderRadius: 5,
            resize: 'vertical',
            overflowY: 'auto',
            padding: '.75rem',
            fontSize: '.875rem',
            color: `${localStorage.appTheme === 'darkTheme' ? '#fff' : '#000'}`,
            backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
            border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
            '&:focus': {
                boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
                border: `1px solid ${theme.palette.info.light}`,
                outline: 'none',
            },
        },
        errorMessage: {
            color: '#de4437!important',
            marginTop: '0.25rem',
            fontSize: '80%',
        },
        addBtn: {
            cursor: 'pointer',
            lineHeight: '1.4',
            fontSize: '1rem',
            padding: '.3rem .6rem',
            borderRadius: '.25rem',
            textAlign: 'center',
            verticalAlign: 'middle',
            display: 'inline-block',
            marginTop: '5px',
            marginLeft: '15px',
            backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.7)' : '#3498db'}`,
            border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.7)' : '#3498db'}`,
            textTransform: 'none',
            color: '#fff',
            '&:hover': {
                boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
                backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#3498db' : '#3498db'}`,
            },
        },
        viewBtn: {
            cursor: 'pointer',
            fontSize: '.765625rem',
            padding: '.3rem .6rem',
            borderRadius: '.25rem',
            marginLeft: '.25rem',
            color: '#fff',
            backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : theme.palette.info.main}`,
            border: `0.5px solid rgba(52,152,219,.2)`,
            textAlign: 'center',
            verticalAlign: 'middle',
            display: 'inline-block',
            marginTop: '5px',
            textTransform: 'none',
            '&:hover': {
                backgroundColor: theme.palette.info.main,
                boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
            },
            '&:focus': {
                boxShadow: '0 0 0 0 transparent',
            },
        },
        sendBtn: {
            cursor: 'pointer',
            fontSize: '.765625rem',
            padding: '.3rem .6rem',
            borderRadius: '.25rem',
            marginLeft: '.25rem',
            textAlign: 'center',
            verticalAlign: 'middle',
            display: 'inline-block',
            marginTop: '5px',
            backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#244464' : '#77838f'}`,
            border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#244464' : '#77838f'}`,
            textTransform: 'none',
            color: '#fff',
            '&:hover': {
                boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
                backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#244464' : '#77838f'}`,
            },
        },
    }),
)
export default useStyles