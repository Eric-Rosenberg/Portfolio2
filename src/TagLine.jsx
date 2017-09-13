// @flow
import React from 'react';
import { green500, greenA200 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import TagLineDialogue from './TagLineDialogue';

const iconStyles = {
  paddingRight: 15,
  paddingLeft: 15,
  top: 3,
};

class TagLine extends React.Component {
  state: {
    open: boolean
  };
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
    };
  }
  onClose = (): void => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <FontIcon
          className="fa fa-terminal"
          style={{ left: '-5px', fontSize: '3.5em', cursor: 'pointer' }}
          color={green500}
          onClick={() =>
            this.setState({
              open: true,
            })}
          hoverColor={greenA200}
        />
        <TagLineDialogue open={this.state.open} handleClose={this.onClose} />
        <p style={{ margin: 0 }}>
          Athlete
          <FontIcon
            className="fa fa-futbol-o"
            color="white"
            style={iconStyles}
          />
          Coder
          <FontIcon
            className="fa fa-graduation-cap"
            color="white"
            style={iconStyles}
          />
          Scholar
        </p>
      </div>
    );
  }
}

export default TagLine;
