import { Link } from 'react-router-dom';

import '../styles/layout/Landing.scss';

const Landing = () => {
  return (
    <div className="landing">
      <p className="landing__title">
        Discover more about
        <span className="landing__title--strong">Rick and Morty</span>
      </p>
      <Link className="landing__btn" to="/Home">
        more
      </Link>
    </div>
  );
};
export default Landing;
