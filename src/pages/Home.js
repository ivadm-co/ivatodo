import {Link} from "react-router-dom";


const Home = () => {
    return(
      <>
      <h1>House</h1>
      <li>
        <Link to="/urgent">Urgent todos</Link>
       <li><Link to="/daily">Daily todos</Link></li>
        <li><Link to="/casual">Casual todos</Link></li>
      </li>
      
      </>
    ) 
  };
  
  export default Home;