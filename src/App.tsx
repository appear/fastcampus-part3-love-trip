import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TestPage from '@pages/Test'
import HotelListPage from '@pages/HotelList'
import HotelPage from '@pages/Hotel'
import MyPage from '@pages/My'
import SigninPage from '@pages/Signin'
import AuthGuard from '@components/auth/AuthGuard'
import Navbar from '@shared/Navbar'

import useLoadKakao from '@hooks/useLoadKakao'

function App() {
  useLoadKakao()

  return (
    <BrowserRouter>
      <AuthGuard>
        <Navbar />
        <Routes>
          <Route path="/" element={<HotelListPage />} />
          <Route path="/hotel/:id" element={<HotelPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  )
}

export default App
