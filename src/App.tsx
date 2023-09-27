import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TestPage from '@pages/Test'
import HotelListPage from '@pages/HotelList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelListPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
