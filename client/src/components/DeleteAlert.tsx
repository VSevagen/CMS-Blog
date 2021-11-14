import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useAlert } from 'react-alert';
import { DELETE_BLOG, DELETE_PROJECT } from '../apollo/mutations';
import { TextInput, Pane, Dialog } from 'evergreen-ui';

type DeleteAlertPropsType = {
  id: any;
  title: any;
  type: any;
  isShown: boolean;
  setisShown: any;
};

const DeleteAlert = ({ id, title, type, isShown, setisShown }: DeleteAlertPropsType) => {
  const alert = useAlert()
  const [Title, setTitle] = useState('');
  const [value, setValue] = useState(type)
  const [deleteBlog] = useMutation(DELETE_BLOG, {
    onCompleted(data) {
      if (data) {
        alert.show('Blog deleted');
        window.location.reload()
      }
    }
  })

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    onCompleted(data) {
      if (data) {
        alert.show('Project deleted');
        window.location.reload()
      }
    }
  })

  function handleSubmit() {
    if (value == 'project') {
      deleteProject({ variables: { id: id } })
    }
    if (value == 'blog') {
      deleteBlog({ variables: { id: id } })
    }
  }

  function handleChange(evt: any) {
    setTitle(evt.target.value)
  }

  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="Are you absolutely sure ?"
        onCloseComplete={() => setisShown(false)}
        confirmLabel="Delete"
        intent="danger"
        isConfirmDisabled={Title != title}
        onConfirm={handleSubmit}>
          This action <strong>cannot</strong> be undone. This will permanently delete the blog <strong>{title}</strong>.

          <p className="pl-0">Please type <strong>{title}</strong> to confirm</p>
          <TextInput onChange={handleChange} value={Title}  />
      </Dialog>
    </Pane>
  )
}

export default DeleteAlert
