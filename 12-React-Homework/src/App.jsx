import { Outlet } from 'react-router'
import Header from './Components/Header'
import Footer from './Components/Footer'
import bodyImg from './assets/body.jpg';

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
      <main className="main-content">
      <Outlet />
      <img src={bodyImg}  alt="Body Image"></img>
    </main>
    <Footer />
    </> 
  );
}

export default App
