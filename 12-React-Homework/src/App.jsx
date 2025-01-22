import { Outlet } from 'react-router'
import Header from './Components/Header'
import Footer from './Components/Footer'

import './App.css'
import Nav from './Components/Nav'
import { useLocation } from 'react-router'

function App() {
  const currentPage = useLocation().pathname
  return (
    <>
      <Header>
        <Nav currentPage = {currentPage} />
      </Header>
      <main>
      <h1>Kyle Lane</h1>
      <Outlet />
    </main>
    <Footer />
    </> 
  );
}

export default App
