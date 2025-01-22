// import headerImg from '../../assets/Header.jpg';
// Add an image. Call it header.jpg and place it in the assets folder.
function Header(props) { 
  return (
    <header>
      <h1>Kyle Lane</h1>
      {/* <img src={headerImg}  alt="Header Image"></img> */}
      {props.children}
    </header>
  );
} 
export default Header
