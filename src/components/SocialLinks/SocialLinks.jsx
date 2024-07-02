import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider/AuthContext";
import { toast } from "react-toastify";

const SocialLinks = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const hangleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Signed in!");
      })
      .catch(() => {
        toast.error("Signing in failed!");
      });
  };

  const hangleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Signed in!");
      })
      .catch(() => {
        toast.error("Signing in failed!");
      });
  };
  return (
    <div className="text-center">
      <p className="text-gray-600 mt-2 text-sm">Continue with</p>
      <div className="flex justify-center gap-x-3 text-2xl mt-2">
        {" "}
        <FaGithub
          onClick={hangleGithubLogin}
          className=" hover:-translate-y-1 duration-200 hover:scale-105"
        />
        <FcGoogle
          onClick={hangleGoogleLogin}
          className=" hover:-translate-y-1 duration-200 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default SocialLinks;
