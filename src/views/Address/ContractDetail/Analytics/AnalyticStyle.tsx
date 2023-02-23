import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '.75rem!important',
      backgroundColor: theme.palette.primary.light,
      border: `1px solid ${theme.palette.secondary.light}`,
      borderRadius: '8px',
      boxShadow: 'none',
    },
    znxtop: {
      display: 'flex',
      marginBottom: '.75rem!important',
    },
    znxtopright: {
      marginLeft: 'auto',
      color: '#77838f!important',
    },
    circle: {
      color: '#3498db',
      marginRight: '4px',
    },
    rectangleIcon: {
      color: 'rgb(67, 67, 72)',
      marginRight: '4px',
    },
    znxfont1: {
      color: theme.palette.text.primary,
      fontWeight: 700,
      marginTop: '0!important',
      marginBottom: '.25rem!important',
    },
    znxfont2: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
      fontWeight: 400,
      fontSize: '80%',
      marginTop: '0!important',
      marginBottom: '.25rem!important',
    },
    znxfont3: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
      fontWeight: 700,
      fontSize: '.875rem',
      marginTop: '0!important',
      marginBottom: '.4rem!important',
    },
    chartContent: {
      paddingRight: '2rem',
      paddingLeft: '1rem',
      border: `1px solid ${theme.palette.secondary.light}`,
      paddingTop: '0.75rem !important',
    },
    startContent: {
      borderLeft: 'none',
      [theme.breakpoints.down('md')]: {
        borderRight: 'none',
      },
    },
    middleContent: {
      [theme.breakpoints.down('md')]: {
        borderLeft: 'none',
        borderRight: 'none',
      },
    },
    endContent: {
      borderRight: 'none',
      [theme.breakpoints.down('sm')]: {
        borderLeft: 'none',
      },
    },
    highChart: {
      '& .highcharts-background': {
        fill: `${localStorage.appTheme === 'darkTheme' ? '#212121!important' : '#fff!important'}`,
      },
      '& .highcharts-title': {
        fill: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df!important' : '#333333!important'}`,
        fontSize: '12px!important',
      },
      '& .highcharts-subtitle': {
        fill: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df!important' : '#666666!important'}`,
        fontSize: '12px!important',
      },
      '& .highcharts-label > text': {
        fill: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df!important' : '#666666!important'}`,
        fontSize: '12px!important',
      },
      '& .highcharts-button-normal > rect': {
        fill: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.1)!important' : 'rgb(247, 247, 247)!important'}`,
        stroke: `${localStorage.appTheme === 'darkTheme' ? '#3f3f3f!important' : 'rgb(247, 247, 247)!important'}`,
      },
      '& .highcharts-button-normal > text': {
        fill: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df!important' : '#333333!important'}`,
      },
      '& .highcharts-button-pressed > rect': {
        fill: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)!important' : 'rgb(230, 235, 245)!important'}`,
        stroke: `${localStorage.appTheme === 'darkTheme' ? '#3f3f3f!important' : 'rgb(247, 247, 247)!important'}`,
      },
      '& .highcharts-button-pressed > text': {
        fill: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df!important' : '#333333!important'}`,
      },
      '& .highcharts-range-input > rect': {
        stroke: `${localStorage.appTheme === 'darkTheme' ? '#323232!important' : 'rgb(204, 204, 204);!important'}`,
      },
      '& .highcharts-range-input > text': {
        fill: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df!important' : '#333333!important'}`,
      },
      '& .highcharts-axis-labels > text': {
        fill: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df!important' : '#333333!important'}`,
      },
      '& .highcharts-legend-item > text': {
        fill: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df!important' : '#333333!important'}`,
      },
      '& .highcharts-axis > text': {
        fill: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df!important' : '#333333!important'}`,
      },
      '& .highcharts-tooltip-box > path': {
        fill: `${localStorage.appTheme === 'darkTheme' ? '#252525!important' : '#333333!important'}`,
      },
    }
  }),
)
export default useStyles

export const StyledPage = styled.div`
  padding-right: 2rem;
  padding-left: 2rem;
  border: 1px solid #e7eaf3;
  border-left: none;
  padding-top: 0.75rem !important;
`
export const StyledPageLeft = styled.div`
  padding-right: 2rem;
  border: 1px solid #e7eaf3;
  border-left: none;
  padding-top: 0.75rem !important;
`
export const StyledPageRight = styled.div`
  padding-right: 2rem;
  padding-left: 2rem;
  border: 1px solid #e7eaf3;
  border-left: none;
  border-right: none;
  padding-top: 0.75rem !important;
`
