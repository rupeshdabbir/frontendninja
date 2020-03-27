import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CodeBlock from '../../components/CodeBlock/index';

const useStyles = makeStyles({
  root: {
    minWidth: '275',
    width: '450%',
  },

  body: {
    width: '100%',
  },
});

const question1 = `
Implement clearAllTimeout

let id = setTimeout(callback, delay);
clearTimeout(id);

setTimeout(callback, delay);
setTimeout(callback, delay);
setTimeout(callback, delay);
`;

export default function SimpleCard(props) {
  const classes = useStyles();
  const question = props.question;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.body}>
        <CodeBlock
          code={question1}
          language="javascript"
          showLineNumbers="false"
        />
      </CardContent>
      <CardActions>
        <Button size="small">Learn about clearTimeout</Button>
      </CardActions>
    </Card>
  );
}
