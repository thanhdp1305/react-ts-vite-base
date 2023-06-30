import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import registerServiceWorker from './registerServiceWorker'
import { AppProvider } from './providers/AppProvider.tsx'
import { AuthProvider } from './providers/AuthProvider.tsx'

import './index.css'
import './assets/css/form.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AppProvider>
)
registerServiceWorker()
