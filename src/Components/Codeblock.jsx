import { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { sampleCode } from 'content/sampleCode';

SyntaxHighlighter.registerLanguage('javascript', js);

const Codeblock = (props) => {
  const [mode, setMode] = useState(a11yDark);

  const toggleMode = () => {
    setMode(mode === a11yDark ? a11yLight : a11yDark);
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-sm btn-warning text-strong fs-3 fw-bolder mb-2"
          htmlFor="A button that changes the brightness of a block of code"
          onClick={toggleMode}
        >
          Toggle codeblock mode
        </button>
      </div>
      <div>
        <SyntaxHighlighter
          className="code-block"
          language="javascript"
          style={mode}
          wrapLongLines={true}
        >
          {sampleCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Codeblock;
