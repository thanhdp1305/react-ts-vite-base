import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/css/form.css'
import serviceWorker from './serviceWorker'
import { AppProvider } from './providers/AppProvider.tsx'
import { AuthProvider } from './providers/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AppProvider>,
)
serviceWorker()
