import { Link } from 'react-router-dom';
import Navbar from '../UI/Navbar';

function Nav({currentPage}) {
  const pages = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <nav>
      <ul>
        <li className = {`mx-5 ${currentPage === '/' && 'navActive'}`}>

        </li>
      </ul>
    </nav>
  );
}
