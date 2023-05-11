import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div className='containerHome'>
      <h1>Página Inicial</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/taskstable">Tasks Table</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;