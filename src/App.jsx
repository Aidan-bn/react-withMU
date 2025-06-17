import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './pages/Create'
import Notes from './pages/Notes'
import Nav from './pages/Nav'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Nav />} />
          <Route path="/create" element={<Create />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
