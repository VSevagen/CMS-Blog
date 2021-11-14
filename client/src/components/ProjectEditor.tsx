import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useAlert } from 'react-alert';
import { CREATE_PROJECT } from '../apollo/mutations';
import { SideSheet, Pane, Card, TextInputField, Button } from 'evergreen-ui';

type ProjectEditorTypes = {
  isShown: boolean;
  setIsShown: any;
}

const ProjectEditor = ({isShown, setIsShown}: ProjectEditorTypes) => {
  const alert = useAlert()
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [link, setLink] = useState('');
  const [demolink, setDemo] = useState('');
  const [createProject] = useMutation(CREATE_PROJECT, {
    onCompleted (data) {
      if (data) {
        alert.show('Project created');
        window.location.reload()
      }
    }
  })

  function handleSubmit () {
    createProject({
      variables: { title: title, desc: desc, link: link, demolink: demolink }
    })
  }

  return (
    <>
      <SideSheet
      isShown={isShown}
      onCloseComplete={() => setIsShown(false)}
      containerProps={{
        display: 'flex',
        flex: '1',
        flexDirection: 'column'
      }}>
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <Card
            backgroundColor="white"
            elevation={0}
            height={240}
          >
            <Pane padding={16}>
            <TextInputField
              label="Project Title"
              value={title}
              onChange={(evt: any) => setTitle(evt.target.value)}
            />

            <TextInputField
              label="Project Description"
              value={desc}
              onChange={(evt: any) => setDesc(evt.target.value)}
            />

            <TextInputField
              label="Project Link"
              value={link}
              onChange={(evt: any) => setLink(evt.target.value)}
            />

            <TextInputField
              label="Project Demo Link"
              value={demolink}
              onChange={(evt: any) => setDemo(evt.target.value)}
            />
            </Pane>

            <Button onClick={handleSubmit} appearance="primary" float="right">Submit</Button>
          </Card>
        </Pane>
      </SideSheet>
    </>
  )
}

export default ProjectEditor
