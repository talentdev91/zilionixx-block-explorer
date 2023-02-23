import { Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
    container: {
        [theme.breakpoints.up('md')]: {
            padding: '4.5rem 15px'
        },
        [theme.breakpoints.down('md')]: {
            padding: '4.5rem 45px'
        },
    },
    content: {
        [theme.breakpoints.up('md')]: {
            width: '80%'
        },
        marginLeft: 'auto',
        marginRight: 'auto',
        '& *, :after, :before': {
            boxSizing: 'border-box',
        },
        lineHeight: '1.7',
        fontSize: '.875rem!important',
        fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
        color: theme.palette.primary.contrastText,
        backgroundColor: 'white',
        boxShadow: `${localStorage.appTheme === 'darkTheme'
            ? '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)'
            : '0 0.5rem 1.2rem rgb(189 197 209 / 6%)'
            }`,
        border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232 !important' : '#e7eaf3 !important'}`,
        borderRadius: '8px',
    },
    header: {
        [theme.breakpoints.up('sm')]: {
            padding: '3.25rem 4rem'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '2rem 1.25rem'
        },
        backgroundColor: '#12161c!important',
        width: '100%',
    },
    title: {
        fontSize: '2.1875rem',
        color: 'white',
        margin: '0rem 0rem 0.5rem 0rem',
    },
    subTitle: {
        margin: '0 0 1rem 0'
    },
    body: {
        [theme.breakpoints.up('sm')]: {
            padding: '4rem'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '1.25rem'
        },
    },
    md5: {
        marginBottom: '3rem'
    },
    bodyTitle: {
        marginBottom: '0.75rem',
        color: theme.palette.text.primary,
        fontWeight: 400,
    },
    link: {
        color: theme.palette.info.main,
        alignSelf: 'end',
        textDecoration: 'none',
        lineHeight: 1.5,
        '&:hover': {
            color: theme.palette.info.dark,
        },
    },
}))