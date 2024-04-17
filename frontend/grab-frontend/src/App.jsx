// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { ThemeProvider } from '@mui/material'
import './App.css'
// import Header from './components/Header/Header'
// import Main from './components/Main/Main'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/routes/Router'
import theme from './themes/theme'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Router />
//     </BrowserRouter>
//   )
// }

// function App() {

//   return (
//     <>
//       <Header />
//       <Main />
//     </>
//   )
// }

export default App
