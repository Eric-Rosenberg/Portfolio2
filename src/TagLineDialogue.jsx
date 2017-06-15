// @flow
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
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
  const languages = [
    {
      name: 'Javascript',
      icon: 'devicon-javascript-plain colored',
    },
    {
      name: 'Ruby',
      icon: 'devicon-ruby-plain colored',
    },
    {
      name: 'C',
      icon: 'devicon-c-line colored',
    },
    {
      name: 'C++',
      icon: 'devicon-cplusplus-line colored',
    },
    {
      name: 'NodeJS',
      icon: 'devicon-nodejs-plain colored',
    },
    {
      name: 'HTML 5',
      icon: 'devicon-html5-plain colored',
    },
    {
      name: 'React',
      icon: 'devicon-react-original colored',
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
              <Avatar
                icon={
                  <FontIcon
                    style={{ color: '' }}
                    className={language.icon}
                  />
                }
              />
              {language.name}
            </Chip>
          </div>
        ))}
      </Dialog>
    </div>
  );
};

export default TagLineDialogue;
