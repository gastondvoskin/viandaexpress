import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <h3>NIY: This is the Home.</h3>
            <Link to="/dashboard"><button>Dashboard</button></Link>
        </div>
    )
};
  
export default Home;
  