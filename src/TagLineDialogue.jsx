// @flow
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import { map } from 'lodash';
import { languages, frameworks, tools } from './known';

const TagLineDialogue = (props: { handleClose: Function, open: boolean }) => {
  const styles = {
    wrapper: {
      display: 'flex',
      flexFlow: 'row wrap',
    },
    chip: {
      margin: 4,
    },
  };
  const actions = [
    <FlatButton label="Close" primary onTouchTap={props.handleClose} />,
  ];
  return (
    <div>
      <Dialog
        bodyStyle={styles.wrapper}
        title="Known Languages"
        actions={actions}
        modal={false}
        open={props.open}
        onRequestClose={props.handleClose}
      >
        {map(languages, (language, key) => (
          <div key={key}>
            <Chip style={styles.chip}>
              <Avatar
                icon={
                  <FontIcon style={{ color: '' }} className={language.icon} />
                }
              />
              {language.name}
            </Chip>
          </div>
        ))}
        <p style={{ paddingRight: 50, width: '100%' }}>Known Frameworks</p>
        {map(frameworks, (framework, key) => (
          <div key={key}>
            <Chip style={styles.chip}>
              <Avatar
                icon={
                  <FontIcon style={{ color: '' }} className={framework.icon} />
                }
              />
              {framework.name}
            </Chip>
          </div>
        ))}
        <p style={{ paddingRight: 50, width: '100%' }}>Known Tools</p>
        {map(tools, (tool, key) => (
          <div key={key}>
            <Chip style={styles.chip}>
              <Avatar
                icon={<FontIcon style={{ color: '' }} className={tool.icon} />}
              />
              {tool.name}
            </Chip>
          </div>
        ))}
      </Dialog>
    </div>
  );
};

export default TagLineDialogue;
