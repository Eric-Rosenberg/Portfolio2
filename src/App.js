// @flow
/* eslint react/jsx-filename-extension:0 react/prefer-stateless-function:0 */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FontIcon from 'material-ui/FontIcon';
import { green500, greenA200 } from 'material-ui/styles/colors';
import Picture from './Picture';
import TagLine from './TagLine';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    outline: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const iconStyles = {
  paddingRight: 25,
  paddingLeft: 5,
  top: 3,
  left: 8,
};

const dividerStyle = {
  width: '25%',
  marginTop: 30,
};

class App extends Component {
  render() {
    injectTapEventPlugin();
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <Picture img="me.jpg" />
          <h2>ERIC ROSENBERG</h2>
          <TagLine />
          <hr style={dividerStyle} />
          <div style={{ flexDirection: 'row' }}>
            <a href="https://github.com/Eric-Rosenberg">
              <FontIcon
                className="fa fa-github"
                color={green500}
                style={iconStyles}
                hoverColor={greenA200}
              />
            </a>
            <a href="https://bitbucket.org/erosenberg1/">
              <FontIcon
                className="fa fa-bitbucket"
                color={green500}
                style={iconStyles}
                hoverColor={greenA200}
              />
            </a>
            <a href="mailto: roseneric15@gmail.com">
              <FontIcon
                className="fa fa-envelope"
                color={green500}
                style={iconStyles}
                hoverColor={greenA200}
              />
            </a>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
