import { useHistory } from 'react-router';
import { Router } from '../constants/Router';

export const About = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(Router.Paths.Home);
  };

  return (
    <div>
      <h1>About page</h1>
      <p>The Beatles についてのページです。</p>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
};
