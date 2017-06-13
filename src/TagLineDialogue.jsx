// @flow
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import { map } from 'lodash';

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
  const languages = ['Javascript', 'Ruby', 'C', 'C++', 'NodeJS', 'HTML', 'React'];
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
          <Chip key={key} style={styles.chip}>{language}</Chip>
        ))}
      </Dialog>
    </div>
  );
};

export default TagLineDialogue;
