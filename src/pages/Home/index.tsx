import React from 'react';
import { Link } from 'react-router-dom'

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Dale</h1>
      <Link to='/exercises'>Exercises</Link>
    </div>
  );
}

export default Home;