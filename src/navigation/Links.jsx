import { Link } from 'react-router-dom';
import 'vectors/react-logo.svg';
import 'navigation/Links.css';

export const Links = () => {
  return (
    <div className="navbar navbar-default">
      <div className="container justify-content-between">
        <a href="/" className="navbar-brand fs-2">
          <span className="cursor">
            <i className="carousel-control-next-icon"></i>
          </span>
        </a>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/wpposts">
          WP Posts
        </Link>
      </div>
    </div>
  );
};
