import Image from "next/image";
import Link from "next/link";

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const NewPasswordModule = () => {
  return (
    <div className="login-background container ">
      <div className="max-w-[548px] py-40 mx-auto">
        <h2 className="text-2xl text-white mb-2.5">
            New Password
        </h2>
        <p className="text-primary text-lg">Please type your new password here. After this you will get the new password for your login details </p>
        <form className="mt-14">
          <div className="mb-8">
            <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                Password
            </label>
            <Input type="password" className="pr-16" placeholder={"Type password"} icon="icon-eye right-5" />
          </div>
          <div className="mb-12">
            <label className="block text-white text-lg font-SofiaPro-Bold mb-4">
                Password
            </label>
            <Input type="password" className="pr-16" placeholder={"Confirm your password"} icon="icon-eye right-5" />
          </div>
          <div className="flex">
              <Link href="/login">
                <Button className="bg-pink min-w-[13.75rem]">Reset Password</Button>
              </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordModule;
