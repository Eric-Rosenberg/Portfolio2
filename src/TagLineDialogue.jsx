// @flow
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import { map, each } from 'lodash';

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
  const languages = [
    {
      name: 'Javascript',
    },
    {
      name: 'Ruby',
    },
    {
      name: 'C',
    },
    {
      name: 'C++',
    },
    {
      name: 'NodeJS',
    },
    {
      name: 'HTML',
    },
    {
      name: 'React',
    },
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
              <Avatar icon={<FontIcon className="fa fa-github" />} />
              {language.name}
            </Chip>
          </div>
        ))}
      </Dialog>
    </div>
  );
};

export default TagLineDialogue;
