import { Link } from 'react-router';

function HomePage(props) {
  if (props.children === "Kyle Lane") {
    return <h1><Link to="/">Kyle Lane</Link></h1>;
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
        <h1>Hello, I'm Kyle Lane.</h1>
        <h2>I am a Full Stack Software Developer!</h2>
      </div>
    );
  }
}

export default HomePage;