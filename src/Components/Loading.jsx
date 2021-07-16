// import 'Pages/Elements/Header.css';

export const Loading = ({ page }) => (
  <div className="jumbotron center-column container">
    <h3 className="dramatic">Still loading {page}, sorry...</h3>
    <h4>Maybe try refreshing page... (?)</h4>
  </div>
);
