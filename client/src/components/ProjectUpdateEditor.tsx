import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useAlert } from 'react-alert';
import { UPDATE_PROJECT } from '../apollo/mutations';
import {
  SideSheet,
  Heading,
  Paragraph,
  Pane,
  Card,
  TextInputField,
  Button,
} from 'evergreen-ui';

type ProjectPropsType = {
  id: string;
  title: string;
  desc: string;
  link?: string;
  demolink?: string;
  isShown: boolean;
  setIsShown: any;
};

const ProjectUpdateEditor = ({
  id,
  title,
  desc,
  link,
  demolink,
  isShown,
  setIsShown,
}: ProjectPropsType) => {
  const alert = useAlert();
  const [Id] = useState(id);
  const [Title, setTitle] = useState(title);
  const [Desc, setDesc] = useState(desc);
  const [Link, setLink] = useState(link);
  const [Demolink, setDemo] = useState(demolink);
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    onCompleted(data) {
      if (data) {
        alert.show('Project updated');
        window.location.reload();
      }
    },
  });

  function handleSubmit() {
    updateProject({
      variables: {
        id: Id,
        title: Title,
        desc: Desc,
        link: Link,
        demolink: Demolink,
      },
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
                label="Project Title"
                value={Title}
                onChange={(evt: any) => setTitle(evt.target.value)}
              />

              <TextInputField
                label="Project Link"
                value={Link}
                onChange={(evt: any) => setLink(evt.target.value)}
              />

              <TextInputField
                label="Project Demo Link"
                value={Demolink}
                onChange={(evt: any) => setDemo(evt.target.value)}
              />

              <TextInputField
                label="Project Description"
                value={Desc}
                onChange={(evt: any) => setDesc(evt.target.value)}
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

export default ProjectUpdateEditor;
