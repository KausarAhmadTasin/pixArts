import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/config.firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, name, photo, form) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(true);
        const currentUser = userCredential.user;
        return updateProfile(currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          toast.success("Successfully registered!");
          form.reset();
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const signIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, createUser, signIn, logOut, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
