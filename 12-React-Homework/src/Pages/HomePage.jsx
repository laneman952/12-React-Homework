import { Link } from 'react-router';

function HomePage (props) {
    if (props.children === "Kyle Lane") {
    return <h1> <Link to = "/">Kyle Lane</Link></h1>
    } else {
     return   <h1>Home Page</h1>
}}

export default HomePage