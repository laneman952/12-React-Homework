import { Link } from 'react-router';
import Navbar from '../UI/Navbar';

function Nav({currentPage}) {
  const pages = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <nav>
      <ul>
        {pages.map(Page => (
          <li className = {`mx-5 ${currentPage === '/' && 'navActive'}`}
          key = {Page}
          >
            <Link to = {`/${Page}`}>{`${Page}`}</Link>
        </li>
        ))}
        
      </ul>
    </nav>
  );
}

export default Nav