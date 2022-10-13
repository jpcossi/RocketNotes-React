import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { ThemeProvider } from 'styled-components'
import { App } from './Pages/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <App />
    </ThemeProvider> 
  </React.StrictMode>
)
