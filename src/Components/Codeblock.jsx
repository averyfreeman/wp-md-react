import SyntaxHighlighter from 'react-syntax-highlighter';
// import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

let a = 5;
let b = 2;
const multiplier = (a, b) => a * b;
console.log(multiplier(a, b).toString());

const Codeblock = (props) => {
  // prettier-ignore
  const codeString = 'const multiplier = (a,b) => a * b;'
  return (
    <div>
      <SyntaxHighlighter
        className="code-block"
        language="javascript"
        // style={a11yDark}
        style={props.mode}
        text={Codeblock}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Codeblock;
