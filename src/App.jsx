import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './pages/Create'
import Notes from './pages/Notes'
import Nav from './pages/Nav'
// import {createMuiTheme, ThemProvider} from "@mui/material";

// const theme = createMuiTheme({
//     Palette: {
//         primary: {
//             main: '#1976d2',
//         },
//         secondary: {
//             main: '#dc004e',
//         },
//     }
// })

function App() {
  return (
    <>
      {/* <ThemProvider theme={theme}> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
      {/* </ThemProvider> */}
    </>
  )
}

export default App
