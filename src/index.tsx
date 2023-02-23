import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import ThemeProvider from './theme/ThemeProvider'
import { ErrorBoundary } from 'react-error-boundary'

// core components
import Router from './layouts/Router'
import './index.css'
import GlobalError from './views/Error/GlobalError'

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <GlobalError message={error.message} refresh={resetErrorBoundary} />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router />
      </ErrorBoundary>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
