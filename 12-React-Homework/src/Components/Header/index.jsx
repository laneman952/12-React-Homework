// import headerImg from '../../assets/Header.jpg';

import HomePage from "../../Pages/HomePage";

// Add an image. Call it header.jpg and place it in the assets folder.
function Header(props) { 
  return (
    <header>
      <HomePage>Kyle Lane</HomePage>
      {/* <img src={headerImg}  alt="Header Image"></img> */}
      {props.children}
    </header>
  );
} 
export default Header
