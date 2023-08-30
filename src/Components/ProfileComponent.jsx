import React, { useState } from "react";
import ProfileCard from "./common/ProfileCard/Index";
import ProfileEdit from "./common/ProfileEdit/Index";

export default function ProfileComponent({ currentUser }) {
  const [isEdit, setisEdit] = useState(false);

  const onEdit = () => {
    setisEdit(!isEdit);
  };
  return (
    <div>
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )}
    </div>
  );
}
