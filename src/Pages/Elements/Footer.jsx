import chicken from 'vectors/hen-icon-by-icograms.svg';
import 'Pages/Elements/Header.css';

export const Footer = () => (
  <footer className="mt-5">
    <div className="d-flex flex-row align-items-center justify-content-center">
      <img
        src={chicken}
        className="block-margin"
        alt="vector chicken"
        width="50px"
        height="50px"
      />
      &copy; {new Date().getFullYear()} happy chicken
    </div>
  </footer>
);
