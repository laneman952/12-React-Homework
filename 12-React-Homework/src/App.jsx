import { Outlet } from 'react-router'
import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
      <h1>Kyle Lane</h1>
      <Outlet />
    </main>
    <Footer />
    </> 
  );
}

export default App
