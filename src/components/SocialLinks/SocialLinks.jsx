import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLinks = () => {
  return (
    <div className="text-center">
      <p className="text-gray-600 mt-2 text-sm">Continue with</p>
      <div className="flex justify-center gap-x-3 text-2xl mt-2">
        {" "}
        <FaFacebook className="hover:cursor-pointer hover:scale-110 text-[#1974EC]" />
        <FcGoogle className="hover:cursor-pointer hover:scale-110" />
      </div>
    </div>
  );
};

export default SocialLinks;
