import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

function CodeBlockComponent({ code, language, showLineNumbers }) {
  console.log('Rupesh Code', code, language, showLineNumbers);

  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
      wrapLines
    />
  );
}
export default CodeBlockComponent;
