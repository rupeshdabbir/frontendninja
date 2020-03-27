import React from 'react';
import { render } from 'react-dom';
import AceEditor from 'react-ace';
import { makeStyles } from '@material-ui/core/styles';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-terminal';

function onChange(newValue) {
  console.log('change', newValue);
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '837px',
    //   837px
  },
}));

export default function CodeEditor(props) {
  const classes = useStyles();

  return (
    <AceEditor
      mode="javascript"
      theme="terminal"
      onChange={onChange}
      name="CODE_EDITOR"
      editorProps={{ $blockScrolling: true }}
      style={{ width: '837px' }}
    />
  );
}

// // Render editor
// render(
//   <AceEditor
//     mode="java"
//     theme="github"
//     onChange={onChange}
//     name="UNIQUE_ID_OF_DIV"
//     editorProps={{ $blockScrolling: true }}
//   />,
//   document.getElementById('example'),
// );
