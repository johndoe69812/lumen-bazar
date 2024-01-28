import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { SiApple } from "@react-icons/all-files/si/SiApple";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import Button from "@/shared/components/button/button";
import { clsx } from "clsx";

const OAuthLinks = () => {
  const buttonClassName =
    "w-12 h-12 flex justify-center items-center rounded-full text-white text-xl hover:scale-105";

  return (
    <div className="flex gap-2">
      <Button
        className={clsx(buttonClassName, " bg-red-600")}
        title="Sign in with Google"
      >
        <FaGoogle />
      </Button>
      <Button
        className={clsx(buttonClassName, "bg-gray-700")}
        title="Sign in with Apple"
      >
        <SiApple />
      </Button>
      <Button
        className={clsx(buttonClassName, "bg-gray-700")}
        title="Sign in with Facebook"
      >
        <FaFacebookF />
      </Button>
    </div>
  );
};

export default OAuthLinks;
