import { Box, useColorModeValue } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import CreatePage from './pages/CreatePage.jsx'
import HomePage from './pages/HomePage.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <Box 
      minH={"100vh"} 
      bg={useColorModeValue(
        "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", 
        "linear-gradient(135deg, #1a202c 0%, #2d3748 100%)"
      )}
    >
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App