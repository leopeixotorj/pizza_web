import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router.jsx'
import store from './store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>,
)
