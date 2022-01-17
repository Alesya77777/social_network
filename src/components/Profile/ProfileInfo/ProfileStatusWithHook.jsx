import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHook = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activeEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };


  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode ?
        <div>
          <span onDoubleClick={activeEditMode}>{props.status || '**********'}</span>
        </div>
        :
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}
          ></input>
        </div>
      }
    </div>
  )

};

export default ProfileStatusWithHook;