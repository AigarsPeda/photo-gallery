import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { projectFirestore } from "../../firebase/config";

const NavBar: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  const handleLogOut = () => {
    projectFirestore.app.auth().signOut();
  };

  return (
    <nav>
      <h4>Nav Bar</h4>
      {currentUser && <button onClick={handleLogOut}>Log Out</button>}
    </nav>
  );
};

export default NavBar;
