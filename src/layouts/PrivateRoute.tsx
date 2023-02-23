/* eslint-disable */
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../store/configureStore'
interface PrivateRouteProps {
  component: any
  auth: boolean
}

function PrivateRoute({ component: Component, auth }: PrivateRouteProps) {
  return (
    <Route
      render={(props) =>
        auth === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

const mapStateToProps = (state: AppState) => ({
  auth: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(PrivateRoute)
