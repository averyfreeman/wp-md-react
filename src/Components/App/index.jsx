import { useState } from 'react';
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import chicken from 'vectors/hen-icon-by-icograms.svg';
import 'Components/App/App.css';
// import Codeblock from 'Components/Codeblock';
import Codeblock from 'Components/Codeblock';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const App = () => {
  const [mode, setMode] = useState(false);
  // const [mode, setMode] = useState(a11yDark);

  let theme = {};
  if (mode === false) {
    theme = a11yDark;
  } else {
    theme = a11yLight;
  }

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="jumbotron">
          <h1 className="dramatic">Dramatic Jumbotron!!</h1>
        </div>
        {/* hen icon by Icograms, licensed by Creative Commons */}
        <img src={chicken} className="App-logo" alt="Spinning chicken" />
        <div>
          <SwitchTransition>
            <CSSTransition
              addEndListener={(node, done) =>
                node.addEventListener('transitioned', done, false)
              }
              className="fade"
              key={mode}
            >
              <Codeblock mode={theme} />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div>
          <button
            className="btn btn-lg btn-warning m-5"
            htmlFor="A button that changes the brightness of a block of code"
            // onClick={() => setMode(mode === a11yDark ? a11yLight : a11yDark)}
            onClick={toggleMode}
          >
            Change mode
          </button>
        </div>
        <div>
          <a className="growing-link">Learn React</a>
        </div>
      </header>
    </div>
  );
};

export default App;
