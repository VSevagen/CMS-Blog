import React, { useState } from 'react';
import DeleteAlert from './DeleteAlert';
import EditAlert from './EditAlert';
import ProjectUpdateEditor from './ProjectUpdateEditor';
import { Button } from 'evergreen-ui';
import '../styles/tab.css';

type EDTabPropsType = {
  type: string;
  id: string;
  text?: string;
  title: string;
  desc: string;
  demolink?: string;
  link?: string;
};

const EDtab = ({
  type,
  id,
  text,
  title,
  desc,
  demolink,
  link,
}: EDTabPropsType) => {
  const [del, setDelete] = useState(false);
  const [edit, setEdit] = useState(false);
  const [projEdit, setProjEdit] = useState(false);

  return (
    <div>
      <div className="tab">
        {title}
        <Button
          onClick={() => {
            type === 'blog' ? setEdit(true) : setProjEdit(true);
          }}
          appearance="primary"
          intent="none"
          float="right"
          marginLeft={10}
          marginTop={-3}
        >
          Edit
        </Button>
        <Button
          onClick={() => setDelete(true)}
          appearance="primary"
          intent="danger"
          float="right"
          marginTop={-3}
        >
          Delete
        </Button>
      </div>
      <DeleteAlert
        type={type}
        isShown={del}
        setisShown={setDelete}
        title={title}
        id={id}
      ></DeleteAlert>

      {edit && type == 'blog' && (
        <EditAlert
          id={id}
          title={title}
          desc={desc}
          text={text}
          handler={() => setEdit(!edit)}
        ></EditAlert>
      )}

      <ProjectUpdateEditor
        id={id}
        title={title}
        desc={desc}
        demolink={demolink}
        link={link}
        isShown={projEdit}
        setIsShown={setProjEdit}
      ></ProjectUpdateEditor>
    </div>
  );
};

export default EDtab;
