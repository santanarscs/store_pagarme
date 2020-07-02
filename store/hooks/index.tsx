import React from 'react'

import { CartProvider } from './cart'
import { AuthProvider } from './auth'

const AppProvider: React.FC = ({children}) => (
  <CartProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </CartProvider>
)
export default AppProvider;