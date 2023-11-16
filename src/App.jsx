import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { AlertProvider } from './hook/useAlert'
import GlobalStyles from './styles/GlobalStyles'
import AppRoutes from './AppRoutes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AlertProvider>
        <AppRoutes />
      </AlertProvider>
    </ThemeProvider>
  )
}

export default App
