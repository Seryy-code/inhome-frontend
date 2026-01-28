import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider from '@/providers/AuthProvider'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'

import HomePage from '@/app/home/HomePage'
import PropertyPage from '@/app/property/PropertyPage'
import LoginPage from '@/app/login/LoginPage'
import ForgotPasswordPage from '@/app/forgot-password/ForgotPasswordPage'
import ResetPasswordPage from '@/app/reset-password/ResetPasswordPage'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/property-slides-test/:slug" 
            element={
              <ProtectedRoute>
                <PropertyPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
