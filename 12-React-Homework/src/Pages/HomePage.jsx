import { Link } from 'react-router';

function HomePage (props) {
    if (props.children === "Kyle Lane") {
    return <h1> <Link to = "/">Kyle Lane</Link></h1>
    } else {
     return   <h1>Hello, I'm Kyle Lane. I am a Full Stack Software Developer!</h1>
}}

export default HomePage