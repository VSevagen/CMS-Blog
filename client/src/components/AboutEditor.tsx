import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useAlert } from 'react-alert';
import { UPDATE_ABOUT } from '../apollo/mutations';
import { SideSheet, Pane, Card, TextInputField, Button } from 'evergreen-ui';

type AboutEditorPropsType = {
  id: string;
  desc: string;
  email: string;
  skills: any;
  isShown: boolean;
  setIsShown: any;
};

const AboutEditor = ({
  id,
  desc,
  email,
  skills,
  isShown,
  setIsShown,
}: AboutEditorPropsType) => {
  const alert = useAlert();
  const [Id] = useState(id);
  const [Desc, setDesc] = useState(desc);
  const [Email, setEmail] = useState(email);
  const [Skills, setSkills] = useState(skills);
  const [updateAbout] = useMutation(UPDATE_ABOUT, {
    onCompleted(data) {
      if (data) {
        alert.show('About has been edited');
        window.location.reload();
      }
    },
  });

  function handleSubmit() {
    const string = Skills.toString();
    const Array = string.split(',');
    updateAbout({
      variables: { id: Id, desc: Desc, email: Email, skills: Array },
    });
  }

  return (
    <>
      <SideSheet
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
        }}
      >
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <Card backgroundColor="white" elevation={0} height={240}>
            <Pane padding={16}>
              <TextInputField
                label="Description"
                value={Desc}
                onChange={(evt: any) => setDesc(evt.target.value)}
              />

              <TextInputField
                label="Email"
                value={Email}
                onChange={(evt: any) => setEmail(evt.target.value)}
              />

              <TextInputField
                label="Skills"
                value={Skills}
                onChange={(evt: any) => setSkills(evt.target.value)}
              />
            </Pane>

            <Button onClick={handleSubmit} appearance="primary" float="right">
              Submit
            </Button>
          </Card>
        </Pane>
      </SideSheet>
    </>
  );
};

export default AboutEditor;
