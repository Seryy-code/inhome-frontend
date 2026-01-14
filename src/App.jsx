import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider from '@/providers/AuthProvider'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'

import HomePage from '@/pages/Home/HomePage'
import SliderListPage from '@/pages/SliderList/SliderListPage'
import LoginPage from '@/pages/Login/LoginPage'
import ForgotPasswordPage from '@/pages/ForgotPassword/ForgotPasswordPage'
import ResetPasswordPage from '@/pages/ResetPassword/ResetPasswordPage'

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
                <SliderListPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/property-slides-test/:slug" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
