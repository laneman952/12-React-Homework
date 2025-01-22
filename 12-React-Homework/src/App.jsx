import { Outlet } from 'react-router'
import Header from './Components/Header'
import Footer from './Components/Footer'

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
