import React, { useContext } from "react";

// router
import { Link } from "react-router-dom";

// firebase
import { AuthContext } from "../../auth/AuthProvider";
import { projectFirestore } from "../../firebase/config";

const NavBar: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  const handleLogOut = () => {
    projectFirestore.app.auth().signOut();
  };

  return (
    <nav>
      <nav className="nav">
        <Link to="/">
          <h1>Photo Gallery</h1>
        </Link>
        {currentUser && <button onClick={handleLogOut}>Log Out</button>}
      </nav>
    </nav>
  );
};

export default NavBar;
