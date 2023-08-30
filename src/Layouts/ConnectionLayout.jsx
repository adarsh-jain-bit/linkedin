import React, { useMemo, useState } from "react";
import Connections from "../Pages/Connections";
import { getCurrentUser } from "../api/FirestoreApi";
import Topbar from "../Components/common/Topbar/Index";

export default function ConnectionLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser} />
      <Connections currentUser={currentUser} />
    </div>
  );
}
