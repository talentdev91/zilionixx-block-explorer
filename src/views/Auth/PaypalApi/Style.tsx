import { makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
    container: {
        [theme.breakpoints.up('md')]: {
            paddingTop: '4.5rem',
            paddingRight: '15px',
            paddingLeft: '15px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '4.5rem',
            paddingRight: '15px',
            paddingLeft: '15px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
    },
    payContainer: {
        [theme.breakpoints.up('md')]: {
            paddingBottom: '15px',
            display: 'flex',
            justifyContent: 'center',
        },
        [theme.breakpoints.down('md')]: {
            paddingBottom: '15px',
            display: 'flex',
            justifyContent: 'center',
        },
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        maxWidth: 310,
        backgroundColor: theme.palette.primary.main,
        borderColor: `${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
        borderRadius: '0.5rem',
        border: '1px solid #e7eaf3',
        borderTopWidth: 5,
        boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)',
        marginBottom: '3rem',
        marginTop: '-0.4rem',
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
        boxSizing: 'border-box',
        transition: '0.3s',
        '&:hover': {
            borderColor: `${localStorage.appTheme === 'darkTheme' ? 'none' : '#BADEFE'}`,
        },
    },
    divselected: {
        color: 'white',
        backgroundColor: '#3498db',
        zIndex: 3,
        padding: '0.5rem',
        paddingTop: '0.75rem',
        borderTopLeftRadius: '0.5em',
        borderTopRightRadius: '0.5em',
        fontSize: '0.8em',
        textAlign: 'center',
        marginTop: '-2.7em',
        marginLeft: '-0.07em',
        marginRight: '-0.07em',
    },
    divheader: {
        borderRadius: 'calc(.5rem - 1px) calc(.5rem - 1px) 0 0',
        padding: '1.25rem',
        borderBottom: '1px solid #e7eaf3',
    },
    divbody: {
        flex: '1 1 auto',
        padding: '1.25rem',
        minHeight: 1,
    },
    divbutton: {
        padding: '1.25rem',
        textAlign: 'center',
    },
    liststyle: {
        marginBottom: 0,
        marginTop: 0,
        paddingLeft: 0,
    },
    li_style: {
        marginBottom: '1rem',
        alignItems: 'baseline!important',
        display: 'flex!important',
        listStyle: 'none',
        color: theme.palette.text.primary,
        fontFamily: 'Helvetica,Arial,sans-serif',
        fontSize: '0.875rem',
    },
    li_last_style: {
        alignItems: 'baseline!important',
        display: 'flex!important',
        listStyle: 'none',
        color: theme.palette.text.primary,
        fontFamily: 'Helvetica,Arial,sans-serif',
        fontSize: '0.875rem',
    },
    icon_style: {
        marginRight: '0.5rem',
        paddingTop: '5px',
        color: theme.palette.text.primary,
    },
    headertitle: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        color: theme.palette.text.primary,
    },
    headermoney: {
        fontSize: '2.1875rem',
        color: theme.palette.text.primary,
    },
    headerdescri: {
        fontSize: '0.875rem',
        color: theme.palette.text.disabled,
    },
    btnStyle: {
        color: "white",
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
        '&:hover': {
            // borderColor: theme.palette.info.light,
            backgroundColor: "#3498db",
        },
    },
    loading: {
        color: `${localStorage.appTheme === 'darkTheme' ? 'white' : '#3498db'}`,
    }
}))