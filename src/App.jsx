import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Links } from 'navigation/Links';
import { Header } from 'Pages/Elements/Header';
import { Footer } from 'Pages/Elements/Footer';
import Article from 'Pages/WPArticle';
import PostStateLogic from 'lib/PostStateLogic';

const App = () => {
  return (
    <Router>
      <Links />
      <Header />
      <Switch>
        <Route path="/wpposts" component={PostStateLogic} />
        <Route path="/articles/:id" component={Article} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
