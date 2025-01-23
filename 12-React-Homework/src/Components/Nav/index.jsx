import { Link } from 'react-router';

function Nav({currentPage}) {
  const page = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <nav>
      <ul>
        {page .map(Page => (
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