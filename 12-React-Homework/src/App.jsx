import { Outlet } from 'react-router'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
        <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App
