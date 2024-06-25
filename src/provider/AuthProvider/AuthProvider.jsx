import { useState } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/config.firebase";
import { useAlert } from "react-alert";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const alert = useAlert();

  const createUser = (email, password, name, photo) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        console.log(userCredential);
        return updateProfile(currentUser, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => {
        alert.show("Failed!", error.message);
      });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, createUser, signIn, setErrorMessage };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
