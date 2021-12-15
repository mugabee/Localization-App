import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import theme from './theme';
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Signup from './components/Signup';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
       <Routes>
       <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                    
                  </ProtectedRoute>
                }
              />
               <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
       </Routes>
       </Router>
      <Reset />
    </ThemeProvider>
  );
}

export default App;
