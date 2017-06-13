// @flow
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import React from 'react';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Picture = (props: { img: string }) => (
  <div>
    <Paper zDepth={5} circle style={style}>
      <Avatar src={props.img} size={100} />
    </Paper>
  </div>
);

export default Picture;
