import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dialog: {
            '& .MuiDialog-paper': {
                width: '100%',
                backgroundColor: theme.palette.primary.main,
                color: theme.typography.body1.color,
            },
            fontSize: '.875rem'
        },
        formItem: {
            marginBottom: '1rem',
        },
        title: {
            color: theme.palette.text.primary,
            fontSize: '.875rem!important',
        },
        modalSubtitle: {
            marginTop: '20px',
        },
        deleteAddress: {
            color: theme.palette.text.primary,
        },
        inputField: {
            width: '100%',
            height: 36,
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
        smallTitle: {
            color: theme.palette.text.primary,
            fontSize: '.75rem',
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
    }),
)
export default useStyles