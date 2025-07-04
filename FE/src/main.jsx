import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WishlistProvider from './Context/WishlistProvider.jsx'
import UserContextProvider from './Context/UserContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </UserContextProvider>
  </StrictMode>,
)
