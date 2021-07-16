import { Title } from 'Pages/Elements/Title';
import wpicon from 'vectors/wpicon.svg';
import 'Pages/Elements/Header.css';

export const Header = () => (
  <div className="App">
    <header className="App-header">
      <Title />
      <img src={wpicon} className="App-logo block-margin" alt="Spinning wordpress logo" />
    </header>
  </div>
);
