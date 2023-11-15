import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { AlertProvider } from './hook/useAlert'
import GlobalStyles from './styles/GlobalStyles'
import AppRoutes from './AppRoutes'

const App = () => {
  return (
    <AlertProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </AlertProvider>
  )
}

export default App
