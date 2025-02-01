

function Header(props) { 
  return (
    <header>
      <a href="/" className="home-link">
        <h1>Kyle Lane</h1>
      </a>
      {props.children}
    </header>
  );
} 
export default Header
